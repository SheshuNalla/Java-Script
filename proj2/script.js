const red = document.querySelector(".color-red");
const cyan = document.querySelector(".color-cyan");
const violet = document.querySelector(".color-violet");
const orange = document.querySelector(".color-orange");
const pink = document.querySelector(".color-pink");
const body = document.querySelector(".body");



//console.log(window.getComputedStyle(red).backgroundColor);


const getBGcolor = (selectedEl) => {
    return window.getComputedStyle(selectedEl).backgroundColor;
}

//color = getBGcolor(pink);

// violet.addEventListener('mouseenter', () => {
//     body.style.background = color;
// })

const colorChanger = (element, color) => {
    
    return element.addEventListener('mouseenter', () => {
        body.style.background = color;
    })
}

colorChanger(cyan, getBGcolor(cyan));
colorChanger(red, getBGcolor(red));
colorChanger(orange, getBGcolor(orange));
colorChanger(violet, getBGcolor(violet));
colorChanger(pink, getBGcolor(pink));