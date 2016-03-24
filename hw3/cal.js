let u = 0, v = 0;
let e = 2.718281828459045;


for (var i = 0; i < 5; i++) {
    let a = Math.pow(e, u) + v * Math.pow(e, u*v) + 2*u -2*v -3;
    let b = 2*Math.pow(e, 2*v)+u*Math.pow(e, u*v) - 2*u +4*v -2;
    u = u - 0.01*a;
    v = v - 0.01*b;
}

let r = Math.pow(e, u) + Math.pow(e, 2*v) + Math.pow(e, u*v) + u*u - 2*u*v + 2*v*v -3*u -2*v;

console.log(r);
