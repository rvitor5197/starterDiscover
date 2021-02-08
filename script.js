/*
### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numérico para o sistema de caracteres tipo A B C

* de 90 para cima - A 
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/
/*
let nota = 75;

if(nota >= 90){
    console.log('A nota é A')
} else if(nota >= 80 && nota < 90){
    console.log('A nota é B')
} else if(nota >= 70 && nota < 80){
    console.log('A nota é C')
} else if(nota >= 60 && nota < 70){
    console.log('A nota é D')
}else if(nota < 60){
    console.log('A nota é F')
}else{
    console.log('Nota não encontrada')
}

console.log(nota)
*/

/*
### Sistema de gastos familiares

Crie um objeto com 2 propriedades, ambas to tipo array
    * receitas []
    * despesas []

Agora crie uma função para calcular o total de receitas e despesas e que
mostre uma msg se a familia está no positivo ou negativo 

*/

/*
let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450]
}

function sum(array){
    let total = 0;
    for(let value of array){
        total += value
    }
    return total
}

function calcBalance(){
    const calcIncomes = sum(family.incomes)
    const calcExpenses = sum(family.expenses)

    const total = calcIncomes - calcExpenses
    
    const itsOk = total >= 0

    let msg = "negativo "
    if(itsOk){
        msg = "positivo"
    }

    console.log(`Seu saldo é ${msg}:${total.toFixed(2)}R$`)

}

calcBalance()
*/