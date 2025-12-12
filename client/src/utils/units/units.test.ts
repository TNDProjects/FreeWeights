import { describe, it, expect } from "vitest";
import { ConvertToPounds, ConvertToKilograms } from "./units.ts"

describe("ConvertToKilograms", () => {
  it("Converts the number to Kilograms correctly", () => {
    const result = ConvertToKilograms(315);
    expect(result).toBe(143);
  })
});

describe("ConvertToPounds", () => {
  it("Converts the number to Pounds correctly", () => {
    const result = ConvertToPounds(140);
    expect(result).toBe(309);
  })
});

