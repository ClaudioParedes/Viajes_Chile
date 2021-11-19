$(function(){
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip()
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    // Toggle con funcion de Hide para Info de Tarjetas
    $(".card-title").click(function(){
      $(this).parent().children().last().toggle(800);
    })
   })