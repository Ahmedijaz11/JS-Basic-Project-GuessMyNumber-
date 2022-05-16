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




let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0 ;


//when player press check button

document.querySelector('.check').addEventListener
('click', function() {

    const guessbox = Number(document.querySelector('.guess').value);

    if (!guessbox){
        document.querySelector('.message').textContent = '⛔ No Number inserted ❗❗❗';
    }


    else if (guessbox === secretnumber){
        document.querySelector('.message').textContent = 'Correct Number !!🎉🎉😃🎉🎉';
        document.querySelector('body').style.backgroundColor = '#008000';
        
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretnumber;
            
        //High Score code
          if(score > highscore){

              highscore =score;
              document.querySelector('.highscore').textContent = highscore;
          }

    }


//------------------------Refactored Code / Short and Simplified code-----------

    else if (guessbox !==secretnumber){

        if(score>1 ){ 
            document.querySelector('.message').textContent = guessbox > secretnumber ? 'Too High !! ✖️✖️✖️' : 'Too Low !! ✖️✖️✖️'; ;
            score--;
            document.querySelector('.score').textContent = score;
           }
           else {
            document.querySelector('.message').textContent = 'Game Over!!☠️☠️☠️';
            document.querySelector('.score').textContent = 0;
           }     
    }
});



//---------Again Button Functionality-----------

document.querySelector('.again').addEventListener
('click', function (){

    
   //Reset Secret Number
   secretnumber = Math.trunc(Math.random() * 20) + 1;

   //Reset Success message
   document.querySelector('.message').textContent = 'Start guessing...';

   //Reset score
   score = 20;
   document.querySelector('.score').textContent = score;

   //Hide Secret number
   document.querySelector('.number').textContent = '?';

   //empty guessing value
   document.querySelector('.guess').value= '';

   //restore background
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';

});







//---------------------  1st version of  conditons code / lenghty and repeitive------------



//     else if (guessbox > secretnumber){

//        if(score>1 ){ 
//         document.querySelector('.message').textContent = 'Too High !! ✖️✖️✖️';
//         score--;
//         document.querySelector('.score').textContent = score;
//        }
//        else {
//         document.querySelector('.message').textContent = 'Game Over!!☠️☠️☠️';
//         document.querySelector('.score').textContent = 0;
//        }     
//     }


//     else if (guessbox < secretnumber){
       
//         if(score>1){
//         document.querySelector('.message').textContent = 'Too Low !! ✖️✖️✖️';
//         score--;
//         document.querySelector('.score').textContent = score;
//         }
//         else {
//             document.querySelector('.message').textContent = 'Game Over!!☠️☠️☠️';
//             document.querySelector('.score').textContent = 0;
//            }     
//     }


// });




