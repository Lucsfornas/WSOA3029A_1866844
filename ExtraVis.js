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
        var activeppl = 0;
        var confirmedppl = 0;
        var criticalppl = 0;
        var deadppl = 0;
        var recoveredppl = 0;
        activeppl = data[0].active;
        confirmedppl = data[0].confirmed;
        criticalppl = data[0].critical;
        deadppl = data[0].deaths;
        recoveredppl = data[0].recovered;
        valuesdata = [activeppl, confirmedppl, criticalppl, deadppl, recoveredppl]
        drawtable();
        console.log(valuesdata);


    }
}

drawtable();

function drawtable() {
    var stats = valuesdata;
    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Active', 'Confirmed', 'Deaths', 'Critical', 'Recovered'],
            datasets: [{
                label: 'Bar Graph Showing Covid-19 World Statistics',
                data: stats,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}