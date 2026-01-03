document.querySelector('.bx-menu-alt-right').addEventListener('click',function(){
    document.querySelector('nav ul').classList.toggle('showMenu')
})

// Show sticky CTA after scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        document.body.classList.add('show-sticky');
    } else {
        document.body.classList.remove('show-sticky');
    }
});

// Sticky CTA
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      document.body.classList.add('show-sticky');
    } else {
      document.body.classList.remove('show-sticky');
    }
  });
  
  // Exit intent (desktop only)
  let exitShown = false;
  document.addEventListener('mouseleave', e => {
    if (e.clientY < 10 && !exitShown && window.innerWidth > 768) {
      document.getElementById('exitOverlay').style.display = 'flex';
      exitShown = true;
    }
  });
  
  // Click tracking hooks (ready for analytics)
  document.getElementById('cta-main')?.addEventListener('click', () => {
    console.log('Main CTA clicked');
  });
  
  document.getElementById('sticky-buy')?.addEventListener('click', () => {
    console.log('Sticky CTA clicked');
  });
  