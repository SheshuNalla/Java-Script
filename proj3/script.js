const courses = [
    {
        name : "ReactJs Course",
        price : 2.7
    },
    {
        name : "Angular Course",
        price : 2.4
    },
    {
        name : "Java Course",
        price : 2.3
    },
    {
        name : "C++ Course",
        price : 2.1
    },
    {
        name : "JavaScript",
        price : 3.0
    }
    
]

function generateList(){

    const ul = document.getElementById("ul");
    ul.innerHTML = "";
    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add("m-1", "bg-white", "rounded-xl", "py-2", "px-2","bg-white", "text-2xl" ,"flex", "justify-between");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("py-2", "px-2", "text-2xl");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
};

generateList();


const button1 = document.querySelector(".text-white");
button1.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();
});

const button2 = document.querySelector(".bg-blue-500");
button2.addEventListener("click", () => {
    courses.sort((a, b) =>b.price - a.price);
    generateList();
});