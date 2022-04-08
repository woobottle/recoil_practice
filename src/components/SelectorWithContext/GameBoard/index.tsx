import { SyntheticEvent, useContext } from "react";
import { SelectorContext } from "..";
import { BOX_NUM } from "../../../constants";

const GameBoard = () => {
  return (
    <>
      <h2>Press on boxes to color: </h2>
      <div className="grid-board">
        {Array.from({ length: BOX_NUM }).map((_v, index) => (
          <Box id={index} key={`box-${index}`} />
        ))}
      </div>
    </>
  );
};

interface BoxProps {
  id: number;
}
const Box = ({ id }: BoxProps) => {
  const { boxStates, setBoxStates, selectedColor } =
    useContext(SelectorContext);

  const clickHandler = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLDivElement)) {
      return;
    }

    setBoxStates((prev) => {
      const newArr = [...prev];
      newArr[id] = selectedColor;
      return newArr;
    });
  };

  return (
    <div
      className="box"
      style={{ backgroundColor: boxStates[id] }}
      data-id={id}
      onClick={clickHandler}
    ></div>
  );
};

export default GameBoard;
