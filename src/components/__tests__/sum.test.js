import { sum } from "../sum";

test("Sum should calculate the sum of two numbers", () => {
  const result = sum(10, 30);

  expect(result).toBe(20);
});
