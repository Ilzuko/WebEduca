
const formulario = document.querySelector("#form-pesquisa");
const campoCurso = document.querySelector("#curso");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const curso = campoCurso.value.trim();

    if (curso === "") {
        resultado.textContent = "Digite o nome do curso.";
        campoCurso.focus();
    } else {
        if (curso.toLowerCase() === "html") {
            resultado.textContent = "Curso HTML encontrado!";
        } else if (curso.toLowerCase() === "css") {
            resultado.textContent = "Curso CSS encontrado!";
        } else if (curso.toLowerCase() === "python") {
            resultado.textContent = "Curso Python encontrado!";
        } else {
            resultado.textContent = "Curso não encontrado: " + curso;
        }
    }
});
