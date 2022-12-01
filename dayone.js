//Beräkna summan av talen från 67 till 95 (inklusive både 67 och 95). Subtrahera (minus) sedan med alla tal från 48 till 63 (inklusive 48 och 63).
let positiveNumber = 0
let negativeNumber = 0
for (let index = 67; index < 96; index++) {
    positiveNumber += index;
    
}
for (let index = 48; index < 64; index++) {
    negativeNumber += index;
    
}
console.log(positiveNumber - negativeNumber);