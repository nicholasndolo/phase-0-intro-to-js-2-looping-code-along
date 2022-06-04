// Code your solutions in this file

const classMates = ["Guadalupe", "Ollie", "Aki"];
const message = [];
function writeCards(array, event){
  for (let i = 0; i < array.length; i++)
  message.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
  return message;
}

function countDown(number) {
  let myNumber = number;
  while(myNumber > -1) {
    console.log(myNumber);
    myNumber--;
  }
}

