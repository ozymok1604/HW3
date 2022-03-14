function getRandomArray(length, min, max) {
  const arr = [];
  function getRandNumber(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  for (i = 0; i < length; i++) {
    let number = getRandNumber(min, max);
    arr.push(number);
  }
  console.log(arr);
}

//getRandomArray(5, 0, 5);


function getModa(...numbers) {
  numbers.sort();

  let len = numbers.length;
  let k = 0;
  const amounts = [];
  const nums = [];
  let max = 0;
  let inum = 0;

  for (i = 0; i < len; i++) {
    if (numbers[i] != numbers[i + 1]) {
      for (j = 0; j < len; j++) {
        if (numbers[i] === numbers[j]) {
          k = k + 1;
        }
      }
      amounts.push(numbers[i]);
      nums.push(k);
    }

    if (max < k) {
      max = k;
    }
    k = 0;
  }
  for (i = 0; i < amounts.length; i++) {
    if (max == nums[i]) {
      inum = i;
      console.log(amounts[inum]);
    }
  }
}

//getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);


function getAvarage(...numbers) {
  let sum = 0;
  let len = numbers.length;
  let result = numbers.reduce(function (sum, current) {
    return sum + current;
  });

  let avarage = result / len;
  return avarage;
}

function getMediana(...numbers) {
  let len = numbers.length;

  numbers.sort((a, b) => a - b);
  if (len % 2 == 0) {
    let len2 = len / 2;
    let max = numbers[len2];
    let min = numbers[len2 - 1];
    console.log((max + min) / 2);
  } else {
    let len2 = len % 2;
    console.log(numbers[len2 + 1]);
  }
}
//getMediana(6, 2, 55, 11, 78,50,20);

const getEvenNumbers = (...numbers) =>{
  return numbers.map((number) => {
   if (number % 2 == 0) {
     console.log(number);
  }});
}

//getEvenNumbers(1,2,3,4,5,6,7,8);



const getNumbers55 = (...numbers) =>{
   return numbers.map((number) => {
    if (number % 5 == 0) {
      console.log(number);
   }});
}


//getNumbers55(5,25,1,6,7);

const badWords = ["fuck", "shit"];
let str = "Are you shit fucking kidding shit cool fucks";



const replaceBadWords2 = () => {
  const words = str.split(" ");

  return words.map((word) => {
    let temp = word;
    badWords.map((badWord) => {
      if (word.includes(badWord)) {
        temp = word.replace(badWord, "*".repeat(badWord.length));
      }
    });
    return temp;
  });
};

//console.log(replaceBadWords2().join(' '));

const divideByThree2 = () => {
  const word = "Commander".split("");
  console.log(word);

  const parts = [];
  const length = word.length;
  for (i = 0; i < length / 3; i++) {
    parts.push(word.splice(0, 3));
  }
  console.log(parts.join("   "));
};
//divideByThree2();
