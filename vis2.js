let covid19data = [
    { id: 'd1', type: "Total Confirmed cases", value: 15085083 }, /*15085083 */
    { id: 'd2', type: 'Active Cases', value: 5361549 }, /*5361549 */
    { id: 'd3', type: 'Critical Cases', value: 63786 }, /* 63786*/
    { id: 'd4', type: 'Deaths', value: 618504 }, /*618504 */
    { id: 'd5', type: 'Recovered Cases', value: 9105030 }, /*9105030 */
]

const width = 500;
const height = 250;


const margin = ({ top: 20, right: 0, bottom: 30, left: 55 });

// work out scales
let xScale = d3.scaleBand()
    .domain(covid19data.map(d => d.type))
    .rangeRound([margin.left, width - margin.right])
    .padding(0.1)


let yScale = d3.scaleLinear()
    .domain([0, d3.max(covid19data, d => d.value)])
    .range([height - margin.bottom, margin.top]);

// create axis
yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(yScale).ticks(null, "M"))
    .call(g => g.select(".domain").remove())

xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(xScale).tickSizeOuter(0))

yTitle = g => g.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 8)
    .attr("y", 6)
    .text("People in Millions")

console.log(yScale);
console.log(xScale);
console.log(covid19data);


// create graph
const visArea2 = d3.select("#visualisation2")
    .attr("viewBox", [0, 0, width, height]);

visArea2
    .append("g")
    .attr("fill", "steelblue")
    .selectAll("rect")
    .data(covid19data)
    .join("rect")
    .attr("x", d => xScale(d.type))
    .attr("y", d => yScale(d.value))
    .attr("height", d => yScale(0) - yScale(d.value))
    .attr("width", xScale.bandwidth())
    .on("mouseover", d => {
        showTools(d.type, [xScale(d.type), yScale(d.value)])
    })
    .on("mouseout", d => { d3.select("#Tools").style("display", "none"); });


visArea2
    .append("g")
    .call(xAxis);

visArea2
    .append("g")
    .call(yAxis);

visArea2
    .call(yTitle);


// showtools function show complete


function showTools(text, []) {

    d3.select("#Tools")
        .text(text)
        .style("top", [1])
        .style("left", [0])
        .style("display", "block");

}





