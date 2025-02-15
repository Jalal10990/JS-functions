// console.log("JS  functions one is")
// console.log("JS  functions two is")
// console.log("JS  functions three is")
// console.log("JS  functions four is")
// console.log("JS  functions five is")
// in function form 
function JS(number) {
console.log("JS  functions " +number+ " is")
console.log("JS  functions " +number+ " is")
console.log("JS  functions " +number+ " is")
console.log("JS  functions " +number+ " is")
console.log("JS  functions " +number+ " is")
}
JS("five")
JS("four")
JS("one")

function sum(a, b, c=2){
    // console.log(a+b)
    return a+ b+ c
}
result1 =sum(3, 9)
result2 =sum(45, 6)
result3 =sum(31, 4, 3)

console.log("The sum of these numbers is: " , result1)
console.log("The sum of these numbers is: " , result2)
console.log("The sum of these numbers is: " , result3)
// multiple times 

// arrow function 
  
const func1 = (x)=>{
    console.log("this is an arrow function", x)
}
func1(24)
func1(34)
func1(45)