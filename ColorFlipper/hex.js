const hex = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const elem = document.getElementById("container");
const elem2 = document.getElementById("colorcode");
const btn = document.getElementById("buttonid");
btn.addEventListener("click", () => {
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor = hexColor + hex[getRandomNumber()];
    }
    elem.style.backgroundColor = hexColor;
    elem2.innerText = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}