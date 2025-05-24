class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    addition() {
        return this.num1 + this.num2;
    }

    subtraction() {
        return this.num1 - this.num2;
    }

    multiplication() {
        return this.num1 * this.num2;
    }

    division() {
        if (this.num2 === 0) {
            throw new Error("Division by zero is invalid.");
        }
        return this.num1 / this.num2;
    }
}

const calculator1 = new Calculator(5, 3);
console.log(calculator1.addition());
console.log(calculator1.subtraction());
console.log(calculator1.multiplication());
console.log(calculator1.division());


