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
        const dvImage = boxDiv.querySelector(".fotinha");
        const isParagraphVisible = dvParagraph.style.display === "block";

        if (isParagraphVisible) {
            dvParagraph.style.display = "none";
            dvImage.style.display = "none";
            boxDiv.style.height = "4rem";
            boxDiv.style.width = "20rem";
        } else {
            dvParagraph.style.display = "block";
            dvImage.style.display = "block";
            boxDiv.style.height = "auto";
            boxDiv.style.width = "20rem";
        }
    });
});

// Obtém todas as caixas azuis com a classe "pedro-application-item"
const boxesPedro = document.querySelectorAll(".pedro-application-item");

// Itera sobre todas as caixas azuis-escuras e adiciona um evento de clique a cada uma
boxesPedro.forEach((item) => {
    item.addEventListener("click", () => {
        // Obtém o parágrafo dentro da caixa azul clicada
        const description = item.querySelector(".pedro-application-description");

        // Verifica se o parágrafo está visível
        const isVisible = description.style.display === "block";

        if (isVisible) {
            // Se o parágrafo estiver visível, oculta-o e redefine a altura e largura da caixa azul
            description.style.display = "none";
            item.style.height = "4rem"; // Defina a altura desejada inicialmente
            item.style.width = "10.3rem"; // Defina a largura desejada inicialmente
        } else {
            // Se o parágrafo estiver oculto, exibe-o e expande a caixa azul
            description.style.display = "block";
            item.style.height = "auto";
            item.style.width = "auto"; // Define a largura como 100% para ocupar todo o espaço disponível
        }
    });
});
