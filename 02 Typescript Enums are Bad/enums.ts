enum LoginMode {
  app,
  email,
  social,
}

enum LoginMode1 {
  app,
  email,
  social,
}

console.log(LoginMode1.email); // 0 1
console.log(LoginMode1.social); // 1 2

// numeric enums
export enum LoginMode2 {
  app = 0,
  email = 1,
  social = 2,
}

export function initiateLogin(mode: LoginMode2) {
  // ...
}

initiateLogin(LoginMode2.app);
initiateLogin(LoginMode2.email);

initiateLogin(0);
initiateLogin(1);

//initiateLogin(100);

// Lookup and reverse
console.log(LoginMode2['app']); // 0
console.log(LoginMode2[0]); // app

const keys = Object.keys(LoginMode2); // [ '0', '1', '2', 'app', 'email', 'social' ]
console.log(keys);

// string enums
enum LoginMode3 {
  app = 'app',
  email = 'email',
  social = 'social',
}

// Get all the keys
const keys1 = Object.keys(LoginMode3); // [ 'app', 'email', 'social' ]
console.log(keys1);

// Stable over network
console.log(LoginMode3.app); // 'app'
