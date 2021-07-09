for (let i = 1; i <= 10; i++) {
    console.log(i);
 }
 console.log("Done!");

 for (let j = 10; j >= 1; j--) {
    console.log(j);
 }
 console.log("Done Backwards!");

 let k = 1;
 while (k <= 10) {
    console.log(k);
    k++;
 }
 console.log("Done with while loop!"); 

 let m = 10;
 while (m >= 1) {
    console.log(m);
    m--;
 }
 console.log("Done with while loop backwards!"); 

 let l = 1;
do {
   console.log(l);
   l++;
} while (l <= 10);
console.log("Done with Do While!");

let n = 10;
do {
   console.log(n);
   n--;
} while (n >= 1);
console.log("Done with Do While backwards!");

const numbers = [1,2,3,4,5,6,7,8,9,10];
for (let number of numbers) {
    console.log(number);
}
console.log("Done with array!");

let string1 = "method";
let y = "";
for (let x = 10; x > string1.length; x--) {
     y = (y + " ");
}
console.log(y + string1);
console.log("Done with extended challenge!")