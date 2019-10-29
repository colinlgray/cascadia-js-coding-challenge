const assert = require("assert"),
  solutions = require("../src");

//check a 2D array on ints that contains a sudoku solution to see if it’s a valid solution
describe("Problem 1", () => {
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

  it("should pass on the given solution", () => {
    assert.equal(solutions.userBySkill(users), expected);
  });
});
