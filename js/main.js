//  <--- SECTION COR NOTAS ---> //

function applyBackgroundColor(labels, inputs, imageId) {
  for (var i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", function() {
      var clickedIndex = Array.prototype.indexOf.call(labels, this);

      for (var j = 0; j < labels.length; j++) {
        if (j <= clickedIndex) {
          labels[j].style.backgroundColor = "#0f4640";
          labels[j].style.color = "#ccb98e";
          labels[j].style.transition = "background-color 0.5s ease, color 0.8s ease"; // Adicionar transição
        } else {
          labels[j].style.backgroundColor = ""; // Remover backgroundColor
          labels[j].style.color = "";
        }
      }
      
      var valorSelecionado = inputs[clickedIndex].value;
      var imagem = document.getElementById(imageId);
      imagem.src = 'assets/value' + valorSelecionado + '.png';
    });
  }
}

window.addEventListener('DOMContentLoaded', function() {
  var labels1 = document.querySelectorAll('label[name="p1-nota"]');
  var inputs1 = document.getElementsByName("notas-p1");
  applyBackgroundColor(labels1, inputs1, 'notas-satisfacao-1');

  var labels2 = document.querySelectorAll('label[name="p2-nota"]');
  var inputs2 = document.getElementsByName("notas-p2");
  applyBackgroundColor(labels2, inputs2, 'notas-satisfacao-2');

  var labels3 = document.querySelectorAll('label[name="p3-nota"]');
  var inputs3 = document.getElementsByName("notas-p3");
  applyBackgroundColor(labels3, inputs3, 'notas-satisfacao-3');

  var labels4 = document.querySelectorAll('label[name="p4-nota"]');
  var inputs4 = document.getElementsByName("notas-p4");
  applyBackgroundColor(labels4, inputs4, 'notas-satisfacao-4');

  var labels5 = document.querySelectorAll('label[name="p5-nota"]');
  var inputs5 = document.getElementsByName("notas-p5");
  applyBackgroundColor(labels5, inputs5, 'notas-satisfacao-5');

  var labels6 = document.querySelectorAll('label[name="p6-nota"]');
  var inputs6 = document.getElementsByName("notas-p6");
  applyBackgroundColor(labels6, inputs6, 'notas-satisfacao-6');

  var labels7 = document.querySelectorAll('label[name="p7-nota"]');
  var inputs7 = document.getElementsByName("notas-p7");
  applyBackgroundColor(labels7, inputs7, 'notas-satisfacao-7');

  var labels8 = document.querySelectorAll('label[name="p8-nota"]');
  var inputs8 = document.getElementsByName("notas-p8");
  applyBackgroundColor(labels8, inputs8, 'notas-satisfacao-8');

  var labels9 = document.querySelectorAll('label[name="p9-nota"]');
  var inputs9 = document.getElementsByName("notas-p9");
  applyBackgroundColor(labels9, inputs9, 'notas-satisfacao-9');

  var labels10 = document.querySelectorAll('label[name="p10-nota"]');
  var inputs10 = document.getElementsByName("notas-p10");
  applyBackgroundColor(labels10, inputs10, 'notas-satisfacao-10');

  var labels11 = document.querySelectorAll('label[name="p11-nota"]');
  var inputs11 = document.getElementsByName("notas-p11");
  applyBackgroundColor(labels11, inputs11, 'notas-satisfacao-11');

  var labels12 = document.querySelectorAll('label[name="p12-nota"]');
  var inputs12 = document.getElementsByName("notas-p12");
  applyBackgroundColor(labels12, inputs12, 'notas-satisfacao-12');
});

//  <--- SECTION PAGES ---> //

const btnClick = document.querySelector(".btn-iniciar")
const btnClick2A = document.querySelector(".btn-p2-A");
const btnClick2V = document.querySelector(".btn-p2-V");
const btnClick3A = document.querySelector(".btn-p3-A");
const btnClick3V = document.querySelector(".btn-p3-V");
const btnClick4A = document.querySelector(".btn-p4-A");
const btnClick4V = document.querySelector(".btn-p4-V");
const btnClick5A = document.querySelector(".btn-p5-A");
const btnClick5V = document.querySelector(".btn-p5-V");
const btnClick6A = document.querySelector(".btn-p6-A");
const btnClick6V = document.querySelector(".btn-p6-V");
const page1 = document.querySelectorAll(".form-box-p1");
const page2 = document.querySelectorAll(".form-box-p2");
const page3 = document.querySelectorAll(".form-box-p3");
const page4 = document.querySelectorAll(".form-box-p4");
const page5 = document.querySelectorAll(".form-box-p5");
const page6 = document.querySelectorAll(".form-box-p6");


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

btnClick2A.addEventListener('click', function() {
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

btnClick4A.addEventListener("click", function() {
  this.classList.toggle("disable");

  page4.forEach(icon => {
      icon.classList.remove("active");
      icon.classList.toggle("disable");  
  });

  page5.forEach(icon => {
      icon.classList.remove("disable");
      icon.classList.toggle("active");
  });
  btnClick4A.classList.toggle("active");
});

btnClick4V.addEventListener("click", function() {
  this.classList.toggle("disable");
  
  page4.forEach(icon => {
      icon.classList.remove("active");
      icon.classList.toggle("disable");  
  });

  page3.forEach(icon => {
      icon.classList.remove("disable");
      icon.classList.toggle("active");
  });
  btnClick4V.classList.toggle("active");
});

btnClick5A.addEventListener("click", function() {
  this.classList.toggle("disable");

  page5.forEach(icon => {
      icon.classList.remove("active");
      icon.classList.toggle("disable");  
  });

  page6.forEach(icon => {
      icon.classList.remove("disable");
      icon.classList.toggle("active");
  });
  btnClick5A.classList.toggle("active");
});

btnClick5V.addEventListener("click", function() {
  this.classList.toggle("disable");
  
  page5.forEach(icon => {
      icon.classList.remove("active");
      icon.classList.toggle("disable");  
  });

  page4.forEach(icon => {
      icon.classList.remove("disable");
      icon.classList.toggle("active");
  });
  btnClick5V.classList.toggle("active");
});
btnClick6A.addEventListener("click", function() {
  this.classList.toggle("disable");

  page6.forEach(icon => {
      icon.classList.remove("active");
      icon.classList.toggle("disable");  
  });

  page6.forEach(icon => {
      icon.classList.remove("disable");
      icon.classList.toggle("active");
  });
  btnClick6A.classList.toggle("active");
});

btnClick6V.addEventListener("click", function() {
  this.classList.toggle("disable");
  
  page6.forEach(icon => {
      icon.classList.remove("active");
      icon.classList.toggle("disable");  
  });

  page5.forEach(icon => {
      icon.classList.remove("disable");
      icon.classList.toggle("active");
  });
  btnClick6V.classList.toggle("active");
});