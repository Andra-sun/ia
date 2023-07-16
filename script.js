// Obtém todas as caixas azuis com a classe "application-item"
const boxes = document.querySelectorAll(".application-item");

// Itera sobre todas as caixas azuis e adiciona um evento de clique a cada uma
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Obtém o parágrafo dentro da caixa azul clicada
        const paragraph = box.querySelector(".application-description");

        // Verifica se o parágrafo está visível
        const isVisible = paragraph.style.display === "block";

        if (isVisible) {
            // Se o parágrafo estiver visível, oculta-o e redefine a altura e largura da caixa azul
            paragraph.style.display = "none";
            box.style.height = "4rem"; // Defina a altura desejada inicialmente
            box.style.width = "10.3rem"; // Defina a largura desejada inicialmente
        } else {
            // Se o parágrafo estiver oculto, exibe-o e expande a caixa azul
            paragraph.style.display = "block";
            box.style.height = "auto";
            box.style.width = "auto"; // Define a largura como 100% para ocupar todo o espaço disponível
        }
    });
});

// Obtém todas as caixas azuis com a classe "application-item"
const boxesRuim = document.querySelectorAll(".ruim-application-item");

// Itera sobre todas as caixas azuis-escuras e adiciona um evento de clique a cada uma
boxesRuim.forEach((boxr) => {
    boxr.addEventListener("click", () => {
        // Obtém o parágrafo dentro da caixa azul clicada
        const ruimparagraph = boxr.querySelector(
            ".ruim-application-description"
        );

        // Verifica se o parágrafo está visível
        const ruimisVisible = ruimparagraph.style.display === "block";

        if (ruimisVisible) {
            // Se o parágrafo estiver visível, oculta-o e redefine a altura e largura da caixa azul
            ruimparagraph.style.display = "none";
            boxr.style.height = "4rem"; // Defina a altura desejada inicialmente
            boxr.style.width = "10.3rem"; // Defina a largura desejada inicialmente
        } else {
            // Se o parágrafo estiver oculto, exibe-o e expande a caixa azul
            ruimparagraph.style.display = "block";
            boxr.style.height = "auto";
            boxr.style.width = "auto"; // Define a largura como 100% para ocupar todo o espaço disponível
        }
    });
});

// Obtém todas as caixas azuis com a classe "application-item"
const boxesDiv = document.querySelectorAll(".divisoes");

boxesDiv.forEach((boxDiv) => {
    boxDiv.addEventListener("click", () => {
        const dvParagraph = boxDiv.querySelector(".divisao-corpo");
        const isParagraphVisible = dvParagraph.style.display === "block";

        if (isParagraphVisible) {
            dvParagraph.style.display = "none";
            boxDiv.style.height = "4rem";
            boxDiv.style.width = "20rem"; // Defina a largura como 100% para ocupar todo o espaço disponível
        } else {
            dvParagraph.style.display = "block";
            boxDiv.style.height = "auto";
            boxDiv.style.width = "20rem"; // Defina a largura como 100% para ocupar todo o espaço disponível
        }
    });
});
