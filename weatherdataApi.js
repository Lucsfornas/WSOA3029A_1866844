fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "a78061f88cmsh3a84dcb9ef4c1c2p1d23f7jsna50cfba9f86c"
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });