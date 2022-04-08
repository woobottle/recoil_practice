import { render, screen } from "@testing-library/react";
import ResetButton from ".";
import { RecoilRoot } from "recoil";

test("test resetbutton", () => {
  render(
    <RecoilRoot>
      <ResetButton />
    </RecoilRoot>
  );

  const resetButton = screen.getByText("Reset");
  expect(resetButton).toBeInTheDocument();
});
