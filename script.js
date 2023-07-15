document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".application-item");

    items.forEach(function (item) {
        item.addEventListener("click", function () {
            const info = item.querySelector(".application-info");
            info.classList.toggle("show");
        });
    });
});