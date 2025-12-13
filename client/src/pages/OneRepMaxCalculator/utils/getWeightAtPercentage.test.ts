import { describe, it, expect } from "vitest";
import useGetPercentages from "./useGetPercentages.ts";
import { mockPercentagesData, mockMaxData } from "../utils/mock_data/mockMaxData.ts"


describe("getWeightAtPercentage", () => {
  it("Gets the percentages properly", () => {
    const result = useGetPercentages(mockMaxData);
    expect(result).toBe(mockPercentagesData);
  })
})


