let covid19data = [
    { type: 1, value: 10 }, /*15085083 confirmed*/
    { type: 2, value: 20 }, /*5361549 active*/
    { type: 3, value: 30 }, /* 63786 critical*/
    { type: 4, value: 40 }, /*618504 deaths*/
    { type: 5, value: 50 }, /*9105030 recovered*/
]

let covdata = covid19data;

let xmargin = 60;
let topmargin = 10;
let height = 600;
let width = 600;

const margin = ({ top: 20, right: 0, bottom: 30, left: 50 });

const visAreaExam = d3.select("#ExamVis")
    .attr("viewBox", [0, 0, width, height]);

let xScale = d3.scaleLinear().domain([0, 5]).range([0, height]);
let yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);
/*16000000*/

/*scales*/

visAreaExam
    .append('g')
    .attr("transform", `translate(${xmargin},${height + topmargin})`)
    .call(d3.axisBottom(xScale));

visAreaExam
    .append('g')
    .attr("transform", `translate(${xmargin},${topmargin})`)
    .call(d3.axisLeft(yScale));

/*visualisation*/

visAreaExam
    .append('g')
    .selectAll('dots')
    .data(covdata)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
        return xScale(d.type);
    })
    .attr("cy", function (d) {
        return yScale(d.value);
    })
    .attr("r", 7);

d3.selectAll("circle").attr("fill", "red");

