type Prizes = {
  first: string;
  second: string;
};

function logPrizes(prizes: Prizes) {
  for (const key in prizes) {
    console.log(key, prizes[key].toUpperCase());
  }
}

// we can declare the variable before the loop with the explicit type that we expect it to be which in our case is key of prices and now the error will go away and touch it will assume that you know what you're doing and key will always be key of prices and allows you to access prices with this particular key without any issues

function logPrizes1(prizes: Prizes) {
  let key: keyof Prizes;
  for (key in prizes) {
    console.log(key, prizes[key].toUpperCase());
  }
}

let prizes = {
  first: 'gold',
  second: 'silver',
};
logPrizes(prizes);

const bad = {
  first: 'gold',
  second: 'silver',
  bronze: 3,
};

logPrizes(bad);
