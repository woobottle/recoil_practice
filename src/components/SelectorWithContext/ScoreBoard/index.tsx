import { useContext, useMemo } from "react";
import { SelectorContext } from "..";
import { COLORS } from "../../../constants";
import { CounterProps } from "../../../types";

const ScoreBoard = () => {
  const { boxStates } = useContext(SelectorContext);

  const scores = useMemo(() => {
    const counter: CounterProps = {};
    Object.keys(COLORS).forEach((el) => (counter[el] = 0));

    boxStates.forEach((state) => (counter[state] += 1));
    return counter;
  }, [boxStates]);

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
