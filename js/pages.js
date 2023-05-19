const btnClick1 = document.querySelector(".btn-p1-A");
const page1 = document.querySelectorAll(".form-box-p1");
const page2 = document.querySelectorAll(".form-box-p2");

btnClick1.addEventListener("click", function() {
    this.classList.toggle("disable");

    page1.forEach(icon => {
        icon.classList.toggle("disable");
        icon.classList.remove("active");
    });

    page2.forEach(icon => {
        icon.classList.remove("disable");
        icon.classList.toggle("active");
    });
});

