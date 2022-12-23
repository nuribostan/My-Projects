const joke = document.getElementById("joke");
const btn = document.getElementById("btn");

btn.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke(){
const confing = {
    headers : {
        Accept : "application/json",
    },
}

    const res = await fetch("https://icanhazdadjoke.com",confing);

    const data = await res.json();

    joke.innerHTML = data.joke;
}