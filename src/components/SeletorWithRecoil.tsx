import { BOX_NUM, COLORS } from "../constants";
import { useRecoilState, useSetRecoilState } from "recoil";
import { colorState } from "../atoms";
import { SyntheticEvent } from "react";

const SelectorWithRecoil = () => {
  const [selectColor, setSelectColor] = useRecoilState(colorState);

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
    <>
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
    </>
  );
};
const GameBoard = () => {
  return <></>;
};
const ScoreBoard = () => {
  return <></>;
};
const ResetButton = () => {
  const handleReset = () => {};
  return <button onClick={handleReset}>Reset</button>;
};

export default SelectorWithRecoil;
