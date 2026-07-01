const accordions = document.querySelectorAll(".accordion");

accordions.forEach(item => {
    item.addEventListener("click", () => {
        const panel = item.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});