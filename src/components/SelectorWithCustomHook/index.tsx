import useSelectorWithCustomHook from "../../hooks/useSelectorWithCustomHook";
import GameBoard from "./GameBoard";
import Header from "./Header";
import ResetButton from "./ResetButton";
import ScoreBoard from "./ScoreBoard";

const SelectorWithCustomHook = () => {
  const { state, setColor, boxClickHandler, resetClick } =
    useSelectorWithCustomHook();

  return (
    <>
      <Header {...state} onSelect={setColor} />
      <GameBoard {...state} onSelect={boxClickHandler} />
      <ScoreBoard {...state} />
      <ResetButton onSelect={resetClick} />
    </>
  );
};

export default SelectorWithCustomHook;
