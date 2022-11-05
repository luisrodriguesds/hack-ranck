function repeatedString(s, n) {
  // Write your code here
  let extendString = s  
  do {
    extendString+=s
  } while (extendString.split('').length <= n)
  extendString = extendString.slice(0, -(extendString.split('').length - n))
  
  const countA = extendString.split('').filter(item => item === 'a').length
  console.log(countA, extendString)
  return countA
}
// 100000000000
repeatedString('a', 10000)

// function countingValleys(steps, path) {
//   // Write your code here
//   const arrSteps = path.split('')
//   let arrValleys = []
//   let countStep = 0
//   let countValleys = 0
//   arrSteps.forEach((step, i) => {
//     if (step === 'D') {
//       countStep--
//     }

//     if (step === 'U') {
//       countStep++
//     }

//     arrValleys.push(countStep)
//   })

//   arrValleys.forEach((step, i) => {
//     if (step === -1 && arrValleys[i+1] === 0) {
//       countValleys++
//     }
//   })
//   // console.log(arrSteps, countStep, arrValleys, countValleys)
//   return countValleys
// }
// countingValleys(8, 'UDDDUDUU')

// function pageCount(n, p) {
//   // Write your code here
//   const arrLength = n % 2 === 0 ? Math.ceil(n/2) : Math.ceil(n/2) - 1
//   const book = Array.from(Array(arrLength + 1), (_, index) => {
//     if (index === 0) {
//       return [0, 1]
//     }
//     if (arrLength === index) {
//       if (n % 2 === 0 ) {
//         return [index * 2, 0]
//       } else {
//         return [index * 2, index * 2 + 1]
//       }
//     }
//     return [index * 2, index * 2 + 1]
//   });
//   const reverseBook = [...book].slice().reverse()
  
//   const findIndexBook = book.findIndex(item => p === item[0] || p === item[1])
//   const findIndexReverseBook = reverseBook.findIndex(item => p === item[0] || p === item[1])
//   return findIndexBook < findIndexReverseBook ? findIndexBook : findIndexReverseBook
// }
// pageCount(6, 2)
// function sockMerchant(n, ar) {
//   // Write your code here
//   let indexPar = 0;
//   const arAux = ar.map(item => ({ color: item, indexPar: 0 }))
//   ar.forEach((itemI, i) => {
//     ar.forEach((itemJ, j) => {
//       if (i !== j && itemI === itemJ) {
//         if (arAux[i].indexPar === 0 && arAux[j].indexPar === 0) {
//           indexPar++
//           arAux[i].indexPar = indexPar
//           arAux[j].indexPar = indexPar
//         }
//       }
//     })
//   })
//   return Math.max.apply(null, arAux.map(item => item.indexPar))
// }
// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])

// function divisibleSumPairs(n, k, ar) {
//   // Write your code here
//   const pars = []
//   const indexPars = []
//   ar.forEach((i, index) => {
//     ar.forEach((j, jndex) => {
//       if (index < jndex && ((i + j) % k === 0)) {
//         pars.push([i, j])
//         indexPars.push([index, jndex])
//       }
//     })
//   })
  
//   pars.forEach((par, i) => {
//     console.log(par, indexPars[i])
//   })
  
//   // let seen = {}
//   // const newPars = indexPars.filter(item => {
//   //   let k = JSON.stringify(item)
//   //   return seen.hasOwnProperty(k) ? false : (seen[k] = true)
//   // })

//   console.log(pars, pars.length)
//   return pars.length
// }
// divisibleSumPairs(100, 96, [34,38,30,27,1,81,37,19,74,73,32,13,44,99,7,88,50,52,32,82,29,1,55,85,89,58,35,19,76,55,45,37,41,74,80,46,38,74,56,18,86,23,57,27,52,9,69,78,52,8,62,85,65,2,11,70,34,26,72,11,20,32,9,75,74,85,29,6,87,81,40,11,31,49,66,91,99,85,18,54,81,93,52,9,72,89,85,66,24,11,85,3,14,36,72,3,76,99,88,8])


//function breakingRecords(scores) {
//   // Write your code here
//   let maxValue = 0;
//   let minValue = 0;
//   let maxCount = 0
//   let minCount = 0

//   scores.forEach((score, i) => {
//     if (i === 0) {
//       maxValue = score
//       minValue = score
//       return
//     }
//     if (score > maxValue) {
//       maxValue = score
//       maxCount++
//     }

//     if (score < minValue) {
//       minValue = score
//       minCount++
//     }

//   })

//   return [maxCount, minCount]
// }
// breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])

// function birthday(s, d, m) {
//   // Write your code here
//   let results = 0
//   s.forEach((_, i) => {
//     const sum = s.filter((_, j) => i >= j && i < j + m)
//     if (sum.length === m) {
//       const subSum = sum.reduce((arr, curr) => arr + curr ,0)
//       if (subSum === d) {
//         results++
//       }
//     }
//   })
  
//   console.log(results)
// }
// [2,2,1,3,2]
// [1,2,1,3,2]
// birthday([1,2,1,3,2], 3, 2)
// function kangaroo(x1, v1, x2, v2) {
//   // Write your code here
//   let i = 0;
//   let p1 = x1 + v1
//   let p2 = x2 + v2
//   let check = false
//   if (p1 === p2) {
//     console.log('YES')
//     return
//   }
  
//   while (p1 !== p2 && i < 10000) {
//     p1+= v1
//     p2+= v2
//     i++
//     if (p1 === p2) {
//       check = true
//     }   
//   }
//   console.log(check ? 'YES' : 'NO')
// }

// kangaroo(2564, 5393, 5121, 2836)

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   const realApples = apples.map(item => item + a)
//   const realOranges = oranges.map(item => item + b)

//   let countApples = 0
//   realApples.forEach(item => {
//     if (item >= s && item <= t) {
//       countApples++
//     }
//   })

//   let countOranges = 0
//   realOranges.forEach(item => {
//     if (item >= s && item <= t) {
//       countOranges++
//     }
//   })
//   console.log(countApples)
//   console.log(countOranges)
// }

// countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3,-2,-4])
