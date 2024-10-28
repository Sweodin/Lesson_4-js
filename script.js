function guessNumberGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guess = 0;

  while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a Number between 1 and 10: "), 10);

    if (guess > randomNumber) {
      console.log("Too high! Try again");
    } else if (guess < randomNumber) {
      console.log("Too low! Try again");
    } else if (guess === randomNumber) {
      console.log("Congratulations! You guessed the right number");
    } else {
      console.log("Invalid Please! Please try again.");
    }
  }
}

guessNumberGame();
 
/* function generateRandomArray(length) {
  const randomArray = [];
  
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
  }
  
  return randomArray;
}



const myArray = generateRandomArray(10);
 
console.log(myArray); */


/* function sumEvenNumbers(array) {
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) { 
      sum += array[i];
    }
  }
  
  return sum;
}

const myArray = [1, 2, 3, 4, 5, 6];
const evenSum = sumEvenNumbers(myArray); 
console.log(evenSum); */