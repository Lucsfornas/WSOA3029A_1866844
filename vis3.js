var valuesdata = [];
getstats();

function getstats() {
    fetch("https://covid-19-data.p.rapidapi.com/report/totals?date-format=YYYY-MM-DD&format=json&date=2020-07-21", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "a78061f88cmsh3a84dcb9ef4c1c2p1d23f7jsna50cfba9f86c"
        }
    })
        .then(response => {
            return response.json();
        })

        .then(function (data) {
            console.log(data);
            handledata(data);
        })
        .catch(err => {
            console.log(err);
        });

    const handledata = (data) => {
        document.getElementById('act').innerText = data[0].active;
        document.getElementById('conf').innerText = data[0].confirmed;
        document.getElementById('crit').innerText = data[0].critical;
        document.getElementById('det').innerText = data[0].deaths;
        document.getElementById('rec').innerText = data[0].recovered;
        let activeppl = 0;
        let confirmedppl = 0;
        let criticalppl = 0;
        let deadppl = 0;
        let recoveredppl = 0;
        activeppl = data[0].active;
        confirmedppl = data[0].confirmed;
        criticalppl = data[0].critical;
        deadppl = data[0].deaths;
        recoveredppl = data[0].recovered;
        valuesdata = [activeppl, criticalppl, deadppl, recoveredppl]
        piedata();
        console.log(valuesdata);


    }
}



piedata();

function piedata() {

    let piestats = valuesdata;
    let data = piestats;

    const svg = d3.select("#visualisation3"),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2,
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

    let pie = d3.pie();

    const arc = d3.arc()
        .innerRadius(100)
        .outerRadius(radius);

    const arcs = g.selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc")

    arcs.append("path")
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr("d", arc);


}
