var randomGuess, userGuess, scissors, paper, stone;

scissors = 1;
paper = 2;
stone = 3;

randomGuess = Math.floor(Math.random() * 3) + 1;
userGuess = prompt("To play this game, enter your choice: Scissors(1), Paper(2) or Stone(3).");

var insertDivRandom = document.createElement("DIV");
var textnodeRandom = document.createTextNode(randomGuess);
insertDivRandom.appendChild(textnodeRandom);
document.getElementById("randomguess").appendChild(insertDivRandom);

var insertDivUser = document.createElement("DIV");
var textnodeUser = document.createTextNode(userGuess);
insertDivUser.appendChild(textnodeUser);
document.getElementById("userguess").appendChild(insertDivUser);

if (parseInt(userGuess) === randomGuess) {
    document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + "<p>This is a match.</p>";
} else if (parseInt(userGuess) === 1 && randomGuess === 2) {
    document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + "<p>You have won, scissors will cut paper up.</p>";
} else if (parseInt(userGuess) === 2 && randomGuess === 1) {
    document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + "<p>I have won, scissors will cut paper up.</p>";
} else if (parseInt(userGuess) === 2 && randomGuess === 3) {
    document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + "<p>You have won, paper will wrap up stones.</p>";
} else if (parseInt(userGuess) === 3 && randomGuess === 2) {
    document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + "<p>I have won, paper will wrap up stones.</p>";
} else if (parseInt(userGuess) === 3 && randomGuess === 1) {
    document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + "<p>You have won, stones will break scissors.</p>";
} else if (parseInt(userGuess) === 1 && randomGuess === 3) {
    document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + "<p>I have won, stones will break scissors.</p>";
} else if (userGuess === "") {
    document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + "<p>You have not entered your choice.</p>";
}
