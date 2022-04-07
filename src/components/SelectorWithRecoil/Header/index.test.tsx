import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Header from ".";

test("is three button in screen", () => {
  render(
    <RecoilRoot>
      <Header />
    </RecoilRoot>
  );
  const colorButtons = screen.getAllByTestId(".color-select-button");
  expect(colorButtons).toBeInTheDocument();
});
