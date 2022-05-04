// O seu instrutor de lógica de programação, Damilson Bonetti, quer que você desenvolva uma tela com as seguintes características:

// Conter 39 traços horizontais ( - ) na primeira linha;
// Conter um traço vertical ( | ) embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
// Repita o procedimento 2 quatro vezes;
// Repita o procedimento 1.
// No final deve ficar igual a imagem a seguir:

// --------------------------------------- (39 traços)

// |                                     |

// |                                     |

// |                                     |

// |                                     |

// |                                     |

// --------------------------------------- (39 traços)
let tracinho = ''
function traco(hor){
    for(let i = 0; i < hor; i++ ){
        tracinho +="-"
    }
}
let tracinhoPe =`|                                     |\n`

traco(39)
console.log(tracinho,'\n')
console.log(tracinhoPe)
console.log(tracinhoPe)
console.log(tracinhoPe)
console.log(tracinhoPe)
console.log(tracinhoPe)
tracinho = ''
traco(39)
console.log(tracinho)

