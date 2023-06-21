type LoginMode = 'app' | 'email' | 'social';

function initiateLogin1(loginMode: LoginMode) {}

initiateLogin1('app');

export const LoginMode = {
  device: 'device',
  email: 'email',
  social: 'social',
} as const;

export type LoginMode1 = keyof typeof LoginMode;

function initiateLogin2(loginMode: LoginMode1) {}

initiateLogin2('device');

initiateLogin2(LoginMode.device);

console.log(Object.keys(LoginMode)); //[ 'device', 'email', 'social' ]
