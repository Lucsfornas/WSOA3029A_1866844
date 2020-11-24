
let wid = 700;
let heig = 500;


const margin = ({ top: 20, right: 0, bottom: 30, left: 55 });

const SAcoviddata = [
    { ser1: 1, ser2: 0 },
    { ser1: 2, ser2: 0 },
    { ser1: 3, ser2: 1326 },
    { ser1: 4, ser2: 5350 },
    { ser1: 5, ser2: 27403 },
    { ser1: 6, ser2: 144264 },
    { ser1: 7, ser2: 471123 },
    { ser1: 8, ser2: 622551 },
    { ser1: 9, ser2: 674339 },
    { ser1: 10, ser2: 723682 },
    { ser1: 11, ser2: 767679 }
];

const UScoviddata = [
    { ser1: 1, ser2: 10 },
    { ser1: 2, ser2: 66 },
    { ser1: 3, ser2: 140640 },
    { ser1: 4, ser2: 1003974 },
    { ser1: 5, ser2: 1694864 },
    { ser1: 6, ser2: 2537636 },
    { ser1: 7, ser2: 4323160 },
    { ser1: 8, ser2: 5855521 },
    { ser1: 9, ser2: 7044327 },
    { ser1: 10, ser2: 8852730 },
    { ser1: 11, ser2: 11972556 }
];


let VisAreaExam = d3.select("#ExamVis")
    .attr("viewBox", [0, 0, wid, heig]);

// const xScale = d3.scaleBand()
//     .domain(data1.map(d => d.ser1))
//     .rangeRound([margin.left, wid - margin.right])



// const yScale = d3.scaleLinear()
//     .domain([0, d3.max(data1, d => d.ser2)])
//     .range([heig - margin.bottom, margin.top]);

// yAxis = g => g
//     .attr("transform", `translate(${margin.left},0)`)
//     .call(d3.axisLeft(yScale).ticks(null, "M"))

// xAxis = g => g
//     .attr("transform", `translate(0,${heig - margin.bottom})`)
//     .call(d3.axisBottom(xScale).tickSizeOuter(0));

// yTitle = g => g.append("text")
//     .attr("font-family", "sans-serif")
//     .attr("font-size", 8)
//     .attr("y", 6)
//     .text("someting cool");

// X axis
var x = d3.scaleLinear().rangeRound([margin.left, wid - margin.right]);
var xAxis = d3.axisBottom().scale(x);
VisAreaExam.append("g")
    .attr("transform", `translate(0,${heig - margin.bottom})`)
    .attr("class", "theXaxis")

// Y axis
var y = d3.scaleLinear().range([heig - margin.bottom, margin.top]);
var yAxis = d3.axisLeft().scale(y);
VisAreaExam.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .attr("class", "theYaxis")

// update data and axis
function update(data) {

    //Axis x and x
    x.domain([0, d3.max(data, function (d) { return d.ser1 })]);
    VisAreaExam.selectAll(".theXaxis").transition()
        .duration(3000)
        .call(xAxis);


    y.domain([0, d3.max(data, function (d) { return d.ser2 })]);
    VisAreaExam.selectAll(".theYaxis")
        .transition()
        .duration(3000)
        .call(yAxis);

    // select data and line
    var lineupd = VisAreaExam.selectAll(".theLine")
        .data([data], function (d) { return d.ser1 });

    // draw line
    lineupd
        .enter()
        .append("path")
        .attr("class", "theLine")
        .merge(lineupd)
        .transition()
        .duration(3000)
        .attr("d", d3.line()
            .x(function (d) { return x(d.ser1); })
            .y(function (d) { return y(d.ser2); }))
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2.5)


}

update(SAcoviddata)



// const datacov = d3.csv("../owid-covid-data.csv", function (data) {
//     console.log(data);
// });




// let covid19data = [
//     { type: 1, value: 10 }, /*15085083 confirmed*/
//     { type: 2, value: 20 }, /*5361549 active*/
//     { type: 3, value: 30 }, /* 63786 critical*/
//     { type: 4, value: 40 }, /*618504 deaths*/
//     { type: 5, value: 50 }, /*9105030 recovered*/
// ]



// const width = 700;
// const height = 500;


// const margin = ({ top: 20, right: 0, bottom: 30, left: 55 });

// // work out scales

// let xScale = d3.scaleBand()
//     .domain(covid19data.map(d => d.type))
//     .rangeRound([margin.left, width - margin.right])
//     .padding(0.1)


// let yScale = d3.scaleLinear()
//     .domain([0, d3.max(covid19data, d => d.value)])
//     .range([height - margin.bottom, margin.top]);

// // create axis

// yAxis = g => g
//     .attr("transform", `translate(${margin.left},0)`)
//     .call(d3.axisLeft(yScale).ticks(null, "M"))
//     .call(g => g.select(".domain").remove())

// xAxis = g => g
//     .attr("transform", `translate(0,${height - margin.bottom})`)
//     .call(d3.axisBottom(xScale).tickSizeOuter(0))

// yTitle = g => g.append("text")
//     .attr("font-family", "sans-serif")
//     .attr("font-size", 8)
//     .attr("y", 6)
//     .text("People in Millions")

// /*visualisation*/
// const visAreaExam = d3.select("#ExamVis")
//     .attr("viewBox", [0, 0, width, height]);

// visAreaExam
//     .append('g')
//     .selectAll('dots')
//     .data(covid19data)
//     .enter()
//     .append("circle")
//     .attr("cx", function (d) {
//         return xScale(d.type);
//     })
//     .attr("cy", function (d) {
//         return yScale(d.value);
//     })
//     .attr("r", 7);

// visAreaExam
//     .append("g")
//     .call(xAxis);

// visAreaExam
//     .append("g")
//     .call(yAxis);

// visAreaExam
//     .call(yTitle);

// d3.selectAll("circle").attr("fill", "red");

