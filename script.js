//habilidades

function toggleTheme() {
  document.body.classList.toggle("light");

  const icon = document.querySelector("#theme-toggle i");

  if (document.body.classList.contains("light")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
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