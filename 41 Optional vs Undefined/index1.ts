function logOptional(message?: string) {
  console.log(message);
}

function logUnion(message: string | undefined) {
  console.log(message);
}

logOptional(undefined);
logOptional();

logUnion(undefined);
logUnion(); // Error expected one argument. 'message' was not provided

// a limitation of using an optional parameter is that you cannot have required parameters follow an optional parameter this will result in a compile time error

function logOptional1(error?: string, message: string) {
  if (error != undefined) {
    console.log(error, message);
  } else {
    console.log(message);
  }
}

// if you have the annotation union with undefined you can continue to add additional parameters

function logUnion1(error: string | undefined, message: string) {
  if (error != undefined) {
    console.log(error, message);
  } else {
    console.log(message);
  }
}

// another reason for using an explicit annotation with the union with undefined is that it can actually help you refactor difficult code bases

function setConfig(config: {
  name: string;
  priority: number | undefined;
}): void {
  //...
}

setConfig({ name: 'hello', priority: undefined });
setConfig({ name: 'oooops', priority: 10 });
setConfig({ name: 'perfect' }); // can catch error
setConfig({ name: 'nooo' });
