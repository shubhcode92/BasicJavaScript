function change() {
    document.body.style.background = document.body.style.background == "white" ? "black" : "white";
    document.body.style.color = document.body.style.color == "black" ? "white" : "black";
}

function addTag() {
    let divs = document.querySelectorAll(".first-para");
    console.log(divs[0]);

    let btn = document.createElement("button");
    btn.innerText = "Click Me!";
    btn.style.color = "red";
    btn.style.backgroundColor = "white";

    let div = document.querySelector(".second-para");
    div.append(btn);
    // addTag();
}