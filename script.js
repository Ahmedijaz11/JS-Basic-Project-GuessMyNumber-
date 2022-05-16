'use strict';

/* 
⭐⭐⭐-------------DOM Manipulation------------⭐⭐⭐

---- Example how to Select  class and change their values.----
----This process is known as DOM Manupulation----

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !!😃';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

*/

//  ⭐⭐⭐---------Starting Main Logic---------⭐⭐⭐


const secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretnumber;


let score = 20;
document.querySelector('.check').addEventListener
('click', function() {

    const guessbox = Number(document.querySelector('.guess').value);

    if (!guessbox){
        document.querySelector('.message').textContent = '⛔ No Number inserted ❗❗❗';
    }

    else if (guessbox === secretnumber){
        document.querySelector('.message').textContent = 'Correct Number !!🎉🎉😃🎉🎉';
    }

    else if (guessbox > secretnumber){

       if(score>1 ){ 
        document.querySelector('.message').textContent = 'Too High !! ✖️✖️✖️';
        score--;
        document.querySelector('.score').textContent = score;
       }
       else {
        document.querySelector('.message').textContent = 'Game Over!!☠️☠️☠️';
        document.querySelector('.score').textContent = 0;
       }     
    }

    else if (guessbox < secretnumber){
       
        if(score>1){
        document.querySelector('.message').textContent = 'Too Low !! ✖️✖️✖️';
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'Game Over!!☠️☠️☠️';
            document.querySelector('.score').textContent = 0;
           }     
    }


});
