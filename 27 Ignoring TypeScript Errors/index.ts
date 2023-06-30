//const someCondition: boolean = false;
if (true) {
  console.log('True');
} else {
  // @ts-ignore just testing
  console.log('False', typo);
}

// Use case
function getShape(): Circle | Square {
  throw new Error('Function not implemented.');
}
const someCondition: boolean = false;
type Circle = { radius: number };
type Square = { size: number };
const example = getShape();

if (someCondition) {
  console.log('I know its a circle', example.radius);
}

if (someCondition && 'radius' in example) {
  console.log('I know its a circle', example.radius);
}

if (someCondition && 'radius' in example) {
  console.log('I know its a circle', example.radius);
}

if (someCondition) {
  // @ts-ignore
  declare const example: Circle;
  console.log('I know its a circle', example.radius);
}
