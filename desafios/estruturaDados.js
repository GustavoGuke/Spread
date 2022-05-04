// Você recebeu o desafio de ler um valor e criar um programa que coloque o valor lido na primeira posição de um vetor N[10]. Em cada posição subsequente, coloque o dobro do valor da posição anterior. Por exemplo, se o valor lido for 1, os valores do vetor devem ser 1,2,4,8 e assim sucessivamente. Mostre o vetor em seguida.

// Entrada
// A entrada contém um valor inteiro (V<=50).

// Saída
// Para cada posição do vetor, escreva "N[i] = X", onde i é a posição do vetor e X é o valor armazenado na posição i. O primeiro número do vetor N (N[0]) irá receber o valor de V.

let vetor = []
let x = 51
let n = 10
let [ultimo, mult] = [x, ]

for(let i = 0; i < n; i++){
     mult  = ultimo * 2;
     [ultimo, mult] = [mult, ultimo];
     //vetor.push(mult)
     console.log(`N[${[i]}] = ${mult}`)

}
console.log(vetor[0])


// let [ultimo,mult] = [1, ]
// for(let i = 0; i < a; i++){
//      mult  = ultimo * 2;
//      [ultimo, mult] = [mult, ultimo];
//      vetor.push(mult)
// }
// console.log(vetor)
// print(a)