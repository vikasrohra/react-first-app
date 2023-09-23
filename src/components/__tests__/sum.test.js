import { Sum } from "../sum";

test("Sum function should calculate the sum of 2 numbers", () => {
    const result = Sum(3, 4);
    expect(result).toBe(7); // Assertion
});