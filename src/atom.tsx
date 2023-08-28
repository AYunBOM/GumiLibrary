import { atom } from "recoil";

export interface IbookTypes {
  금액: string;
  단가: string;
  발행년: string;
  발행자: string;
  번호: string;
  서명: string;
  저자: string;
  책수: string;
}

export const bookNameState = atom({
  key: "bookNamestate",
  default: "",
});

export const bookNumberState = atom({
  key: "bookNumberState",
  default: "",
});
