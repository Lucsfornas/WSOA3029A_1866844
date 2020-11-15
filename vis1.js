// let exampledata = [
//     { x: 16, y: 15085083 },
//     { x: 36, y: 5361549 },
//     { x: 42, y: 63786 },
//     { x: 48, y: 618504 },
//     { x: 64, y: 9105030 },
// ]

const covid19data = [
    { id: 'd1', type: "Total Confirmed cases", value: 15085083 }, /*15085083 */
    { id: 'd2', type: 'Active Cases', value: 5361549 }, /*5361549 */
    { id: 'd3', type: 'Critical Cases', value: 63786 }, /* 63786*/
    { id: 'd4', type: 'Deaths', value: 618504 }, /*618504 */
    { id: 'd5', type: 'Recovered Cases', value: 9105030 }, /*9105030 */
]

const width = 500;
const height = 300;
const rad = 5;
const margin = ({ top: 20, right: 10, bottom: 20, left: 55 });
const align = 50;

const visArea = d3.select("#visualisation")
    .attr("viewBox", [0, 0, width, height]);

// let xScale = d3.scaleLinear().domain([0, 100]).range([0, graphheight]);
// let yScale = d3.scaleLinear().domain([0, 16000000]).range([graphheight, 0]);

// visArea
//     .append('g')
//     .attr("transform", 'translate(50, 10)')
//     .call(d3.axisLeft(yScale));

// visArea
//     .append('g')
//     .attr("transform", 'translate (50,500)')
//     .call(d3.axisBottom(xScale));

const xScale = d3.scaleBand()
    .domain(covid19data.map(d => d.type))
    .rangeRound([margin.left, width - margin.right])
    .padding(0.1)



const yScale = d3.scaleLinear()
    .domain([0, d3.max(covid19data, d => d.value)])
    .range([height - margin.bottom, margin.top]);

yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale).ticks(null, "M"))
//.call(g => g.select(".domain").remove());

xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale).tickSizeOuter(0));

yTitle = g => g.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 8)
    .attr("y", 6)
    .text("People in Millions");


visArea
    .append('g')
    // .attr("transform", `translate(${height - margin.bottom + align}, ${yScale.range})`)
    .selectAll('dots')
    .data(covid19data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.type))
    .attr("cy", d => yScale(d.value))
    .attr("r", rad)
    .on("mouseover", Mouseoverin)
    .on("mouseout", Mouseoverout);

visArea
    .append("g")
    .call(xAxis);

visArea
    .append("g")
    .call(yAxis);

visArea
    .call(yTitle);

function Mouseoverin(d, i) {

    d3.select(this)
        .attr("fill", "green")
        .attr("r", rad * 2);

};



function Mouseoverout() {

    d3.select(this)
        .attr("fill", "black")
        .attr("r", rad);
};
