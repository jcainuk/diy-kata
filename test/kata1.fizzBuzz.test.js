const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {

    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(3)).not.toBe("Buzz");

    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(6)).not.toBe("Buzz");

    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(9)).not.toBe("Buzz");

    expect(fizzBuzz(12)).toBe("Fizz");
    expect(fizzBuzz(12)).not.toBe("Buzz");

    expect(fizzBuzz(18)).toBe("Fizz");
    expect(fizzBuzz(18)).not.toBe("Buzz");

});

    it("returns Buzz when passed a multiple of 5", () => { 

    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(5)).not.toBe("Fizz");

    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(10)).not.toBe("Fizz");

    expect(fizzBuzz(20)).toBe("Buzz");
    expect(fizzBuzz(20)).not.toBe("Fizz");

    expect(fizzBuzz(25)).toBe("Buzz");
    expect(fizzBuzz(25)).not.toBe("Fizz");

  });

    it("returns FizzBuzz when passed a multiple 3 and 5", () => { 

    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(15)).not.toBe("Fizz");
    expect(fizzBuzz(15)).not.toBe("Buzz");

    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).not.toBe("Fizz");
    expect(fizzBuzz(30)).not.toBe("Buzz");

    expect(fizzBuzz(45)).toBe("FizzBuzz");
    expect(fizzBuzz(45)).not.toBe("Fizz");
    expect(fizzBuzz(45)).not.toBe("Buzz");

  });

    it("returns the number when it isn't a multiple of 3 or 5", () => { 

    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(8)).toBe(8);
    expect(fizzBuzz(11)).toBe(11);
    expect(fizzBuzz(13)).toBe(13);

  });
});
