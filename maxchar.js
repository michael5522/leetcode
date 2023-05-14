// //given a sring of chars, return the char that appears the most often.

// // function maxChar(xxx){
// //   let freqCounter = {}
// //   let lcStr = xxx.toLowerCase()

// //   for(let char of lcStr){
// //     console.log(char)
// //     freqCounter[char] = freqCounter[char] +1 || 1;

// //   }
// //   let maxCount = 0;
// //   let maxChar = null;
// //   console.log()
// //   for(let key in freqCounter){
// //     console.log(key)
// //     if(freqCounter[key] > maxCount){
// //       maxCount = freqCounter[key]
// //       maxChar = key
// //     }
// //   }
// //   console.log(freqCounter);
// //   console.log(maxChar);
// //   return maxChar;
// // }

// function maxChar(str){
//   console.log(str)
//   const array = str.split("");
//   console.log(array);
//   let freqCounter = {};
//   for(const element of array){
//     console.log('111',element)
//     freqCounter[element] = freqCounter[element] +1 || 1;
//   }
//   console.log(freqCounter)

//   let maxCount = 0;
//   let maxChar = null;
//   for(const lol in freqCounter){
//     console.log(freqCounter[lol])
//     if(freqCounter[lol] > maxCount){
//       maxCount = freqCounter[lol]
//       maxChar = lol
//     }
//   }
//   return maxChar;
// }

// console.log(maxChar('abcddeffff'))

function maxChar(str){
  const pp = abcdefg.split("");
  console.log(pp)
  let freqCounter = {};
  for(char of pp){
    console.log(char)
    freqCounter[char] = freqCounter[char] +1 || 1;
  }
  let maxChar = null;
  let number = 0;
  console.log(freqCounter)
  for(poo in freqCounter){
    console.log('11323',poo, freqCounter[poo])
    if(freqCounter[poo] > number){
      number = freqCounter[poo];
      maxChar = poo
    }
  }
  return maxChar;
}


const abcdefg = 'Michaelhh Chang';

console.log(maxChar(abcdefg))
