type Persons = Record<string, { name: string; role: string }>;

const persons: Persons = {};
persons['1111'] = { name: 'Mohammad', role: 'Architect' };
persons['2222'] = { name: 'Junaid', role: 'Manager' };

//  value type enforced whenever we try to store a new person
persons['3333'] = { name: 'Khan' };

// achieve same with the existing index signatures feature of typescript
type PersonsVerbose = { [key: string]: { name: string; role: string } };

// Addition features of Record utility

// use a union of literal types as well as keys for your record utility
type Roles = 'admin' | 'owner';

let peopleWithRoles: Record<Roles, string[]> = {
  owner: ['Jane', 'June'],
  admin: ['John'],
};

peopleWithRoles = {
  owner: ['Jane', 'June'],
}; // Error admin is missing

const admins: string[] = peopleWithRoles['admin']; // Safe no need of undefined check

// we can use the Simple objects record utility as a shorthand for creating some simple objects

type Point = Record<'x' | 'y', number>; // y in this particular case i would much rather type the verbose version instead of using the record utility

type Pont1 = {
  x: number;
  y: number;
};

// Use case where record utility is needed

type PageInfo = {
  id: string;
  title: string;
};

type PagesVerbose = {
  home: PageInfo;
  services: PageInfo;
  about: PageInfo;
  contact: PageInfo;
};

// instead of having to define the page info annotation again and again we can simply specify that we will have the keys home services about and contact and they will all have the same type

type PageInfo1 = Record<
  'home' | 'services' | 'about' | 'contact',
  { id: number; title: string }
>;

// the internals of this record utility
type Record1<K extends keyof any, T> = {
  [P in K]: T;
};
