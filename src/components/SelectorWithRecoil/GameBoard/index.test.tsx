import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BOX_NUM } from "../../../constants";
import GameBoard from "./index";

test("is box count same BOX_NUM", () => {
  render(
    <RecoilRoot>
      <GameBoard />
    </RecoilRoot>
  );
  const boxElements = screen.getAllByTestId("box");

  expect(boxElements).toHaveLength(BOX_NUM);
  boxElements.map((boxElement) => {
    expect(boxElement).toBeInTheDocument();
    expect(boxElement).toHaveStyle("background-color: WHITE");
  });
});
