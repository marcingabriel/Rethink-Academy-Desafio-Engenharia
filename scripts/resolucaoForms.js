//Resolucao dos exercicios de 2 a 7 do Rethink Academy | Desafio Engenharia/QA

const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
]

// Questao 3
function getByName(nome) {
    let aux;
    for (let i in pessoas) {
        aux = pessoas[i];
        if (nome == aux.name) return '{ name: ' + aux.name + ', age: ' + aux.age + ' }';
    }

}
// Questao 4
function getNames() {
    let aux = [];
    for (let i in pessoas) {
        aux[i] = pessoas[i].name.split(" ")[0];
    }
    return aux;
}

// Questao 5
function setId() {
    for (let i in pessoas) {
        pessoas[i] = { ...{ id: i }, ...pessoas[i] };
    }
    return pessoas;
}

// Questao 6
function habilitacao() {
    let aux = pessoas.filter(pessoas => pessoas.age >= 18);
    return aux;
}

// Questao 7
function averageAge() {
    let idadeTotal = 0;
    for (let i in pessoas) {
        idadeTotal += pessoas[i].age;
    }
    console.log(idadeTotal);
    return parseFloat((idadeTotal / pessoas.length).toFixed(3));

}

// Testes das functions no console
console.log(getByName("Gabriel Gomes"));
console.log(getNames());
console.log(setId());
console.log(pessoas[0]);
console.log(pessoas[1]);
console.log(habilitacao());
console.log(averageAge());

