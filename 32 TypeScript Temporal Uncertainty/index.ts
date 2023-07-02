let suffix: string | null = getSuffix();
if (suffix != null) {
  let exampleOne: string = 'jane' + suffix.toUpperCase();

  // when we try to do the same thing going through a simple for loop over a javascript array we get a compile time error
  ['Mohammad', 'Junaid', 'Khan'].forEach((name) => {
    let exampleTwo: string = name + suffix.toUpperCase();
  });
}

let example: string | null = forExample();
if (example != null) {
  setTimeout(() => {
    console.log(example.toUpperCase());
  });
}
example = null;

// Fix is to use either optional chaining or once you've done a type check on a particular variable store the reference to that particular variable in a new one and typescript will automatically infer it to have that restricted type

let suffix1: string | null = getSuffix();
if (suffix1 != null) {
  const suffixLocal = suffix1; // this assignment will make sure suffix is string
  let exampleOne: string = 'jane' + suffixLocal.toUpperCase();

  ['Mohammad', 'Junaid', 'Khan'].forEach((name) => {
    let exampleTwo: string = name + suffixLocal.toUpperCase();
  });
}

let example1: string | null = forExample();
if (example1 != null) {
  const exampleLocal = example1;
  setTimeout(() => {
    console.log(exampleLocal.toUpperCase());
  });
}
example1 = null;
