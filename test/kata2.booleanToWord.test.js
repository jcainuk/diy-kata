const { booleanToWord } = require("../src");

describe("booleanToWord", () => {

  it("returns yes when passed true", () => {
  expect(booleanToWord(true)).toBe("yes");
  expect(booleanToWord(true)).not.toBe("no");

});

  it("returns no when passed false", () => {

    expect(booleanToWord(false)).toBe("no");
    expect(booleanToWord(false)).not.toBe("yes");

  });
});
