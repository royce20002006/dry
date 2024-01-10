function multiplyBiggerNumByTwo(num1, num2) {
 
  let bigNum = check(num1, num2)
  return bigNum * 2;
}


function divideBiggerNumByThree(num1, num2) {
  let bigNum = check(num1, num2)
  return bigNum / 3;
  
}

function eatMostTacos(sum1, sum2) {
  let bigNum = check(sum1, sum2)
    return `I ate ${bigNum} tacos.`;
  
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  if (weight1 < weight2) {
    smallDog = weight1;
   } else {
    smallDog = weight2;
   }
   return `I adopted a dog that weighs ${smallDog} pounds.`;
}

let check = (one, two) => {
  
  if (one > two) {
    bigNum = one;
    return bigNum;
  } else {
    bigNum = two;
    return bigNum
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
