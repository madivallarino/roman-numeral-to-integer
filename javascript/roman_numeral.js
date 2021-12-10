function romanNumeral(string) {
  // type your code here
  totals = []
  const numbers = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
  for (let i = 0; i <= string.length; i++){
    if (string[i] in numbers){
      console.log(string[i])
    }
  }
return totals

  
}


// if (string[i] === "I"){
//   totals.push(1)
// }
// else if (string[i]=== "V"){
//   totals.push(5)
// }else if (string[i]=== "X"){
//   totals.push(10)
// }else if (string[i]=== "L"){
//   totals.push(50)
// }else if (string[i]=== "C"){
//   totals.push(100)
// } else if (string[i] === "D"){
//   totals.push(500)
// }else if (string[i]=== "M"){
//   totals.push(1000)
// } 

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
