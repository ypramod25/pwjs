let x = 9;
x++;
console.log(x); 


let user = {a : 1, b : 2};
user.x = 7;
user = {u : 90};
user.n = 900;

Object.freeze(user);

user.x = 7;
console.log(user);