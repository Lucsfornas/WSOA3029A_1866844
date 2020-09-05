const activeppl = 0;

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
    activeppl = data[0].active;
    console.log(activeppl);
}



