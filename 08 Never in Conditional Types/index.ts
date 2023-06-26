function error(message: string): never {
  throw new Error(message);
}

// you are not allowed  to assign anything other than a never to never however string is something that exists and will get assigned to this variable and  therefore typestrict gives us a compile time error
const notAllowed: never = 'some string';

// you can still go ahead and assign  a never to another and that is perfectly fine
const allowed: never = error('this is okay');

//  you can also assign a never to anything else because the fact that this function never returns means that example will  never ever get assigned anything other  than a string in fact it won't even get assigned

const example: string = error('I will not return');

// the fact that you can assign a never to every  other type means that it can be considered  a part of every other type within typescript

type Verbose = string | never; // Verbose is something that has the type string

type Concise = string;

// distribution of unions within conditional types

/**
 * Exclude null and undefined from T
 */

export type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>;

// when we pass in a union into the conditional type it is  essentially the same as the union of the conditional applied to the different members in  our case the different members are string and null

type Expanded0 = NoEmpty<string> | NoEmpty<null>;

// expand  the two conditions inline to make it more explicit how typescript is actually viewing your code

// Ist case: string is not something that can be assigned to something that only accepts null and  undefined and therefore it gets mapped to string

// 2nd case:  null is something that can be  assigned to something that only accepts null and undefined and therefore it gets mapped to never
type Expanded1 =
  | (string extends null | undefined ? never : string)
  | (null extends null | undefined ? never : string);

//expand it further what typescript is actually seeing is string or never

type Expanded2 = string | never;

// string or never is just a verbose way of  saying string
// a good mental shorthand to have is that never in  a conditional type is the standard way of removing members from any given union

type Result = string;
