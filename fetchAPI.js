const URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";


// let promise = fetch(URL);

// promise.then((res) => {
//     setTimeout(() => {
//         console.log("api is here!", res)
//     }, 3000)
// }).catch((err) => {
//     console.log("Something is wrong!", err)
// })

const getImage = async () => {
    console.log("Fetching Data .....");
    let response = await fetch(URL);  
    console.log(response); // JSON Format
    let data = await response.json();
    console.log(data.data);
    
    const container = document.querySelector("#usa");

    for (x of data.data) {
        const divElement = document.createElement("div");
        const divElement1 = document.createElement("div");
        divElement.innerHTML = `Year: ${x.Year}`;
        divElement1.innerHTML = `Population: ${x.Population}`;
        container.appendChild(divElement);
        container.appendChild(divElement1);
    }

}

getImage();
