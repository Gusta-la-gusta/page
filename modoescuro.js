const botaoModo = document.querySelector('.modo-escuro');
botaoModo.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});
