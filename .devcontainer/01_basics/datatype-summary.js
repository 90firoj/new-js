/* primitive :
7 types : string , number , boolean , null , undefined , symbol , BigInt 

Reference type or non-primitive :
 array , objects , Functions 
 
 */
const Id=Symbol('123');
const anotherId=Symbol('123')
console.log(Id===anotherId);