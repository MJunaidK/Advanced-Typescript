// type representing some State object

type State = {
  name: string;
  age: string;
};

// objective is to create Setters for this particular state so it would have a name/age function that takes a value of type string

/**
 *{
    name: (value: string) => void
    age: (value: string) => void
  }
 */

type setters = {
  [K in keyof State]: (value: State[K]) => void;
};

// Type for the setter convention

type SetProperty<K extends string> = `set${Capitalize<K>}`;

type ExampleName = SetProperty<'name'>; // setName
type ExampleAge = SetProperty<'age'>; // setAge

// Renaming the property K within the map type by using an as clause

type setters1 = {
  [K in keyof State as `set${Capitalize<K>}`]: (value: State[K]) => void;
};

// Replace it with a generic argument called State

type setters2<State> = {
  [K in keyof State & string as `set${Capitalize<K>}`]: (
    value: State[K]
  ) => void;
};

// getters

type getters<State> = {
  [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K];
};

// create a store that has both Getters as well as Setters

type Store<State> = setters2<State> & getters<State>;

type PersonState = {
  name: string;
  age: number;
};

type PersonStore = Store<PersonState>;

const personStore: PersonStore = {
  getName: () => 'Khan',
  getAge: () => 40,
  setName: (value: string) => {
    console.log('Name setter: ' + value);
  },
  setAge: (value: number) => {
    console.log('Age setter: ' + value);
  },
};
personStore.setName('Junaid');
personStore.setAge(39);

const personName: string = personStore.getName();
const personAge: number = personStore.getAge();
console.log(personName, personAge);
