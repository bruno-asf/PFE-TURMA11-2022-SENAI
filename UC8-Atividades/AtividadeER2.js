/*
Atividade do Card 9 - Atividade 5 - Encontro Remoto 2

Considere a quantidade de alunos presentes em sala de aula,
percorra do zero até o número total e retorne os seguintes resultados:

- Se o número for PAR, escreva 'PAR' e o número correspondente 

- Se o número for IMPAR, escreva 'IMPAR' e o número correspondente

- Se o número for ZERO, escreva 'ZERO'
*/


let numeroDeAlunos = 15;

for(let contador = 0; contador <= numeroDeAlunos; contador++){

    if(contador == 0){
        console.log(`${contador} - ZERO`) //interpolação
    }else if((contador % 2) == 0)
    console.log(`${contador} - PAR`)
    else{
        console.log(`${contador} - IMPAR`) 
    }
}


/*
let numeroDeAlunos = 15;
let contador = 0;
while(contador <= numeroDeAlunos){

    if(contador == 0){
        console.log(`${contador} - ZERO`) //interpolação
    }else if((contador % 2) == 0)
    console.log(`${contador} - PAR`)
    else{
        console.log(`${contador} - IMPAR`) 
    }
    contador++
}
*/


/*
let numeroDeAlunos = 15;
let contador = 0;
do{

    if(contador == 0){
        console.log(`${contador} - ZERO`) //interpolação
    }else if((contador % 2) == 0)
    console.log(`${contador} - PAR`)
    else{
        console.log(`${contador} - IMPAR`) 
    }
    contador++
}while(contador <= numeroDeAlunos);
*/
