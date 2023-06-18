document.addEventListener('scroll', function() {
    var element = document.querySelector('.whatsapp-icon');
    var position = element.getBoundingClientRect();
  
    if (position.top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
  