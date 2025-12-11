import { describe, it, expect } from "vitest";
import calculateMax from "./calculateMax";

describe("calculateMax", () => {

  it("calculates the correct 1RM for valid inputs", () => {
    const result = calculateMax(225, 5);

    expect(result).toBe(263);
  });

  it("throws an error when reps < 1", () => {
    expect(() => calculateMax(200, 0)).toThrowError();
  });

  it("throws an error when reps > 20", () => {
    expect(() => calculateMax(200, 25)).toThrowError();
  });

});

