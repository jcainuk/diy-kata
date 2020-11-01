const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {

    expect(reachDestination(5.6,0.25)).toEqual("I should be there in 22.5 hour(s)");
    expect(reachDestination(12,20)).toEqual("I should be there in 0.5 hour(s)");
    expect(reachDestination(90,25)).toEqual("I should be there in 3.5 hour(s)");


    expect(reachDestination(1000,0.01)).toEqual("I should be there in 100000 hour(s)");




  });
});
