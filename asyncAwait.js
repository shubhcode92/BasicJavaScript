
let time = 4000;
function api(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather Data", id);
            resolve("success!");
        }, time);
        time -= 1000;
    });
}
async function getWeatherData() {
    await api(1);
    await api(2);
    await api(3);
    await api(4);
    await api(5);
}

(async function () {
    await api(1);
    await api(2);
    await api(3);
    await api(4);
    await api(5);
})();

// getWeatherData();