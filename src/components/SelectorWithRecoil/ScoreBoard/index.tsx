import { useRecoilValue } from "recoil";
import { colorCounterState } from "../../../atoms";

const ScoreBoard = () => {
  const scores = useRecoilValue(colorCounterState);
  return (
    <>
      {Object.entries(scores).map(([key, value]) => (
        <div>
          {key}: {value}
        </div>
      ))}
    </>
  );
};

export default ScoreBoard;
