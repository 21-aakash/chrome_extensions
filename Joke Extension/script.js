fetch( 'https://icanhazdadjoke.com/slack')//get api will return a rsponse 
.then(data=>data.json()) //response data converted to json format and a promise will be returned 
.then(jokeData=>
    {
const jokeText = jokeData.attachments[0].text;

const jokeElement= document.getElementById("jokeElem");

jokeElement.innerHTML = jokeText;
    })