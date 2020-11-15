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

    // data tings from API
    let data = valuesdata;

    // variables 
    const width = 700;
    const height = 500;

    // select graph 
    const visArea3 = d3.select("#visualisation3")
        .attr("viewBox", [0, 0, width, height]);

    // graph rad 
    const rad = Math.min(width, height) / 2;

    // append g elements 
    const G = visArea3
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // different colours array
    const color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

    // build graph 
    let pie = d3.pie();

    const arc = d3.arc()
        .innerRadius(rad / 2.5)
        .outerRadius(rad);

    const arcs = G
        .selectAll("arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc")

    arcs
        .append("path")
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr("d", arc)
        .on('mouseover', function (d, i) {
            d3.select(this)
                .transition()
                .duration('50')
                .attr('opacity', '.85');
        })
        .on('mouseout', function (d, i) {
            d3.select(this)
                .transition()
                .duration('50')
                .attr('opacity', '1');
        });
}
