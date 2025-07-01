function carregarPagina(pagina) {
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      document.getElementById("conteudo").innerHTML = html;
      saudacaoHora(); 
      atualizarContadorEnem()
      mostrarUltimosAcessos()
    });
}
carregarPagina("pagina inicial.html"); 

