for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  // debugger;
}
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  //   debugger;
  }

  return gifts;
}

wrapGifts(gifts);
const cardNames = ["njeke","jini","meroe"];
const message = writeCards(cardNames)
function writeCards(cardNames) {
    const thankYouMessage= [];
    for (let i = 0; i < cardNames.length; i++) {
      thankYouMessage.push(`Thank you, ${cardNames[i]}, for the wonderful surprise gift!`);
      
    }
    return thankYouMessage;
    
  }
console.log(message)


function countDown(number1){
  for(let i=number1; i>=0; i--){
      console.log(i);
  }
}
countDown(number1)
