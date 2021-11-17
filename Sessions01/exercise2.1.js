function factorial(number) {

if (number==0 || number == 1) return 1;
else if (number <0) return 'khong ton tai giai thua cua so am!';

else {
    let n = 1;
    for (let i=1; i<=number; i++) n*=i;
    return n;
    }
}
console.log('0, ',factorial(0));
console.log('1, ',factorial(1));
console.log('2, ',factorial(2));
console.log('3, ',factorial(3));
console.log('4, ',factorial(4));
console.log('5, ',factorial(5));
console.log('-5, ',factorial(-5));
