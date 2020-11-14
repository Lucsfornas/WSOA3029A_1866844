let exampledata = [
    { x: 16, y: 15085083 },
    { x: 36, y: 5361549 },
    { x: 42, y: 63786 },
    { x: 48, y: 618504 },
    { x: 64, y: 9105030 },
]

let margin = 50;
let topMargin = 10;
let graphheight = 500;
let visArea = d3.select("#visualisation");
let xScale = d3.scaleLinear().domain([0, 100]).range([0, graphheight]);
let yScale = d3.scaleLinear().domain([0, 16000000]).range([graphheight, 0]);
let rad = 7;

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
    .attr("r", rad)
    .on("mouseover", Mouseoverin)
    .on("mouseout", Mouseoverout);

function Mouseoverin() {

    d3.select(this)
        .attr("fill", "green")
        .attr("r", rad * 2);

};

function Mouseoverout() {

    d3.select(this)
        .attr("fill", "black")
        .attr("r", rad);
};
