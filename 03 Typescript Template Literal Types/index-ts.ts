let str: string;
str = 'whatever you want';

// Literal types
let strLiteral: 'hello';
strLiteral = 'hello';
strLiteral = 'anything else is an error';

let templateLiteral: `Example: ${string}`;
templateLiteral = `Example: hello`;
templateLiteral = `Example: world`;
templateLiteral = 'without a example prefix';
