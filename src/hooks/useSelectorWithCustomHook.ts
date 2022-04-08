import { initialBoxes } from "./../constants/index";
import { useReducer } from "react";
import { COLORS } from "../constants";

type SelectState = {
  color: string;
  boxStates: string[];
};

const getInitialState = () => ({
  color: COLORS.RED,
  boxStates: initialBoxes,
});

type SelectActionType = "CHANGE_COLOR" | "SELECT_BOX" | "RESET";
type SelectAction = {
  type: SelectActionType;
  payload?: any;
};

function reducer(prev: SelectState, action: SelectAction) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...prev,
        color: action.payload.color,
      };
    case "SELECT_BOX":
      const newStates = [...prev.boxStates];
      newStates[action.payload.id] = prev.color;

      return {
        ...prev,
        boxStates: newStates,
      };
    case "RESET":
      return getInitialState();
    default:
      throw new Error();
  }
}

const useSelectorWithCustomHook = () => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  const setColor = (color: string) => {
    dispatch({ type: "CHANGE_COLOR", payload: { color } });
  };

  const boxClickHandler = (id: number) => {
    dispatch({ type: "SELECT_BOX", payload: { id } });
  };

  const resetClick = () => {
    dispatch({ type: "RESET" });
  };

  return {
    state,
    setColor,
    boxClickHandler,
    resetClick,
  };
};

export default useSelectorWithCustomHook;
