function numberChange(num){
    
let arrNum=num.toString().split('');
let len=arrNum.length;
if (num%1==0)
for (let i=len-3; i > 0; i -= 3) arrNum.splice(i,0,',')
else {
    let l = num.toString().indexOf('.');
    for (let i=l-3; i > 0; i -= 3) arrNum.splice(i,0,',')
}
return arrNum.join('');
}

console.log('10000000, ',numberChange(10000000));
console.log('123456, ',numberChange(123456));
console.log('12000.02, ',numberChange(12000.02));
console.log('12345678.0991, ',numberChange(12345678.0991));
console.log('1, ',numberChange(1));
