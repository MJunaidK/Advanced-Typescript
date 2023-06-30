const numbers = [0, 1, 2];

/*const example: number = numbers[3]; // Not okay!
console.log(example.toFixed(2)); // Error at runtime*/

if (numbers[3] != null) {
  const example: number = numbers[3];
  console.log(example.toFixed(2));
}

// common javascript patterns for example using a for off loop typescript understands that there is no index access involved so it will correctly infer individual members to be a number
for (const num of numbers) {
  console.log(num.toFixed(2));
}

numbers.forEach((num) => console.log(num.toFixed(2)));

//  for example here we have an array that we trust that we will always access correctly and we get a compile time error

const trusted = [0, 1, 2];
console.log(trusted[2].toFixed(2)); // error
console.log(trusted[2]?.toFixed(2)); //  optional chaining operator
console.log(trusted[2]!.toFixed(2)); // really trust yourself to do the right thing you can use the typescript built-in null assertion operator
