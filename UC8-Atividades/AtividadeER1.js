let listaDePecas = []

listaDePecas.push('Disco de Freio');
listaDePecas.push('Motor');
listaDePecas.push('Amortecedor');
listaDePecas.push('Filtro de Ar');
listaDePecas.push('Roda');
listaDePecas.push('Pneu');

if (listaDePecas.length < 10){
    console.log('É possível cadastrar mais peças!')
}else{
    console.log('Não há mais espaço na caixa')
}

let peso = 150;
if (peso < 100){
    console.log('A peça deve pesar no mínimo 100g')
}else{
    console.log('A peça possui o peso adequado')
}

let nomePeca = 'Freio'

if(nomePeca.length > 3){
    console.log('O nome da peça está adequado para cadastro!')
}else if(nomePeca == 0){
    console.log('O nome da peça não pode ser vazio')
}else{
    console.log('O nome da peça deve conter mais de 3 caracteres, digite o nome edequado')
}