

// const animals = ['lions', 'tigers', 'bears'];
// // Doing less than < instead of <= as its finding something in an index?
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])
// }

// const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];

// people.splice(0,0, 'i')






// for (let i = 0; i < people.length; i+=1) {
//     console.log(people[i].toUpperCase())

// }

// for (let i = people.length; i <= 1; i-=1) {
//     console.log(i)??
// }

// for (let i = people.length; i>=0; i--) {
//     console.log(i, people[i]);
// }

// for (let i = people.length; i>=1; i--) {
//     console.log(i, people[i]);
// }
//______________________________________________________________________________________________
//Colts course 198
//Math.random() // floor = Math.floor(Math.random() * 5) + 1; // the random number will be between 0-4 as its flooring
//the 0.999382 * 5 then floor will equal 4 and 0.099999 * 5 then floor will equal 0. We need + 1 to get 1-5 random.
//Math.floor(Math.random() * 3) + 20 ranges 20 - 22 has 3 options.
//while
//if statement
//______________________________________________________________________________________________
//Guessing game 1
// const num = Math.floor(Math.random() * 11) + 20; //*11 means of how many options are possible, + 20 will give you a range to choose from, in this case 20 to 30 (11 options!).
// let guess = prompt("Guess the number between 20 & 30?", ''); 

// while (guess !== num) { //as long as that condition is true, the loop will continue to run.
//     if (guess < num) {
//         guess = prompt("Too low", '');
//     } else if (guess > num) {
//         guess = prompt("Too High", '');
//     } else if (guess === " " || guess === "") {
//         guess = prompt("Invalid guess") ;
    
//     } else {
//         (guess === null)
//         alert("Cancelled");
//     }
    
// }
// alert("You guessed correctly!");
//__________________________________________________________________________________
//Guessing game 2

// const num = Math.floor(Math.random() * 10) + 1;

// let guess = prompt ("Enter a guess between 1 and 10?", '');

// while (guess !== num) {
// if (guess < num || guess > num) {
//     guess = prompt ("Try again...", '');
// } else if (guess === "answer") {
//     alert ( num );
//     break;
// }

// }

//______________________________________________________________________________________
//Guessing game 3

// const num = Math.floor(Math.random() * 100) + 1; // options between 1 & 100

// let guess = prompt("Enter a guess between 1 & 100?", '');

// while (guess !== num) { // while guess is not equal to num (True) code keeps running, code runs to while loop body
//     if (guess > num) { // If guess is greater than num (True) code keeps running, alert "Too High!", then break; to stop the code, code runs to the statement
//         guess = prompt("Too high, Please try again!", '');
//     } else if ( guess < num) { //else if guess is less than num (True) code keeps running, alert "Too low!", then break; to stop the code
//         guess = prompt("Too low, Please try again!", '');
//     }
// }
// alert("You have guessed correctly" + " " + num);

//__________________________________________________________________________________________________________________________________________________
//Guessing game 4

// const num = Math.floor(Math.random() * 10) + 1;

// let guess = prompt("Guess the number between 1 & 10?", '');
// while(guess === num) {
//     alert("You guessed correctly");
//     if (guess < num) {
//         guess = prompt("Too low, please try again?", '');
//     } else {
//         guess = prompt("Too high, please try again?", '');
//     }
// }

//__________________________________________________________________________________________________________________________________________________
// Guessing game 5 for loop 
// const num = Math.floor(Math.random() *100) + 1;

// for (let attempts = 0; attempts < 10; attempts++) {
//     if (guess < num) {
//         guess = prompt("Too low", '');
//     } else if (guess > num) {
//         guess = prompt("Too high", '');
//     }
// }
// alert("You've guessed correctly!");

//__________________________________________________________________________________________________________________________________________________
//Guessing game 6

// const num = Math.floor(Math.random() * 5) + 1;
// let guess = prompt("Enter a guess between 1 and 5?", '');
// while (guess !== num) {
//     if (guess < num || guess > num) {
//         guess = prompt("Try again", '');
//     } else {
//         alert( "Congratulations" + " " + num );
//         break;
//     }
// }

//_________________________________________________________________________________________________________________________________________________
//Guessing game 7

