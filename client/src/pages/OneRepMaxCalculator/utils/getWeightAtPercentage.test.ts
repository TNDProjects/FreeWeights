import { describe, it, expect } from "vitest";
import useGetPercentages from "./getWeightAtPercentage";
import type { Max } from "../types/types.ts";
import { mockPercentagesData } from "../utils/mock_data/mockMaxData.ts"

const mockMax: Max = {
  IN_POUNDS: 315,
  IN_KILOGRAMS: 142
}

describe("getWeightAtPercentage", () => {
  it("Gets the percentages properly", () => {
    const result = useGetPercentages(mockMax);

  })
})


