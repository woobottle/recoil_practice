import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { COLORS } from "../constants";

export const colorState = atom({
  key: "Color",
  default: COLORS.WHITE,
});

export const boxState = atomFamily({
  key: "BoxState",
  default: COLORS.WHITE,
});
