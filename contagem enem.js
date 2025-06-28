function atualizarContadorEnem() {
  const dataEnem = new Date("2025-11-02"); // Ex: 2 de nov de 2025
  const hoje = new Date();
  const diff = Math.ceil((dataEnem - hoje) / (1000 * 60 * 60 * 24));
  document.getElementById("contador-enem").textContent = diff;
}
document.addEventListener("DOMContentLoaded", atualizarContadorEnem);
