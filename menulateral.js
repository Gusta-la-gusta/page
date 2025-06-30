const botao = document.querySelector('.clique'); 
const nav = document.querySelector('.menu-lateral');
const main = document.querySelector('main');

botao.addEventListener('click', () => {
  botao.classList.toggle('ativo');       
  main.classList.toggle('ativo');
  nav.classList.toggle('ativo'); 
});

main.addEventListener('click', () => {
  nav.classList.remove('ativo');      
  main.classList.remove('ativo');
  botao.classList.remove('ativo');
});

// Fecha o menu ao clicar em qualquer link lateral
const linksMenu = document.querySelectorAll('.menu-lateral a');

linksMenu.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('ativo');
    main.classList.remove('ativo');
    botao.classList.remove('ativo');
  });
});
