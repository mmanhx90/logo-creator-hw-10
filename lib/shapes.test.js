const { Circle, Square, Triangle } = require("./shapes.js")

describe("Test Circle", () => {
  test("color and shape should match user input", () => {

    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
  })
});

describe("Test Square", () => {
  test("color and shape should match user input", () => {

    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue"/>');
  })
});

describe("Test Triangle", () => {
  test("color and shape should match user input", () => {

    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  })
});