// in addition to arrays javascript objects can also be indexed,
// in this example we specified that we want it to be indexed accessed by number and it should return a string
const people: { [id: number]: string } = Object.create(null);

people[34] = 'Mohammad';
people[35] = 'Khan';

console.log(people[12345].trim()); // Error
console.log(people[12345]?.trim()); // Use optional chaining to fox this
