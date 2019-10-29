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
