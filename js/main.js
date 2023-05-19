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
});


