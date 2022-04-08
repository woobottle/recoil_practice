import { SyntheticEvent } from "react";
import { useRecoilState } from "recoil";
import { colorState } from "../../../atoms";
import { COLORS } from "../../../constants";

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
      <h2>Select Color: {selectedColor}</h2>
      <div className="button-wrapper">
        {COLORS &&
          Object.keys(COLORS).map((color) => (
            <button
              key={color}
              onClick={handleColor}
              data-color={color}
              data-testid="color-select-button"
              className={color === selectedColor ? "selected" : undefined}
            >
              {color}
            </button>
          ))}
      </div>
    </header>
  );
};

export default Header;
