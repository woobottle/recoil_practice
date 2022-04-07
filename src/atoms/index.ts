import { BOX_NUM } from "./../constants/index";
import { atom, atomFamily, selector } from "recoil";
import { COLORS } from "../constants";

export const colorState = atom({
  key: "Color",
  default: COLORS.RED,
});

export const boxState = atomFamily({
  key: "BoxState",
  default: COLORS.WHITE,
});

type CounterProps = {
  [key in string]: number;
};

export const colorCounterState = selector({
  key: "ColorCounterState",
  get: ({ get }) => {
    const counter: CounterProps = {};
    Object.keys(COLORS).forEach((el) => (counter[el] = 0));

    for (let i = 0; i < BOX_NUM; i++) {
      counter[get(boxState(i))] += 1;
    }

    return counter;
  },
  set: ({ set }) => {
    for (let i = 0; i < BOX_NUM; i++) {
      set(boxState(i), COLORS.WHITE);
    }
  },
});
