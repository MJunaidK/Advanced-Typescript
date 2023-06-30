// Use cases
import { loadString, loadNumber } from './examples';

let someLegacyVariable: unknown;

someLegacyVariable = loadString();
if (typeof someLegacyVariable === 'string')
  console.log(someLegacyVariable.trim());

someLegacyVariable = loadNumber();
if (typeof someLegacyVariable === 'number')
  console.log(someLegacyVariable.toFixed(2));
