

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
        appendData(data);
    })
    .catch(err => {
        console.log(err);
    });


function appendData(data) {
    const maincontainer = document.getElementById('act');
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Active ' + data[i].active;
        div.innerHTML = 'Confirmed ' + data[i].confirmed;
        div.innerHTML = 'Critical ' + data[i].critical;
        div.innerHTML = 'Date ' + data[i].date;
        div.innerHTML = 'Deaths ' + data[i].deaths;
        div.innerHTML = 'Recovered ' + data[i].recovered;
        maincontainer.appendChild(div);
    }
}

