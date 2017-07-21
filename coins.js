
// let coinPurse = 0;

let quarters = 25;
let dimes = 10;
let nickels = 5;
let pennies = 1;

// let money = [quarters, dimes, nickels, pennies];

// function coinCounter(Placeholder){
// 	placeholder = (coinPurse / money);
// }
let input = prompt("Give me an amount of money from one penny to one dollar.") * 100;
// console.log(input);
// let output = {};
let coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  

// for (let i = 0; i < coinPurse.length; i++) {
//   while (coinPurse >= .01){
// 	}
// }

let arrayQuarters = input / quarters;
let arrayDimes = ((input % quarters) / dimes); 
let arrayNickels = ((input % quarters) % dimes) / nickels;
let arrayPennies = ((((input % quarters) % dimes)) % nickels) / pennies;



  if (arrayQuarters >= 1) {
  	coinPurse.quarters += Math.floor(arrayQuarters);
   } if (arrayDimes >= 1) {
  	  coinPurse.dimes += Math.floor(arrayDimes);
   }   if (arrayNickels >= 1) {
	      coinPurse.nickels += Math.floor(arrayNickels);
   }     if (arrayPennies >= 1) {
  	   coinPurse.pennies += Math.floor(arrayPennies);
   }
  // // if (arrayDimes >= 1) {
  // // 	coinPurse.dimes += Math.floor(arrayDimes);
  // }

  return coinPurse;


}

let coin = coinCounter();
console.log(coin)



  // console.log(coinPurse.quarters);