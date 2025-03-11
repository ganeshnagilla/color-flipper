const elem = document.getElementById("container");
const elem2 = document.getElementById("colorcode");
const colors = ["white", "black", "blue"];


const btn = document.getElementById("buttonid");
btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    elem.style.backgroundColor = colors[randomNumber];
    elem2.innerHTML = " " + colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}



console.log("Hello World!");