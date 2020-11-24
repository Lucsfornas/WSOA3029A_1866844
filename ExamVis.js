
let wid = 700;
let heig = 500;


const margin = ({ top: 20, right: 0, bottom: 30, left: 55 });

const SAPOP2020 = [
    { ser1: 1, ser2: 15488137 },
    { ser1: 2, ser2: 11531628 },
    { ser1: 3, ser2: 7005741 },
    { ser1: 4, ser2: 6734001 },
    { ser1: 5, ser2: 5852553 },
    { ser1: 6, ser2: 479786 },
    { ser1: 7, ser2: 4108816 },
    { ser1: 8, ser2: 2928903 },
    { ser1: 9, ser2: 1292786 }

];

const SAConfirmed = [
    { ser1: 1, ser2: 233164 },
    { ser1: 2, ser2: 126130 },
    { ser1: 3, ser2: 125919 },
    { ser1: 4, ser2: 118688 },
    { ser1: 5, ser2: 18408 },
    { ser1: 6, ser2: 31086 },
    { ser1: 7, ser2: 34600 },
    { ser1: 8, ser2: 58796 },
    { ser1: 9, ser2: 22968 }
];

const SADeath = [
    { ser1: 1, ser2: 4970 },
    { ser1: 2, ser2: 3309 },
    { ser1: 3, ser2: 4530 },
    { ser1: 4, ser2: 4379 },
    { ser1: 5, ser2: 490 },
    { ser1: 6, ser2: 614 },
    { ser1: 7, ser2: 549 },
    { ser1: 8, ser2: 1826 },
    { ser1: 9, ser2: 301 }
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
let x = d3.scaleLinear().rangeRound([margin.left, wid - margin.right]);
let xAxis = d3.axisBottom().scale(x).tickSize(-500);
VisAreaExam.append("g")
    .attr("transform", `translate(0,${heig - margin.bottom})`)
    .attr("class", "theXaxis")

// Y axis
let y = d3.scaleLinear().range([heig - margin.bottom, margin.top]);
let yAxis = d3.axisLeft().scale(y).tickSize(-700);
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
    let lineupdate = VisAreaExam.selectAll(".theLine")
        .data([data], function (d) { return d.ser1 });


    // draw line
    lineupdate
        .enter()
        .append("path")
        .attr("class", "theLine")
        .merge(lineupdate)
        .transition()
        .duration(3000)
        .attr("d", d3.line()
            .x(function (d) { return x(d.ser1); })
            .y(function (d) { return y(d.ser2); }))
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 2.5)


}

update(SAPOP2020);

// x.domain([0, d3.max(data, function (d) { return d.ser1 })]);


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

