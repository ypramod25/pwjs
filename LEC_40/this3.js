const obj = {
    x: 10,
    y: 20,

    display: function () {
        console.log(`value of x is ${this.x} and y is ${this.y} from outer x`);

        const inner = () => {
            x = 9;
            console.log(`value of x is ${this.x} and y is ${this.y} from inner x`);

        }
        inner();
    }
}

obj.display();


function h () {
    x = 0;
    console.log(this.x)
}
h();
