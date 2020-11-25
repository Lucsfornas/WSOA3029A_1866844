
let wid = 700;
let heig = 500;


const margin = ({ top: 20, right: 10, bottom: 40, left: 55 });

const SAPOP2020 = [
    { ser1: 1, ser2: 15488137 },
    { ser1: 2, ser2: 11531628 },
    { ser1: 3, ser2: 7005741 },
    { ser1: 4, ser2: 6734001 },
    { ser1: 5, ser2: 5852553 },
    { ser1: 6, ser2: 4679786 },
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


// d3.svg.axis().tickFormat(""); no tick labels


GPlabel = g => g.append("text")
    .attr("transform", "translate(" + (wid / 2) - (10) + " ," +
        (heig - 9) + ")")
    .attr("font-family", "sans-serif")
    .attr("font-size", 8)
    .style("text-anchor", "middle")
    .text("GP");

xTitle = g => g.append("text")
    .attr("transform", "translate(" + (wid / 2) + " ," +
        (heig - 10) + ")")
    .style("text-anchor", "middle")
    .text("Provinces");

yTitle = g => g.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("y", 10)
    .text("People in Province");


// X axis
let x = d3.scaleLinear().rangeRound([margin.left, wid - margin.right]);
let xAxis = d3.axisBottom().scale(x).tickSize(-440);
VisAreaExam.append("g")
    .attr("transform", `translate(0,${heig - margin.bottom})`)
    .attr("class", "theXaxis")

// Y axis
let y = d3.scaleLinear().range([heig - margin.bottom, margin.top]);
let yAxis = d3.axisLeft().scale(y).tickSize(-635);
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

    VisAreaExam
        .call(yTitle);

    VisAreaExam
        .call(xTitle);

    VisAreaExam
        .call(GPlabel);


}

update(SAPOP2020);

// x.domain([0, d3.max(data, function (d) { return d.ser1 })]);



