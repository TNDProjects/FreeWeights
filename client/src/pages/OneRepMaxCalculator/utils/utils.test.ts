import { describe, it, expect } from "vitest";
import type { Max } from "../types/types.ts";
import calculateMax from "./calculateMax";
import { useGetPercentages, getWeightAtPercentage } from "./useGetPercentages.ts";

const mockMaxData: Max = {
  IN_POUNDS: 315,
  IN_KILOGRAMS: 142
}

describe("getWeightAtPercentage", () => {
  it("Gets the percentages properly", () => {
    const result = getWeightAtPercentage(mockMaxData, 90);
    expect(result).toEqual({
      lb: 283.5,
      kg: 127.8,
      percentage: 90
    });
  })
})

describe("useGetPercentages", () => {
  it("properly formats the percentages of the users one rep max", () => {
    const result = useGetPercentages(mockMaxData);
    console.log(result);

    expect(result).toEqual(
      [
        { lb: 315, kg: 142, percentage: 100 },
        { lb: 299.3, kg: 134.9, percentage: 95 },
        { lb: 283.5, kg: 127.8, percentage: 90 },
        { lb: 267.8, kg: 120.7, percentage: 85 },
        { lb: 252, kg: 113.6, percentage: 80 },
        { lb: 236.3, kg: 106.5, percentage: 75 },
        { lb: 220.5, kg: 99.4, percentage: 70 },
        { lb: 204.8, kg: 92.3, percentage: 65 },
        { lb: 189, kg: 85.2, percentage: 60 }
      ]
    )

  })
})

describe("calculateMax", () => {

  it("calculates the correct 1RM for valid inputs", () => {
    const result: number = calculateMax(225, 5);
    expect(result).toBe(263);
  });

  it("throws an error when reps < 1", () => {
    expect(() => calculateMax(200, 0)).toThrowError();
  });

  it("throws an error when reps > 20", () => {
    expect(() => calculateMax(200, 25)).toThrowError();
  });

});

