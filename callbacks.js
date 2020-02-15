'use strict';
let timeOne;
let timeTwo;
document.addEventListener('DOMContentLoaded', () => {
    timeOne = Math.floor(Math.random() * 1000);
    timeTwo = Math.floor(Math.random() * 1000);
    let greeting;
    let personName;
    showGreet(greeting,personName);
});
function showGreet(callback) {
    setTimeout(() => {
        let greetings = ['Hello', 'Hola', 'Konnichiwa', 'Bonjour', 'Hallo'];
        let randomIndex = Math.floor(Math.random() * greetings.length);
        let greeting = greetings[randomIndex];
        showNames(greeting, consoleprint);
    }, timeOne);
}

function showNames(greeting, callback) {
    setTimeout(() => {
        let names = ['Alice', 'Bob', 'Carol', 'Devon'];
        let randomIndex = Math.floor(Math.random() * names.length);
        let personName = names[randomIndex];
        callback(greeting, personName);
    }, timeTwo);
}
function consoleprint(greeting, personName) {
    console.log(greeting + ', ' + personName + '!');
}