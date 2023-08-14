const { writeFile } = require("fs/promises");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shapes.js")

function CLI() {
  inquirer.prompt([
    {
      type: "list",
      name: "shapeType",
      message: "Select a shape",
      choices: ["circle", "square", "triangle"]
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color is the shape?"
    },
    {
      type: "input",
      name: "text",
      message: "Please enter text (must be no more than 3 characters)"
    },
    {
      type: "input",
      name: "textColor",
      message: "What color is the text?"
    }
  ]).then(({ shapeType, shapeColor, text, textColor }) => {
    let newShape;
    switch (shapeType) {
      case "circle":
        newShape = new Circle();
        break;
        case "square":
        newShape = new Square();
        break;
        case "triangle":
        newShape = new Triangle();
        break;
      default:
        newShape = new Triangle();
        break;
    }
    newShape.setColor(shapeColor)

    writeFile("logo.svg", generateSVG(newShape, text, textColor))
  })

}
  function generateSVG(newShape, text, textColor) {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${newShape.render()} <text x="150" y="115" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>
    
  </svg>`
  }

module.exports = CLI