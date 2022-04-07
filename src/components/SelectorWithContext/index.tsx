import { createContext } from "react";
import useSelectorWithContext from "../../hooks/useSelectorWithContext";
import GameBoard from "./GameBoard";
import Header from "./Header";
import ResetButton from "./ResetButton";
import ScoreBoard from "./ScoreBoard";

interface SelectorContextInterface {
  selectedColor: string;
  boxStates: string[];
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  setBoxStates: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SelectorContext = createContext<SelectorContextInterface>(
  {} as SelectorContextInterface
);
SelectorContext.displayName = "SelectorContext";

const SelectorWithContext = () => {
  const contextValue = useSelectorWithContext();

  return (
    <SelectorContext.Provider value={contextValue}>
      <Header />
      <GameBoard />
      <ScoreBoard />
      <ResetButton />
    </SelectorContext.Provider>
  );
};

export default SelectorWithContext;
