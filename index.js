class Calculator {
  constructor(previousResult, currentResult) {
    this.previousResult = previousResult;
    this.currentResult = currentResult;
    this.clear();
  }

  clear() {
    this.currentResult = "";
    this.previousResult = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === "." && this.currentResult.includes(".")) return;
    this.currentResult = this.currentResult.toString() + number.toString();
  }

  chooseOperation(operation) {}

  compute() {}

  update() {
    currentResult.innerHTML = this.currentResult;
  }
}

const numberBtns = document.querySelectorAll("[id=number]");
const operationBtns = document.querySelectorAll("[id=operation]");
const equalBtn = document.getElementById("equal");
const deleteBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");
const previousResult = document.getElementById("previous-result");
const currentResult = document.getElementById("current-result");

const calculator = new Calculator(previousResult, currentResult);

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerHTML);
    calculator.update();
  });
});

operationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.operation(btn.innerHTML);
    calculator.update();
  });
});

clearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.update();
});
