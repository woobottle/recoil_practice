import Header from "./Header";
import ResetButton from "./ResetButton";
import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";

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

export default SelectorWithRecoil;
