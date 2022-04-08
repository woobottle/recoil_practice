import Header from "./Header";
import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";
import ErrorBoundary from "../shared/ErrorBoundary";
import ResetButton from "./ResetButton";

const SelectorWithRecoil = () => {
  return (
    <>
      <Header />
      <GameBoard />
      <ScoreBoard />
      <ErrorBoundary fallback={<div>sorry something wrong</div>}>
        <ResetButton />
      </ErrorBoundary>
    </>
  );
};

export default SelectorWithRecoil;
