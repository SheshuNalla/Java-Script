const red = document.querySelector(".color-red");
const cyan = document.querySelector(".color-cyan");
const violet = document.querySelector(".color-violet");
const orange = document.querySelector(".color-orange");
const pink = document.querySelector(".color-pink");



//console.log(window.getComputedStyle(red).backgroundColor);


const getBGcolor = (selectedEl) => {
    return window.getComputedStyle(selectedEl).backgroundColor;
}

console.log(getBGcolor(violet));