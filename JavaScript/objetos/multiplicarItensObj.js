// Multiplicar valores de propriedade numérica por 2

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let multiplyNumeric = menu => {
    for (let coisa in menu) {
        if (typeof menu[coisa] === "number") {
            menu[coisa] *= 2;
        }
    }
};

multiplyNumeric(menu);

console.log(menu);
// Saída esperada:
// { width: 400, height: 600, title: "My menu" }