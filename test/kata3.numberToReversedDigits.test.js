const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {

    expect(numberToReversedDigits(1234)).toEqual([4,3,2,1]);
    expect(numberToReversedDigits(1234)).not.toEqual(1234);
    expect(numberToReversedDigits(1234)).not.toEqual(4321);
    expect(numberToReversedDigits(1234)).not.toEqual([1,2,3,4]);

    expect(numberToReversedDigits(90876)).toEqual([6,7,8,0,9]);
    expect(numberToReversedDigits(90876)).not.toEqual(90876);
    expect(numberToReversedDigits(90876)).not.toEqual(67809);
    expect(numberToReversedDigits(90876)).not.toEqual([9,0,8,7,6]);

    expect(numberToReversedDigits(5643)).toEqual([3,4,6,5]);
    expect(numberToReversedDigits(5643)).not.toEqual(5643);
    expect(numberToReversedDigits(5643)).not.toEqual(3465);
    expect(numberToReversedDigits(5643)).not.toEqual([5,6,4,3]);

    expect(numberToReversedDigits('mocha')).toBe('This data type is not a number');

  });
});
