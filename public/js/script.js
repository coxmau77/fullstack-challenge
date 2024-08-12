// Importar la funcionalidad de darkMode.js
// import darkMode from "./darkMode";

// darkMode();
document.querySelector("[data-darklight]").addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");
});
