import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Header from ".";

describe("color select buttons on screen", () => {
  test("is three button in screen", () => {
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    );
    const colorButtons = screen.getAllByTestId("color-select-button");
    colorButtons.forEach((button) => expect(button).toBeInTheDocument());
    expect(colorButtons).toHaveLength(3);
  });
});
