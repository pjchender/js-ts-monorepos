import { formatTimestamp } from "@shlack/utils";
import { isTypedArray } from '@shlack/types';

describe("formatTimestamp() tests", function () {
  let x = 4;
  test("01-01-2020", () => {
    expect(formatTimestamp(new Date("01-01-2020"))).toBe(
      "Jan 01, 2020 00:01:00 AM"
    );
  });
});



describe("isTypedArray() tests", function () {
  test("non-array", () => {
    expect(
      // @ts-expect-error
      isTypedArray(null, () => true)
    ).toEqual(false);
  });
  test("empty array", () => {
    expect(isTypedArray([], (x: any): x is any => true)).toEqual(true);
  });
  test("homogenous array [1, 2, 3]", () => {
    expect(
      isTypedArray([1, 2, 3], (x): x is number => typeof x === "number")
    ).toEqual(true);
  });
  test("mixed array [1, 'a', 3]", () => {
    expect(
      isTypedArray(
        [1, "a", 3],
        (x): x is number => ["number"].indexOf(typeof x) >= 0
      )
    ).toEqual(false);
  });
});
