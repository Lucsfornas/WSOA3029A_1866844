let covid19data = [
    { id: 'd1', type: "Total Confirmed cases", value: 15085083 }, /*15085083 */
    { id: 'd2', type: 'Active Cases', value: 5361549 }, /*5361549 */
    { id: 'd3', type: 'Critical Cases', value: 63786 }, /* 63786*/
    { id: 'd4', type: 'Deaths', value: 618504 }, /*618504 */
    { id: 'd5', type: 'Recovered Cases', value: 9105030 }, /*9105030 */
]

const width = 500;
const height = 400;

const margin = ({ top: 20, right: 0, bottom: 30, left: 55 });

let x = d3.scaleBand()
    .domain(covid19data.map(d => d.type))
    .rangeRound([margin.left, width - margin.right])
    .padding(0.1)



let y = d3.scaleLinear()
    .domain([0, d3.max(covid19data, d => d.value)])
    .range([height - margin.bottom, margin.top]);


yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, "M"))
    .call(g => g.select(".domain").remove())

xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))

yTitle = g => g.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("y", 10)
    .text("People in Millions")

console.log(y);
console.log(x);
console.log(covid19data);


const svg = d3.select("#visualisation2")
    .attr("viewBox", [0, 0, width, height]);

svg.append("g")
    .attr("fill", "steelblue")
    .selectAll("rect")
    .data(covid19data)
    .join("rect")
    .attr("x", d => x(d.type))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("width", x.bandwidth());

svg.append("g")
    .call(xAxis);

svg.append("g")
    .call(yAxis);

svg.call(yTitle);





