import React from "react";

interface ResetButtonProps {
  onSelect: () => void;
}

const ResetButton = ({ onSelect }: ResetButtonProps) => {
  const handleReset = (e: React.SyntheticEvent) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }
    onSelect();
  };

  return <button onClick={handleReset}>Reset</button>;
};

export default ResetButton;
