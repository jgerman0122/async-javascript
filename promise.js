'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let timeOne = Math.floor(Math.random() * 1000);
    let timeTwo = Math.floor(Math.random() * 1000);
    let greeting;
    let personName;

    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            let greetings = ['Hello', 'Hola', 'Konnichiwa', 'Bonjour', 'Hallo'];
            let randomIndex = Math.floor(Math.random() * greetings.length);
            greeting = greetings[randomIndex];
            resolve();
        }, timeOne);
        
    })

  

    let promise2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            let names = ['Alice', 'Bob', 'Carol', 'Devon'];
            let randomIndex = Math.floor(Math.random() * names.length);
            personName = names[randomIndex];
            resolve();
        }, timeTwo);
    })

    promise1.then(() => promise2.then(() => {
        console.log(greeting + ', ' + personName + '!');
    }))


});