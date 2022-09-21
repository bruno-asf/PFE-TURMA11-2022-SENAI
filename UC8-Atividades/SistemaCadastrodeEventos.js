let dataAtual = new Date (2022,8,17);
let dataEvento = new Date(2022,9,11);
let  listaParticipantes = ["Rebeca","Anne","Stefanny","Letícia","Su"];
let idadeParticipante = 18
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

if (numeroParticipantes < 50 ) {
    console.log("Permitir cadatro ")
} else {
    console.log("cadastro Excedido")
}