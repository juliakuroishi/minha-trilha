//treino para somar objetos:

let objeto = {
    x: 1,
    y: 5,
    z: 4,
};

console.log(objeto.x + objeto.y + objeto.z)

//notas de alunos

let notas = {
    maria: 5,
    joao: 8,
    gabriel: 10,
    mateus: 6,
}

let soma = notas.maria + notas.gabriel + notas.joao + notas.mateus

let media = soma/4

let resultado = {
    maria: notas.maria > media ? "acima" : "abaixo",
    joao: notas.joao > media ? "acima" : "abaixo",
    gabriel: notas.gabriel > media ? "acima" : "abaixo",
    mateus: notas.mateus > media ? "acima" : "abaixo"
};

console.log("A Média é:", media);
console.log(resultado);


// olá objeto
// tarefa from: https://javascript.info/object

let user = {
    name: "John",
    surname: "Smith",
}
console.log(user.name);

//alterar o name
user.name = "Peter"
console.log(user.name);

//deletar o name
delete user.name;
console.log(user.name);


