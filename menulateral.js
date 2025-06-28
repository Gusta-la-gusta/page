const botao = document.querySelector('.clique'); 
const nav = document.querySelector('.menu-lateral');
const main = document.querySelector('main')
const a = document.querySelectorAll('.links')

botao.addEventListener('click', () => {
  botao.classList.toggle('ativo');       
  main.classList.toggle('ativo');
  nav.classList.toggle('ativo'); 
});

main.addEventListener('click', () => {
    nav.classList.remove('ativo');      
    main.classList.remove('ativo');
})
