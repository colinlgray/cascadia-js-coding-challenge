const assert = require("assert"),
  solutions = require("../src");

describe("Problem 1", () => {
  it("should pass on the given solution", () => {
    const users = [
      {
        id: 0,
        name: "John",
        skills: ["javascript", "html", "css", "c#"]
      },
      {
        id: 1,
        name: "Brian",
        skills: ["javascript", "java", "c", "c#", "c++", "html"]
      },
      {
        id: 2,
        name: "Michael",
        skills: ["c", "c++", "go", "rust"]
      }
    ];

    const expected = {
      c: ["Brian", "Michael"],
      "c#": ["John", "Brian"],
      "c++": ["Brian", "Michael"],
      css: ["John"],
      go: ["Michael"],
      html: ["John", "Brian"],
      java: ["Brian"],
      javascript: ["John", "Brian"],
      rust: ["Michael"]
    };

    assert.deepEqual(solutions.userBySkill(users), expected);
  });
});

describe("Problem 2", () => {
  it("100000", () => {
    assert.equal(solutions.numberInWords(100000, "One million"));
  });
  it("154512", () => {
    assert.equal(
      solutions.numberInWords(
        154512,
        "One million, five hundred and forty-five thousand, one hundred and twenty"
      )
    );
  });
  it("999999999.9", () => {
    assert.equal(
      solutions.numberInWords(
        999999999.9,
        "Nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine and 99/100"
      )
    );
  });
  it("245.1", () => {
    assert.equal(
      solutions.numberInWords(245.1, "Two hundred and forty-five and 13/100")
    );
  });
});
