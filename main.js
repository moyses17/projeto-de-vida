const botoes= document .querySelectorAll(".botao);
const textos= document .querySelectorAll(".aba-conteudo);
                                         for(let i=0;i <botes.length;i++){
botoes[i].onclick = function(){

  for(let j=0;j<botoes.length;++){
    botoes[j].classlist.remove("ativo);
                               }
textos[j].classlist.remove("ativo")
  botoes[i].vlaList.add("ativo")
}
}








contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
  let temporeal = new Date();
  let tempofinal = tempoObjetivo - tempo Atual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60 );
  let horas = Math.floor(minutos / 60 );
  let dias = Math.floor(horas / 24);