// const num = Math.floor(Math.random() * 5) + 1;
// let guess = prompt("Enter a guess between 1 and 5", '');
// while (guess !== num) { //if true and guess does not equal num the loop will continue
//     alert(num);
//     if(guess > num) {
//         guess = prompt("Too high", '');
//     } else if (guess < num) {
//         guess = prompt("Too low", ''); 
//     } else if ( guess !== NaN ) {
//         guess = prompt("Invalid guess", '');
//     } else if ( guess === null ) {
//         alert("Game cancelled");
//         break;
//     } else {
//         alert( "Congratulations" + " " + num );
//             break;
//     }
// }

//____________________________________________________________________________________________________________________________________________________
//Guessing game 8

// const num = Math.floor(Math.random() * 5) + 1;
// let guess = prompt("Enter guess", '');
// while (guess !== num) {
//     guess = prompt("Enter guess", '');

//     if ( guess === null);
//     alert("Game cancelled");
//     break;

// }


//_________________________________________________________________________________________________________________________________________________
//Guessing game 7 - v2


// const num = Math.floor(Math.random() * 5) + 1;
// let guess = prompt("Enter a guess between 1 and 5", '');
// while (guess !== num) { //if true and guess does not equal num the loop will continue
//     alert(num);
//     if ( guess === null) {
//         alert("Game cancelled");
//         break;
//     }else if (guess > num) {
//         guess = prompt("Too high", '');
//     } else if (guess < num) {
//         guess = prompt("Too low", ''); 
//     } else if ( guess !== " " || guess !== "") {
//         guess = prompt("Invalid guess", '');
//     } else {
//         alert( "Congratulations" + " " + num );
//             break;
            
//     }
    
// }
//____________________________________________________________________________________________________________________________________________________________
// cots guessing game 198 

// let maximum = parseInt(prompt("Enter the maximum number!")); //we parseInt maximum therefore strings return a NaN result.
// while (!maximum) {  // Use while loop to repeatedly parseInt maximum. While parseInt does not equal a number the prompt user to Enter a valid number for maximum.
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1; // the user enters the range to guess from, from 1 to ??
// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1; //made a variable to count how many attempts. Minimum is 1 attempt.

// while (parseInt(guess) !== targetNum) { // If we made it into this loop we know they are not equal, so the below code will run.  
//    if(guess === 'q') break;
//     attempts++; // every time you're in this loop it adds additional attempts.
//     if(guess > targetNum) { // If the guess is correct on the first try then this loop does not run.
//         guess = prompt("Too High! Enter a new guess:"); // Furthermore we don't need to worry about case of equality, !== just checks if not equal,
//     } else {                                                       // if equal then the code will take us to the bottom and result.
//         guess = prompt("Too low! Enter a new guess:");
//     }
// }
// console.log(`Congratulations, you've guessed the number ${attempts} attempts`);

//__________________________________________________________________________________________________________________________________________________________________
//Guessing game 9

// const num = Math.floor(Math.random() * 100) + 1;

// let guess = parseInt(prompt("Guess the number between 1 & 100?", ''));


// while(guess !== num) {

//     while (!guess) {
//         guess = parseInt(prompt("Invalid guess, try again!", ''));

//         if (guess > num) {
//             guess = parseInt(prompt("Too high!", ''));
//         } else if (guess < num) {
//             guess = parseInt(prompt("Too low!", ''));
//         } else if (guess !== null) {
//             alert ("Game finished");
//         }

//     } // this loop will end once the correct number is guessed



// }// the above code wont let this alert run until the conditions are met
// alert(`Congratulations! you've guessed ${num}`);
//________________________________________________________________________________________________________________________
//Guessing game 10

const num = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Guess the number between 1 & 10?"));

let attempts = 1;

while (parseInt(guess) !== num) {
    attempts++;
    if( guess < num) {
        guess = prompt("Too low", '');
    } else if (guess > num) {
        guess = prompt("Too high", '');
    } else if (guess === "answer") {
        guess = prompt(`The number is ${num}, enter guess!`);
    } else {
        guess = prompt("Invalid guess!", '');
    }
    if (guess === null) break;
}

if (guess === null) {
    alert(`Game cancelled!`);
} else {
    alert(`You guessed it! ${num} in ${attempts} tries`);
}
