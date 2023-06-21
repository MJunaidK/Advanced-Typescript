export type Name = { name: string };
export type Age = { age: number };

type Union = Name | Age | (Name & Age);
type Intersection = Name & Age;

const name = { name: 'Junaid' };
const age = { age: 40 };
const nameAndAge = { name: 'Mohammad', age: 39 };

let union: Union;

union = name;
union = age;
union = nameAndAge;

let intersection: Intersection;

intersection = nameAndAge;
//intersection = name; // Error
//intersection = age; // Error

filter(union);

function filter(union: Union) {
  if ('name' in union) {
    union.name;
  }

  if ('age' in union) {
    union.age;
  }

  if ('name' in union && 'age' in union) {
    console.log(union.name);
    console.log(union.age);
  }
}
