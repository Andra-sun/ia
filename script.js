document.addEventListener("DOMContentLoaded", function () {
    const applicationItems = document.querySelectorAll(".application-item");

    applicationItems.forEach(function (item) {
        const title = item.querySelector(".application-title");
        const description = item.querySelector(".application-description");

        title.addEventListener("click", function () {
            description.classList.toggle("show");
        });
    });
});
