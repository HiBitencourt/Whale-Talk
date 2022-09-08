const input = 'turpetine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for(let inputIndex = 0; inputIndex<input.length; inputIndex++){
  // console.log(`InputIndex is ${inputIndex}.`)
  if(input[inputIndex] === 'e'){
    resultArray.push(input[inputIndex]);
  }
  if(input[inputIndex] === 'u'){
    resultArray.push(input[inputIndex]);
  }
  for(let vowelsIndex = 0; vowelsIndex<vowels.length; vowelsIndex++){
    // console.log(`vowelIndex is ${vowelIndex}.`)
    if(input[inputIndex] === vowels[vowelsIndex]){
      // console.log(input[inputIndex])
      resultArray.push(input[inputIndex]);
    }
  }
}

// console.log(resultArray);
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);