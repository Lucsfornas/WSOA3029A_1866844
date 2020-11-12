let covid19data = [
    { id: 'd1', type: 'totalconfirmed', value: 15 }, /*15085083 */
    { id: 'd2', type: 'totalactive', value: 12 }, /*5361549 */
    { id: 'd3', type: 'totalcritical', value: 11 }, /* 63786*/
    { id: 'd4', type: 'totaldeaths', value: 6 }, /*618504 */
    { id: 'd5', type: 'totalrecovered', value: 5 }, /*9105030 */
]
const margins = { top: 20, bottom: 10 };
const chart_width = 600;
const chart_height = 400 - margins.top - margins.bottom;

let selecteddata = covid19data;

const x = d3.scaleBand().rangeRound([0, chart_width]).padding(0.1);
const y = d3.scaleLinear().range([chart_height, 0]);

const chartcontainer = d3
    .select('#visualisation2')
    .attr('width', chart_width)
    .attr('height', chart_height + margins.top + margins.bottom);

x.domain(covid19data.map((d) => d.type));
y.domain([0, d3.max(covid19data, d => d.value) + 3]);

const chart = chartcontainer.append('g');

chart
    .append('g')
    .call(d3.axisBottom(x))
    .attr('transform', `translate(0, ${chart_height})`)
    .attr('color', '#4f009e');

function renderchart() {

    chart
        .selectAll('.bar')
        .data(selecteddata, data => data.id)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', x.bandwidth())
        .attr('height', (data) => chart_height - y(data.value))
        .attr('x', (data) => x(data.type))
        .attr('y', (data) => (data.value));


    chart.selectAll('.bar').data(selecteddata, data => data.id).exit().remove();

    chart.selectAll('.label')
        .data(selecteddata, data => data.id)
        .enter()
        .append('text')
        .text((data) => data.value)
        .attr('x', data => x(data.type) + x.bandwidth() / 2)
        .attr('y', data => (data.value) - 20)
        .attr('text-anchor', 'middle')
        .classed('label', true);

    chart.selectAll('.label').data(selecteddata, data => data.id).exit().remove();
}

renderchart();

let unselectedid = [];

const listitems = d3
    .select('#datavis2')
    .select('ul')
    .selectAll('li')
    .data(covid19data)
    .enter()
    .append('li');

listitems.append('span').text((data) => data.type);

listitems
    .append('input')
    .attr('type', 'checkbox')
    .attr('checked', true)
    .on('change', (data) => {
        if (unselectedid.indexOf(data.id) === -1) {
            unselectedid.push(data.id);
        } else {
            unselectedid = unselectedid.filter(id => id !== data.id);
        }
        selecteddata = covid19data.filter((d) => unselectedid.indexOf(d.id) == -1);
        renderchart();
    });