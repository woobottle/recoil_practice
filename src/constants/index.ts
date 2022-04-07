export const BOX_NUM = 25;

export const COLORS = {
  WHITE: "WHITE",
  RED: "RED",
  BLUE: "BLUE",
};

export const initialBoxes = Array.from({ length: BOX_NUM }).fill(
  COLORS.WHITE
) as string[];
