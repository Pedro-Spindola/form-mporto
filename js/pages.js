const btnClick = document.querySelector(".btn-iniciar")
const btnClick2A = document.querySelector(".btn-p2-A");
const btnClick2V = document.querySelector(".btn-p2-V");
const btnClick3A = document.querySelector(".btn-p3-A");
const btnClick3V = document.querySelector(".btn-p3-V");
const page1 = document.querySelectorAll(".form-box-p1");
const page2 = document.querySelectorAll(".form-box-p2");
const page3 = document.querySelectorAll(".form-box-p3");

btnClick.addEventListener("click", function() {
    this.classList.toggle("disable");

    page1.forEach(icon => {
        icon.classList.remove("active");
        icon.classList.toggle("disable");  
    });

    page2.forEach(icon => {
        icon.classList.remove("disable");
        icon.classList.toggle("active");
    });
    btnClick.classList.toggle("active");
});

btnClick2A.addEventListener("click", function() {
    this.classList.toggle("disable");

    page2.forEach(icon => {
        icon.classList.remove("active");
        icon.classList.toggle("disable");  
    });

    page3.forEach(icon => {
        icon.classList.remove("disable");
        icon.classList.toggle("active");
    });
    btnClick2A.classList.toggle("active");
});

btnClick2V.addEventListener("click", function() {
    this.classList.toggle("disable");
    
    page2.forEach(icon => {
        icon.classList.remove("active");
        icon.classList.toggle("disable");  
    });

    page1.forEach(icon => {
        icon.classList.remove("disable");
        icon.classList.toggle("active");
    });
    btnClick2V.classList.toggle("active");
});

btnClick3A.addEventListener("click", function() {
    this.classList.toggle("disable");

    page3.forEach(icon => {
        icon.classList.remove("active");
        icon.classList.toggle("disable");  
    });

    page4.forEach(icon => {
        icon.classList.remove("disable");
        icon.classList.toggle("active");
    });
    btnClick3A.classList.toggle("active");
});

btnClick3V.addEventListener("click", function() {
    this.classList.toggle("disable");
    
    page3.forEach(icon => {
        icon.classList.remove("active");
        icon.classList.toggle("disable");  
    });

    page2.forEach(icon => {
        icon.classList.remove("disable");
        icon.classList.toggle("active");
    });
    btnClick3V.classList.toggle("active");
});

