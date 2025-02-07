function Product(name, price) {
    this.name = name;
    this.price = price;
}

const p = new Product("Iphone", 1200000);
console.log(p);
Product.prototype.display = function () {
    console.log("Details of product are", this);
}

p.display();
const d = new Product("Samsung", 120000);
console.log(d);
d.display()
// if you want to access Product.prototype from p,
console.log(p.__proto__.__proto__);