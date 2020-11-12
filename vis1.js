let exampledata = [
    { x: 10, y: 20 },
    { x: 40, y: 90 },
    { x: 80, y: 50 },
]

let margin = 50;
let topMargin = 10;
let graphheight = 500;
let visArea = d3.select("#visualisation");
let xScale = d3.scaleLinear().domain([0, 100]).range([0, 500]);
let yScale = d3.scaleLinear().domain([0, 100]).range([500, 0]);

visArea
    .append('g')
    .attr("transform", 'translate(50, 10)')
    .call(d3.axisLeft(yScale));

visArea
    .append('g')
    .attr("transform", 'translate (50,500)')
    .call(d3.axisBottom(xScale));

visArea
    .append('g')
    .attr("transform", 'translate(50, 10)')
    .selectAll('dots')
    .data(exampledata)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
        return xScale(d.x);
    })
    .attr("cy", function (d) {
        return yScale(d.y);
    })
    .attr("r", 7);

