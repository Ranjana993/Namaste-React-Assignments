import { sum } from "../dummy/sum";


test("Check sum of 2 positivie numbers", () => {
    expect(sum(2, 5)).toBe(7);
}) 