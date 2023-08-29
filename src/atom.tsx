import { atom } from "recoil";

export interface IAdultTypes {
  금액: string;
  단가: string;
  발행년: string;
  발행자: string;
  번호: string;
  서명: string;
  저자: string;
  책수: string;
}

export interface IChildTypes {
  가격: string;
  발행년: string;
  발행자: string;
  서명: string;
  순번: string;
  저자: string;
}

export interface IReferenceTypes {
  가격: string;
  발행년: string;
  발행자: string;
  서명: string;
  순번: string;
  저자: string;
}

export const bookNameState = atom({
  key: "bookNamestate",
  default: "",
});

export const bookNumberState = atom({
  key: "bookNumberState",
  default: "",
});
