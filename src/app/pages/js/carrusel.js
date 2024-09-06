function redirectToDocument(documentURL) {
    window.open(documentURL, "_blank");
  }
  
  // JavaScript para controlar el carrusel
  const carruselItems = document.querySelectorAll(".carrusel-item");
  let currentItem = 0;
  
  function showItem(index) {
    carruselItems.forEach((item) => item.classList.remove("active"));
    carruselItems[index].classList.add("active");
  }
  
  document
    .querySelector(".carrusel-btn-prev")
    .addEventListener("click", function () {
      currentItem =
        (currentItem - 1 + carruselItems.length) % carruselItems.length;
      showItem(currentItem);
    });
  
  document
    .querySelector(".carrusel-btn-next")
    .addEventListener("click", function () {
      currentItem = (currentItem + 1) % carruselItems.length;
      showItem(currentItem);
    });
  
  showItem(currentItem); // Mostrar el primer elemento al cargar la página
  