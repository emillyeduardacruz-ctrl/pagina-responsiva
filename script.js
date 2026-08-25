document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os botões de curtir
  const botoesCurtir = document.querySelectorAll('.btn-curtir');

  botoesCurtir.forEach((botao) => {
    let contador = 0;
    const contadorSpan = botao.querySelector('.contador');

    botao.addEventListener('click', () => {
      contador++;
      contadorSpan.textContent = contador;
    });
  });
});
