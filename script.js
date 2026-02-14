//tema claro/escuro

function toggleTheme() {
  const html = document.documentElement;
  const icon = document.querySelector("#theme-toggle i");

  html.classList.toggle("light");

  const isLight = html.classList.contains("light");

  if (isLight) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
}

//projetos

function mostrarProjetos(tipo) {
    const academicos = document.getElementById("academicos");
    const pessoais = document.getElementById("pessoais");
    const botoes = document.querySelectorAll(".botoes-projetos button");

    academicos.classList.add("escondido");
    pessoais.classList.add("escondido");

    if (tipo === "academicos") {
      academicos.classList.remove("escondido");
    } else {
      pessoais.classList.remove("escondido");
    }

    botoes.forEach(btn => btn.classList.remove("ativo"));
    event.target.classList.add("ativo");
}

//scrool

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".caixa").forEach(el => observer.observe(el));

//scrool lizo

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

//salva tema

(function () {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.querySelector("#theme-toggle i");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
})();

//sem piscar

window.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector("#theme-toggle i");
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

//mobile menu




const header = document.getElementById("header-portifolio");
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("#link ul");

let lastScroll = 0;

/* =========================
   SCROLL – HEADER
========================= */
window.addEventListener("scroll", () => {
  if (window.innerWidth > 1024) return;

  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 80) {
    header.classList.add("hide");
    menu.classList.remove("ativo"); // fecha menu junto
  } else {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});

/* =========================
   ABRIR / FECHAR MENU
========================= */
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // MUITO IMPORTANTE
  menu.classList.toggle("ativo");
});

/* =========================
   CLIQUE FORA FECHA MENU
========================= */
document.addEventListener("click", () => {
  menu.classList.remove("ativo");
});

/* =========================
   CLIQUE NO MENU NÃO FECHA
========================= */
menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

/* =========================
   LINK FECHA MENU
========================= */
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
});
