console.log("first");
console.log("second");

// Callback Hell

setTimeout(() => {
    console.log("first setTime")
}, 2000);



const sumOfTwo = (a, b, callBack) => {
    callBack(a, b);
}



sumOfTwo(4, 5, (a, b) => {
    console.log(a+b);
});
setTimeout(sumOfTwo, 2000);


const getData = (id, getNextData) => {
    setTimeout(() => {
        console.log("data: ", id);
        if (getNextData)
            getNextData();

    }, 3000)
}

getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});

let promise = new Promise((resolve, reject) => {
    console.log("Hii this is promise!");
    reject("suckcvjskdcess!");
})


// Promise Chain

const getPromise = (data) => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise object", data);
        setTimeout(() => {
            resolve("success!")
        }, 4000);
    })
}

getPromise(1).then((res) => {
    console.log(res, "success");
    return getPromise(2);
}).then ((res) => {
    console.log(res, "success");
    return getPromise(3);
}).then ((res) => {
    console.log(res, "success");
})


