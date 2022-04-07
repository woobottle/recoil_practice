import { useContext } from "react";
import { SelectorContext } from "..";
import { initialBoxes } from "../../../constants";

const ResetButton = () => {
  const { setBoxStates } = useContext(SelectorContext);

  const handleReset = () => {
    setBoxStates([...initialBoxes]);
  };

  return <button onClick={handleReset}>Reset</button>;
};

export default ResetButton;
