const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {

    expect(numberToReversedDigits(1234)).toEqual([4,3,2,1]);
    expect(numberToReversedDigits(90876)).toEqual([6,7,8,0,9]);
    expect(numberToReversedDigits(5643)).toEqual([3,4,6,5]);

    expect(numberToReversedDigits('mocha')).toEqual('This data type is not a number');
  



  });
});
