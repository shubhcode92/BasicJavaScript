
// const product = {
//     image : "Not Available",
//     name : "Expansive Pen",
//     rating : 3.5,
//     IsOffer : true,
//     price : 180.2
// };

// let first = "shubh code";

// console.log(product);

// // Loops
//  let str = "shubhcode";

//  for (let c of str) {
//     console.log(str.replace("sh", "c"));
//  }

// for (let x in str) {
//     if (x%2 === 0)
//         console.log(x);
// }
// let gameNumber = 34;
// let gaisen = prompt("guess number:");
// while (gameNumber != gaisen) {
//     gaisen = prompt("Enter wrogn, Try again:");
// }

// alert("You win");

// let str1 = "ma";


// const wowel = (str) => {
//     let count = str.match(/[aioue]/gi);
//     let temp = 'aioue';
//     // for (let x of str) {
//     //     if (temp.includes(''+x))count++;
//     // }

//     return count === null ? 0 : count.length;
// };

// console.log(wowel("dkfsdksdkvd"));

// let arr = [34,56,90,23,54,99,96,21,98];

// let newArray = arr.filter((val) => {
//     return val>90 ;
// });

// console.log(newArray);

// let n = prompt("Enter Size of array");

// let arr = [];

// for (let i=0; i<n; i++) {
//     arr.push(prompt("Enter element!"));
// }

// console.log(`${arr} ${arr.length}`);

// const student = {
//     name : "Shubh",
//     marks : 99.4,
//     getName() {
//         console.log(this.name);
//     }
// }

// class Car {
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("end");
//     }
//     constructor () {
//         console.log("Drive the car");
//     }
// }

// class tata extends Car {
//     start () {
//         console.log("Start tata car");
//     }
// }

// let obj1 = new tata();

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(this.name);
    }
}

let first = new user("shubh", "shubh773@gmail.com");

