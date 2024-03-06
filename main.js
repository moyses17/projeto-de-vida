const botoes= document .querySelectorAll(".botao);
const textos= document .querySelectorAll(".aba-conteudo);
                                         for(let i=0;i <botes.length;i++){
botoes[i].onclick = function(){

  for(let j=0;j<botoes.length;++){
    botoes[j].classlist.remove("ativo);
                               }

  botoes[i].vlaList.add("ativo")
}
}
