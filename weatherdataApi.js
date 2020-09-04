fetch("https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=SGD&to=MYR", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
        "x-rapidapi-key": "a78061f88cmsh3a84dcb9ef4c1c2p1d23f7jsna50cfba9f86c"
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });


