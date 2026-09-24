// Currículo — Pedro Gabriel
// Único comportamento interativo: o botão de imprimir/salvar em PDF.

document.addEventListener("DOMContentLoaded", function () {
  var botaoImprimir = document.getElementById("btn-print");

  if (botaoImprimir) {
    botaoImprimir.addEventListener("click", function () {
      window.print();
    });
  }
});
