const btnClick1A = document.querySelector(".btn-p1-A");
const btnClick2A = document.querySelector(".btn-p2-A");
const btnClick2V = document.querySelector(".btn-p2-V");
const page1 = document.querySelectorAll(".form-box-p1");
const page2 = document.querySelectorAll(".form-box-p2");


btnClick1A.addEventListener("click", function() {
    this.classList.toggle("disable");

    page1.forEach(icon => {
        icon.classList.remove("active");
        icon.classList.toggle("disable");  
    });

    page2.forEach(icon => {
        icon.classList.remove("disable");
        icon.classList.toggle("active");
    });
    btnClick1A.classList.toggle("active");
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
});

