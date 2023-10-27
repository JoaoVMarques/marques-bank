import { IAccountInfo } from './interfaces/accountInfo.ts';

export default function findAccountInfo(loginAccountEmail: string) {
  const localstorageInfo = localStorage.getItem('info');
  if(!localstorageInfo) {
    throw new Error('localStorage Info not having value');
  }

  const info: Array<IAccountInfo> = JSON.parse(localstorageInfo);

  const accountInfoFind = info.find(
    ({ email }) => loginAccountEmail === email,
  );

  return accountInfoFind;
}
