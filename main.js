const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}


const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2020-10-05T00:00:00");
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2020-10-01T00:00:00");

const tempoObjetivo1 = new Date("2023-10-05T00:00:00");

contadores[0].textContent = calculaTempo9tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
   segundos %= 60;
    minutos %= 60;
    horas %= 24;
    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";}
} else {
    return [0,0,0,0];
}
}

function atualizadoCronometro(){
    document.getElementByld("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementByld("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementByld("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementByld("seg0").textContent = calculaTempo(tempos[0])[3];
    
    for (let i=0; i<contadores.lenght;i++){
        //contadores[i].textContent = calculaTempo(tempos[i]);
    }
}







//comecaCronometro();
