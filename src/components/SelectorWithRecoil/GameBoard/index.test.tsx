import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import GameBoard from "./index";

test("is box count same BOX_NUM", () => {
  render(
    <RecoilRoot>
      <GameBoard />
    </RecoilRoot>
  );
  const boxElements = screen.getAllByTestId("box");

  expect(boxElements).toBeInTheDocument();
  boxElements.map((boxElement) => {
    expect(boxElement).toHaveStyle("background-color: white");
  });
});
