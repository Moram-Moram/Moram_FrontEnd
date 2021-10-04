export const SINGUPINPUT = [
  { id: 'nickName', content: '닉네임', duplicateCheck: true },
  { id: 'id', content: '아이디', duplicateCheck: true },
  { id: 'password', content: '비밀번호', duplicateCheck: false },
];
export const WHITESTART = '처음 시작 화면을 흰 화면으로 시작';
export const START = '시작하기';

export type signupType = {
  id: string;
  password: string;
  nickname: string;
  whiteCheck: boolean;
};

export interface signupInterface {
  id: string;
  password: string;
  nickname: string;
  whiteCheck: boolean;
}
