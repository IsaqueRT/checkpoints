
// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// OBS: Entrega até 16/11/2022 -> 23:59

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".




console.log(`
   

    Opções :

    Pipoca
    Macarrão
    Carne 
    Feijão
    Brigadeiro 

    
`)



const readLineSync = require('readline-sync')





function tempoCerto( opcaoDeComida , tempoDePreparo) {
   
    opcaoDeComida = readLineSync.question('O que deseja preparar? ')

    tempoDePreparo = readLineSync.question('Escolha um tempo de preparo? ')
    var x =  tempoDuasVezesMaior(opcaoDeComida , tempoDePreparo)
    if (
        opcaoDeComida == "pipoca" && tempoDePreparo >= 10 && tempoDePreparo <20 || 
        opcaoDeComida == "macarrao" && tempoDePreparo >= 8 && tempoDePreparo <16|| 
        opcaoDeComida == "carne" && tempoDePreparo >= 15 && tempoDePreparo <30 || 
        opcaoDeComida == "feijao" && tempoDePreparo >= 12 && tempoDePreparo <24 || 
        opcaoDeComida == "brigadeiro" && tempoDePreparo >= 8 && tempoDePreparo <16) {
        console.log( opcaoDeComida , "Está pronto(a), bom apetite!!!")
    } else (x)

}





function tempoDuasVezesMaior ( opcaoDeComida , tempoDePreparo) {

      var y = tempoTresVezesMaior (opcaoDeComida, tempoDePreparo)
     if (opcaoDeComida == "pipoca" && tempoDePreparo >= 20  && tempoDePreparo <30||
     opcaoDeComida == "macarrao" && tempoDePreparo >= 16  && tempoDePreparo <24|| 
     opcaoDeComida == "carne" && tempoDePreparo >= 30  && tempoDePreparo <45||
     opcaoDeComida == "feijao" && tempoDePreparo >=24  && tempoDePreparo <36||
     opcaoDeComida == "brigadeiro" && tempoDePreparo >= 16  && tempoDePreparo <24
     ) {
            console.log ("Comida queimada")
     } else (y)
}




function tempoTresVezesMaior (opcaoDeComida , tempoDePreparo) {
   var z = tempoInsuficiente(opcaoDeComida , tempoDePreparo)
    if (opcaoDeComida == "pipoca" && tempoDePreparo >= 30 || 
    opcaoDeComida == "macarrao" && tempoDePreparo >= 24  ||
    opcaoDeComida == "carne" && tempoDePreparo >=45 || 
    opcaoDeComida == "feijao" && tempoDePreparo >=36  ||
    opcaoDeComida == "brigadeiro" && tempoDePreparo >= 24
    ) {
           console.log ("KABUM!!!")
    } else (z)


}

function tempoInsuficiente(opcaoDeComida , tempoDePreparo) {
    var w = pratoInexistente(opcaoDeComida , tempoDePreparo)
    if (opcaoDeComida == "pipoca" && tempoDePreparo <10 || 
    opcaoDeComida == "macarrao" && tempoDePreparo < 8  ||
    opcaoDeComida == "carne" && tempoDePreparo <15 || 
    opcaoDeComida == "feijao" && tempoDePreparo <12  ||
    opcaoDeComida == "brigadeiro" && tempoDePreparo <8 
    ) {
        console.log("Tempo de preparo insuficiente")
    } else (w)
}

function pratoInexistente (opcaoDeComida , tempoDePreparo) {
    if (opcaoDeComida != "pipoca" && opcaoDeComida != "macarrao" && opcaoDeComida != "carne" && opcaoDeComida != "feijao" && opcaoDeComida != "brigadeiro" && tempoDePreparo > 0 
    // opcaoDeComida != "macarrao" && tempoDePreparo > 0 ||
    // opcaoDeComida != "carne" && tempoDePreparo > 0 ||
    // opcaoDeComida != "feijao" && tempoDePreparo > 0 ||
    // opcaoDeComida != "brigadeiro" && tempoDePreparo > 0 
    
    ) {
        console.log ("Desculpe , não temos essa opção no cardápio.")
    // } else if (opcaoDeComida != "macarrao" && tempoDePreparo > 0) {

    //     console.log ("Desculpe , não temos essa opção no cardápio.")
    }
}

tempoCerto()