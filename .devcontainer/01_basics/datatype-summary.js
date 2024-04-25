/* primitive :
7 types : string , number , boolean , null , undefined , symbol , BigInt 

Reference type or non-primitive :
 array , objects , Functions 
 
 */
/* const Id=Symbol('123');
const anotherId=Symbol('123')
console.log(Id===anotherId);

const sub =["math" , "phy" , "coms"]; //Array

const myObj = {
    name: "Firoj",
    age: 20 ,
}

const Myfunction = function(){
    console.log("Hello world");
}

console.log(typeof sub);
*/

//+++++++++++++++++++++++++++++++++MEMORY+++++++++++++++++++++++++++++

//memory=> 1. Stack (use for primitive) 2. Heap (use for Non-primitive)

let userOne ={
    Email:"Firoj@one.com",
    Id:"123456",
}
let userTwo=userOne;

userTwo.Email="Firoj@google.com";
console.log(userOne.Email);
console.log(userTwo.Email);