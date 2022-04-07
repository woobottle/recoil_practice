import { SyntheticEvent, useContext } from "react";
import { COLORS } from "../../../constants";
import { SelectorContext } from "..";

const Header = () => {
  const { selectedColor, setSelectedColor } = useContext(SelectorContext);

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
              onClick={handleColor}
              data-color={color}
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
