const botaoModo = document.querySelector('.modo-escuro');

// Aplica o modo salvo ao carregar a página
if (localStorage.getItem('modo') === 'escuro') {
  document.documentElement.classList.add('dark');
}

// Ao clicar no botão, alterna o modo e salva
botaoModo.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('modo', 'escuro');
  } else {
    localStorage.setItem('modo', 'claro');
  }
});
