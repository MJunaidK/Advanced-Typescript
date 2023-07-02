export type AccountNumber = number;
export type AccountBalance = number;

function setAccount(
  accountNumber: AccountNumber,
  accountBalance: AccountBalance
) {
  //... setup the account
}

let accountNumber: AccountNumber = 213;
let accountBalance: AccountBalance = 100;

setAccount(accountBalance, accountNumber);

// in order to make the account number and account balance no longer assignable to one another a simple fix that we can do is we can add stuff to their structure that makes them distinct from one another so account number will have  an underscore member that contains the literal string account number and account balance will have an underscore member containing the literal account balance

export type AccountNumber1 = number & { _: 'AccountNumber' };
export type AccountBalance1 = number & { _: 'AccountBalance' };

function setAccount1(
  : AccountNumber1,
  accountBalance: AccountBalance1
) {
  //... setup the account
  const doubleBalance = makeAccountBalance(accountBalance * 2);
}

// this has resulted in one more issue where our types are no longer compatible with just numbers so we cannot initialize these variables with numeric literals
let accountNumber1: AccountNumber1 = 213;
let accountBalance1: AccountBalance1 = 100;

setAccount1(accountBalance1, accountNumber1);

accountNumber1 = accountBalance1;
accountBalance1 = accountNumber1;

//  we can create utility functions that take a primitive number and then return the well-defined types

const makeAccountNumber = (accountNumber: number): AccountNumber1 =>
  accountNumber as AccountNumber1;
const makeAccountBalance = (accountBalance: number): AccountBalance1 =>
  accountBalance as AccountBalance1;

let accountNumber2: AccountNumber1 = makeAccountNumber(213);
let accountBalance2: AccountBalance1 = makeAccountBalance(100);

setAccount1(accountNumber2, accountBalance2);
