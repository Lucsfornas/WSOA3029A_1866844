const api = {
    key: "8a71da0d39cee6e47fe8472e84a233a2",

}
async function getweather() {
    const response = await fetch(`https://history.openweathermap.org/data/2.5/aggregated/year?q=Johannesburg&appid=${api.key}`);
    const data = await response.json();
    const { }
}

fetch(`https://history.openweathermap.org/data/2.5/aggregated/year?q=Johannesburg&appid=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);


