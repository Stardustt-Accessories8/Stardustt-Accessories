// Espera a que el DOM esté listo
$(document).ready(function(){

  // ✅ Menú hamburguesa
  $('.nav__toggle').click(function(){
    $('.nav__menu').toggleClass('show');  // alterna la clase "show"
  });

  // ✅ Carrusel Slick
  $('.single-item').slick({
    dots: true,          // muestra los puntos de navegación
    arrows: true,        // flechas izquierda/derecha
    infinite: true,      // bucle infinito
    speed: 500,          // velocidad de transición (ms)
    slidesToShow: 1,     // cuántas imágenes mostrar a la vez
    slidesToScroll: 1,   // cuántas se mueven en cada scroll
    autoplay: true,      // que avance automáticamente
    autoplaySpeed: 3000, // tiempo entre cada slide (3s)
    adaptiveHeight: true // ajusta la altura según la imagen
  });

});
