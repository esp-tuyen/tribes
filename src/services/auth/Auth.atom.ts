import { atom } from 'recoil';

const isLogin = atom<boolean>({
  key: 'isLogin',
  default: false,
});

const AuthAtom = { isLogin };

export default AuthAtom;
