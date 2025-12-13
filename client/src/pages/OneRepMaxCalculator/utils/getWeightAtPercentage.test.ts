import { describe, it } from "vitest";
import useGetPercentages from "./getWeightAtPercentage";
import type { Max } from "../types/types.ts";

const mockData: Max = {
  IN_POUNDS: 315,
  IN_KILOGRAMS: 142
}

describe("getWeightAtPercentage", () => {
  it("Gets the percentages properly", () => {
    const result = useGetPercentages(mockData);
    console.log(result);
  })
})


