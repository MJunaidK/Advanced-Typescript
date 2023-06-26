import { proxy } from './proxy';
type Person = {
  name: string;
  age: number;
  location: string;
};

const junaid: Person = logAccess(
  {
    name: 'Junaid',
    age: 40,
    location: 'USA',
  },
  'age'
);

// we want to be notified whenever someone tries to read or modify John's age for example when he has his next birthday
junaid.age = junaid.age + 1;

//  function that takes a person object a string key that we want to observe and returns a person internally
function logAccess(object: Person, key: string): Person {
  return proxy(object, key);
}

// the signature of such a function is that any old string key can be passed in even though it might not exist on the person object,  in order to fix that we can hand code the Union of literal keys from the person object
function logAccess1(object: Person, key: 'name' | 'age' | 'location'): Person {
  return proxy(object, key);
}

const junaid1: Person = logAccess1(
  {
    name: 'Junaid',
    age: 40,
    location: 'USA',
  },
  'ages'
);

// key of operator takes a type as input and returns a union of the keys from that type

function logAccess2(object: Person, key: keyof Person): Person {
  return proxy(object, key);
}

const junaid2: Person = logAccess2(
  {
    name: 'Junaid',
    age: 40,
    location: 'USA',
  },
  'ages'
);

// Making the function generic and we can also use it for any other object

function logAccess3<T>(object: T, key: keyof T): T {
  return proxy(object, key);
}

const todo = logAccess3(
  {
    id: 1,
    text: 'Buy Milk',
  },
  'text'
);

todo.text = 'Buy Avocadoes';
