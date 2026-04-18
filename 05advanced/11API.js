
fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        return response.json(); 
    })
    .then((data) => {
        const joke = data.value;
        console.log("JOKE :", joke);

    })        

