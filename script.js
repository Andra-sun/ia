// Obtém todas as caixas azuis com a classe "application-item"
const boxes = document.querySelectorAll(".application-item");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        const paragraph = box.querySelector(".application-description");
        const isVisible = paragraph.style.display === "block";

        if (isVisible) {
            paragraph.style.display = "none";
            box.style.height = "4rem";
            box.style.width = "10.3rem";
            box.classList.remove("description-visible");
        } else {
            paragraph.style.display = "block";
            box.style.height = "auto";
            box.style.width = "auto";
            box.classList.add("description-visible");
        }
    });
});

// Obtém todas as caixas azuis com a classe "ruim-application-item"
const boxesRuim = document.querySelectorAll(".ruim-application-item");

boxesRuim.forEach((boxr) => {
    boxr.addEventListener("click", () => {
        const ruimparagraph = boxr.querySelector(
            ".ruim-application-description"
        );
        const ruimisVisible = ruimparagraph.style.display === "block";

        if (ruimisVisible) {
            ruimparagraph.style.display = "none";
            boxr.style.height = "4rem";
            boxr.style.width = "10.3rem";
            boxr.classList.remove("description-visible"); // Remove the class when description is hidden
        } else {
            ruimparagraph.style.display = "block";
            boxr.style.height = "auto";
            boxr.style.width = "auto";
            boxr.classList.add("description-visible"); // Add the class when description is shown
        }
    });
});

// Obtém todas as caixas azuis com a classe "application-item"
const boxesDiv = document.querySelectorAll(".divisoes");

boxesDiv.forEach((boxDiv) => {
    boxDiv.addEventListener("click", () => {
        const dvParagraph = boxDiv.querySelector(".divisao-corpo");
        const dvImage = boxDiv.querySelector(".raca");
        const isParagraphVisible = dvParagraph.style.display === "block";

        if (isParagraphVisible) {
            dvParagraph.style.display = "none";
            boxDiv.style.width = "19rem";
            boxDiv.style.margin = "0.5rem";
            dvImage.style.marginTop = "1rem";
        } else {
            dvParagraph.style.display = "block";
            dvImage.style.marginTop = "-3rem";
            boxDiv.style.height = "auto";
            boxDiv.style.width = "19rem";
            boxDiv.style.marginTop = "2.5rem";
        }
    });
});

// Obtém todas as caixas azuis com a classe "pedro-application-item"
const boxesPedro = document.querySelectorAll(".pedro-application-item");

boxesPedro.forEach((item) => {
    item.addEventListener("click", () => {
        const description = item.querySelector(
            ".pedro-application-description"
        );
        const isVisible = description.style.display === "block";

        if (isVisible) {
            description.style.display = "none";
            item.style.height = "4rem";
            item.style.width = "15rem";
            item.classList.remove("description-visible"); // Remove the class when description is hidden
        } else {
            description.style.display = "block";
            item.style.height = "auto";
            item.style.width = "auto";
            item.classList.add("description-visible"); // Add the class when description is shown
        }
    });
});
