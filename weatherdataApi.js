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

}

