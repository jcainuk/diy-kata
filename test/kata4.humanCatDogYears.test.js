const { humanCatDogYears } = require("../src");


describe("humanCatDogYears", () => {
    test("returns an array with human, cat and dogs years in that order", () => {
  
      expect(humanCatDogYears(0)).toEqual([0,0,0]);
      expect(humanCatDogYears(1)).toEqual([1,15,15]);
      expect(humanCatDogYears(2)).toEqual([2,24,24]);
      expect(humanCatDogYears(3)).toEqual([3,28,29]);
      expect(humanCatDogYears(24)).toEqual([24,112,134]);
  
  
    });
  });
// Look Ma, no handlebars!!!
