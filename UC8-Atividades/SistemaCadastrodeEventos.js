let dataAtual = new Date (2022,8,15);
let dataEvento = new Date(2022,9,10);
let  listaParticipantes = ["Vivian","Anne","João","luan","lucca"];
let idadeParticipante = 20
let numeroParticipantes = 0

if(dataEvento>dataAtual) {
  console.log("Agendar evento")
} else {
    console.log(" data invalida")
}
console.log("---------------------")
if (idadeParticipante >= 18) {
    console.log("Entrada permitida")
} else {
    console.log("Idade Invalida")
}
console.log("------------------")    
console.log(listaParticipantes)
console.log("------------------")
numeroParticipantes = listaParticipantes.length

if (numeroParticipantes < 100 ) {
    console.log("Permitir cadatro ")
} else {
    console.log("cadastro Excedido")
}