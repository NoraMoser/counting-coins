
// let coinPurse = 0;

let quarters = .25;
let dimes = .1;
let nickels = .05;
let pennies = .01;

// let money = [quarters, dimes, nickels, pennies];

// function coinCounter(Placeholder){
// 	placeholder = (coinPurse / money);
// }
let input = prompt("Give me an amount of money from one penny to one dollar.");
// console.log(input);
// let output = {};
let coinPurse = {};

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

let arrayQuarters = input / quarters;
let arrayDimes = input / dimes;
let arrayNickels = input / nickels;
let arrayPennies = input / pennies;

  if (arrayQuarters >= 1) {
  	coinPurse.quarters += 1;
  } else if (arrayDimes >= 1) {
  	coinPurse.dimes += 1;
  } else if (arrayNickels >= 1) {
    coinPurse.nickels += 1;
  } else if (arrayPennies >= 1) {
  	coinPurse.pennies += 1;
  }


  return coinPurse;


}

let coin = coinCounter()
console.log(coin);



  // console.log(coinPurse.quarters);