import { COLORS } from "../../../constants";

interface ScoreBoardProps {
  boxStates: string[];
}

const ScoreBoard = ({ boxStates }: ScoreBoardProps) => {
  const scores = { [COLORS.WHITE]: 0, [COLORS.RED]: 0, [COLORS.BLUE]: 0 };
  boxStates.forEach((state) => {
    scores[state] += 1;
  });

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
