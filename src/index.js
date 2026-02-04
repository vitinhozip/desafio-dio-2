//variáveis
let saldoVitorias = saldo(33, 33)
let ranked = saldoVitorias
let final = nivel(ranked)

//funções
function saldo(vitorias, derrotas){
    return vitorias - derrotas
}

function nivel(ranked){
    if(ranked<=10){
        return 'Ferro'
    }else if(ranked>=11 && ranked<=20){
        return 'Bronze'
    }else if(ranked>=21 && ranked<=50){
        return 'Prata'
    }else if(ranked>=51 && ranked<=80){
        return 'Ouro'
    }else if(ranked>=81 && ranked<=90){
        return 'Diamante'
    }else if(ranked>=91 && ranked<=100){
        return 'Lendário'
    }else if(ranked>= 101){
        return 'Imortal'
    }
    
}

console.log('O herói tem um saldo de ' + saldoVitorias + ' e está no nível ' + final)