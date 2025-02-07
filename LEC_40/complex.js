class ComplexNumber {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }

    add (c1) {
        return `${this.real + c1.real} + ${this.imag + c1.imag}i`
    }
 
    multiply(c1) {
        return `${this.real * c1.real - c1.imag * this.imag} + ${c1.real * this.imag + c1.imag * this.real}i`;
    }
}

const c1 = new ComplexNumber(1, 2);
const c2 = new ComplexNumber(3, 4);
console.log(c2.add(c1));
console.log(c2.multiply(c1));