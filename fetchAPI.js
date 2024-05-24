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

// getImage();


// const getpara = async (...obj) => {
//     await console.log(obj);
// }

// getpara({}, {})


// let a = 34;
// const b = 200;
// var c = 3;
// var c = 2000;

// if (true) {
//     let a = 1000;
//     const b = 5000;
//     // var c = 23;
//     console.log(b);
// }

// console.log(c);

// const but = function one() {
//     return "shubh"
// }

// console.log(but());

(() => {
    let name = "djsdk"
    // function second() {
    console.log(name);
    // }
    // second();
})();

// first1();

const arr = [23, 3, 5, 7, 2];
// let x = 2;
// for (let x in arr) {
//     console.log(arr[x]);
// }

arr.forEach((data, ind, arr) => {
    console.log(`value: ${arr[ind]} `);
});


const map = new Map();

map.set('shubh', {name: "manjarkui", salary: 'xxxxxxxx'});

console.log(map.keys);

// map.forEach( (val, key, map) => {
//     console.log(`${val} and ${key} and ${map.get(key)}`);
// })

// for (const [key, value] of map) {
//     console.log(map.get(key).name);
// }

const obj = [
    {
        lang: "javascript",
        exe : "js"
    },
    {
        lang: "java",
        exe : "java"
    },
    {
        lang: "python",
        exe : "py"
    }
];

obj.forEach( (val) => {
    console.log(val.exe);
})

// obj.map( (val, key, arr) => {
//     console.log(arr[key]['lang']);
// })


const arr1 = [1, 2, 3, 4, 5];

// const temp = arr1.map( (val, ind, num) => {
//     return val < 7;
// })

// const books = arr1.filter( (val) => (val === 3))

// console.log(books)

// const shubh = arr1.map( (val) => val*3)
//                     .map( (val) => val+3)
//                     .filter( (val) => val >= 20)

// console.log(shubh);

// const shubh = arr1.reduce( (pre, curr) => {
//     console.log(`pre: ${pre} and curr ${curr}`);
//     return pre+curr;
// });

// console.log( typeof shubh)

console.log("hii 1")

setTimeout( () => {
    console.log('hii2')
}, 5000)
console.log("hii 3")
