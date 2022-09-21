
//Cadastro de eventos//

//Condição por idade.

let participante = 17;

if (participante >= 18) {
    console.log("Você possui: " + participante + " anos, Cadastro permitido!")
}
else{
    console.log("Você possui: " + participante + " anos, Idade não permitida!")
}


//Participantes do evento

let participantesEvento = [ ];

participantesEvento.push('Lia');
participantesEvento.push('Bruno');
participantesEvento.push('Stefanny');
participantesEvento.push('Anny');
participantesEvento.push('Thiago');
participantesEvento.push('Su');
participantesEvento.push('Júnior');

console.log("Número de participantes são: " + participantesEvento.length);
console.log(participantesEvento);

//Limite de cadastro do evento
if (participantesEvento.length < 100){
    console.log("Cadastro Liberado")
}else {
    console.log ("Limite de participantes excedido!")
}
