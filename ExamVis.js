let covid19data = [
    { type: 1, value: 10 }, /*15085083 confirmed*/
    { type: 2, value: 20 }, /*5361549 active*/
    { type: 3, value: 30 }, /* 63786 critical*/
    { type: 4, value: 40 }, /*618504 deaths*/
    { type: 5, value: 50 }, /*9105030 recovered*/
]


const width = 600;
const height = 300;


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

/*visualisation*/
const visAreaExam = d3.select("#ExamVis")
    .attr("viewBox", [0, 0, width, height]);

visAreaExam
    .append('g')
    .selectAll('dots')
    .data(covid19data)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
        return xScale(d.type);
    })
    .attr("cy", function (d) {
        return yScale(d.value);
    })
    .attr("r", 7);

visAreaExam
    .append("g")
    .call(xAxis);

visAreaExam
    .append("g")
    .call(yAxis);

visAreaExam
    .call(yTitle);

d3.selectAll("circle").attr("fill", "red");

