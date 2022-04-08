import { SyntheticEvent } from "react";
import { COLORS } from "../../../constants";

interface HaderProps {
  color: string;
  onSelect: (color: string) => void;
}

const Header = ({ color: selectedColor, onSelect }: HaderProps) => {
  const handleColor = (e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }

    const { color: nextColor } = e.target.dataset;

    if (!nextColor) {
      return;
    }

    onSelect(nextColor);
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
