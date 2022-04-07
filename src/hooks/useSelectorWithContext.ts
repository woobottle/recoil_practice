import { useState } from "react";
import { COLORS, initialBoxes } from "../constants";

const useSelectorWithContext = () => {
  const [selectedColor, setSelectedColor] = useState<string>(COLORS.RED);
  const [boxStates, setBoxStates] = useState<string[]>(initialBoxes);

  return {
    selectedColor,
    boxStates,
    setSelectedColor,
    setBoxStates,
  };
};
export default useSelectorWithContext;
