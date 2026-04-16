const url = "https://api.chucknorris.io/jokes/random";

fetch(url)
    .then((response) => {
        return response.json(); 
    })
    .then((data) => {
        const joke = data.value;
        console.log("JOKE :", joke);
        
            
    })

