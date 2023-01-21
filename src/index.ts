/*
 *   index.ts
 *   Project: exercise_one
 *
 *   Author: Morgan Moore
 *   Created on: Jan 20, 2023
 */
function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const size1: number = arr1.length;
  const size2: number = arr2.length;
  const myArray = [];
  if (size1 > size2) {
    for (let i = 0; i < size1; i += 1) {
      myArray.push(arr1[i]);
      if (i < size2) {
        myArray.push(arr2[i]);
      }
    }
  } else {
    for (let i = 0; i < size2; i += 1) {
      if (i < size1) {
        myArray.push(arr1[i]);
      }
      myArray.push(arr2[i]);
    }
  }
  return myArray;
}

function checkWord(attempt: string, secret: string): string {
  let results: string = '';
  for (let i = 0; i < secret.length; i += 1) {
    if (attempt[i] === secret[i]) {
      results = results.concat('c');
    } else if (secret.includes(attempt[i])) {
      results = results.concat('p');
    } else {
      results = results.concat('a');
    }
  }
  return results;
}

type Candidate = {
  name: string;
  votes: Array<number>;
  funding: number;
};

const array1: Array<number> = [4, 5, 23, 18, 9, -5];
const array2: Array<number> = [18, 74, 88, 3, 7, 44];

const mergedArray1: Array<number> = merge(array1, array2);
console.log(mergedArray1);

const array3: Array<number> = [4, 5, 23, 18, 9, -5, 31];
const array4: Array<number> = [18, 74, 88, 3];

const mergedArray2: Array<number> = merge(array3, array4);
console.log(mergedArray2);

const array5: Array<number> = [18, 74, 88, 3];
const array6: Array<number> = [4, 5, 23, 18, 9, -5, 31];

const mergedArray3: Array<number> = merge(array5, array6);
console.log(mergedArray3);

const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}

const candidArray: Array<Candidate> = [
  { name: 'Edward Underwood', votes: [39.75, 25.79, 52.1, 19.59, 38.64], funding: 64219.53 },
  { name: 'Rose Olson', votes: [9.94, 15.79, 3.36, 3.61, 1.88], funding: 428745.99 },
  { name: 'Leonard Willis', votes: [42.65, 54.74, 33.89, 70.1, 55.28], funding: 25241.91 },
  { name: 'Nathaniel Taylor', votes: [7.66, 3.68, 10.64, 6.7, 4.2], funding: 38523914.25 },
];

console.log(candidArray);

console.log(
  `There is no winner for precinct 1. It is a run-off between ${candidArray[0].name} and ${candidArray[2].name},
   with ${candidArray[0].votes[0]}% and ${candidArray[2].votes[0]}% of the vote respectively. `
);

console.log(
  `${candidArray[2].name} is the winner of precinct 2 with ${candidArray[2].votes[1]}% of the vote.`
);

console.log(
  `${candidArray[0].name} is the winner of precinct 3 with ${candidArray[0].votes[2]}% of the vote.`
);

console.log(
  `${candidArray[2].name} is the winner of precinct 4 with ${candidArray[2].votes[3]}% of the vote.`
);

console.log(
  `${candidArray[2].name} is the winner of precinct 5 with ${candidArray[2].votes[4]}% of the vote.`
);
