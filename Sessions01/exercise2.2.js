function randomMinMax(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log('1,99: ',randomMinMax(1,99));
console.log('2,4: ',randomMinMax(2,4));
console.log('4,142: ',randomMinMax(4,142));
console.log('0,56: ',randomMinMax(0,56));
console.log('-5,6: ',randomMinMax(-5,6));