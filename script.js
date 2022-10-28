/*Task 1 */

let number;
if(number % 2==0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}



/*Task 2*/

let firsNumber=0;
let previousNumber=1;
for (let i = 2; i <= 10; i++) {
   let lastNumber=firsNumber+previousNumber;
   firsNumber=previousNumber
   previousNumber=lastNumber;

   console.log(previousNumber);
}
