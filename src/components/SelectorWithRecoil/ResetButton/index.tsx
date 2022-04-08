import { useResetRecoilState } from "recoil";
import { colorCounterState } from "../../../atoms";

const ResetButton = () => {
  const resetScore = useResetRecoilState(colorCounterState);

  const handleReset = () => {
    resetScore();
  };
  return <button onClick={handleReset}> Reset</button>;
};

export default ResetButton;
