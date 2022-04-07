import { BOX_NUM, COLORS } from "../constants";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { colorState, boxState, colorCounterState } from "../atoms";
import { SyntheticEvent } from "react";

const SelectorWithRecoil = () => {
  return (
    <>
      <Header />
      <GameBoard />
      <ScoreBoard />
      <ResetButton />
    </>
  );
};

const Header = () => {
  const [selectedColor, setSelectedColor] = useRecoilState(colorState);

  const handleColor = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }

    const { color: nextColor } = e.target.dataset;

    if (!nextColor) {
      return;
    }

    setSelectedColor(nextColor);
  };

  return (
    <header>
      Select Color: {selectedColor}
      {COLORS &&
        Object.keys(COLORS).map((color) => (
          <button
            onClick={handleColor}
            data-color={color}
            className={color === selectedColor ? "selected" : undefined}
          >
            {color}
          </button>
        ))}
    </header>
  );
};
const GameBoard = () => {
  return (
    <>
      <h2>Press on boxes to color: </h2>
      <div className="grid-board">
        {Array.from({ length: BOX_NUM }).map((_v, index) => (
          <Box id={index} />
        ))}
      </div>
    </>
  );
};

interface BoxProps {
  id: number;
}
const Box = ({ id }: BoxProps) => {
  const [boxColor, setBoxColor] = useRecoilState(boxState(id));
  const selectedColor = useRecoilValue(colorState);

  const clickHandler = () => {
    setBoxColor(selectedColor);
  };

  return (
    <div
      className="box"
      style={{ backgroundColor: boxColor }}
      onClick={clickHandler}
    ></div>
  );
};

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

const ResetButton = () => {
  const resetScore = useResetRecoilState(colorCounterState);

  const handleReset = () => {
    resetScore();
  };

  return <button onClick={handleReset}>Reset</button>;
};

export default SelectorWithRecoil;
