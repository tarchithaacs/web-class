
window.addEventListener('scroll', function() {
    var topNav = document.querySelector('.top-nav');
    var videoBg = document.querySelector('.video-background');
    var videoBgHeight = videoBg.offsetHeight;
  
    if (window.scrollY > videoBgHeight) {
      topNav.classList.add('scrolled');
    } else {
      topNav.classList.remove('scrolled');
    }
  });


  
