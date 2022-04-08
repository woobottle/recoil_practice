import { SyntheticEvent } from "react";

interface GameBoardProps {
  boxStates: string[];
  onSelect: (id: number) => void;
}

const GameBoard = ({ boxStates, onSelect }: GameBoardProps) => {
  const clickHandler = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }

    if (e.target.className !== "box") {
      return;
    }

    const { id: targetId } = e.target.dataset;
    onSelect(Number(targetId));
  };

  return (
    <>
      <h2>Press on boxes to color: </h2>
      <div className="grid-board" onClick={clickHandler}>
        {boxStates.map((color, index) => (
          <Box id={index} color={color} key={`box-${index}`} />
        ))}
      </div>
    </>
  );
};

interface BoxProps {
  id: number;
  color: string;
}
const Box = ({ id, color }: BoxProps) => {
  return (
    <div className="box" data-id={id} style={{ backgroundColor: color }}></div>
  );
};

export default GameBoard;
