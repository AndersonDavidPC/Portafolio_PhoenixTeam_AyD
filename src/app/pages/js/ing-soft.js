document.addEventListener('DOMContentLoaded', function() {
    const disabledLinks = document.querySelectorAll('a.disabled');
    
    disabledLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Estamos trabajando en esta sección. ¡Vuelve pronto!');
        });
    });
});