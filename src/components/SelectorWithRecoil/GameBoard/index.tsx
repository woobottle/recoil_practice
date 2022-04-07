import { useRecoilState, useRecoilValue } from "recoil";
import { boxState, colorState } from "../../../atoms";
import { BOX_NUM } from "../../../constants";

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
      data-testid="box"
      onClick={clickHandler}
    ></div>
  );
};

export default GameBoard;
