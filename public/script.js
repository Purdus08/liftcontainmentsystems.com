
// Optional: smooth scroll with offset
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // prevent default jump
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    const headerOffset = 80; // adjust to your nav height
    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // Close menu after clicking
    document.querySelector('.nav-links').classList.remove('active');
  });
});



//const menuIcon = document.querySelector('.bx-menu-alt-right');
//const navLinks = document.querySelector('.nav-links');
//const navItems = document.querySelectorAll('.nav-links ul li a');

// Toggle menu
//menuIcon.addEventListener('click', (e) => {
  //e.stopPropagation(); // ⬅ prevents instant close
  //navLinks.classList.toggle('active');
//});

// Close menu when clicking a link
//navItems.forEach(link => {
  //link.addEventListener('click', () => {
    //navLinks.classList.remove('active');
  //});
//});

//document.addEventListener('click', (e) => {
  //if (
    //!navLinks.contains(e.target) &&
    //!menuIcon.contains(e.target)
  //) {
    //navLinks.classList.remove('active');
  //}
//});

// Desktop only: close on mouse leave
//if (window.innerWidth > 768) {
  //navLinks.addEventListener('mouseleave', () => {
    //navLinks.classList.remove('active');
  //});
//}

// Sticky CTA
window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      document.body.classList.add('show-sticky');
    } else {
      document.body.classList.remove('show-sticky');
    }
  });
  
  //Exit intent (desktop only)
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
  

  const backToTop = document.getElementById("backToTop");

// Show button after scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll to top on click
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Toggle Service Cards
const toggleBtn = document.getElementById("toggleCards");
const serviceCards = document.querySelector(".service-cards");

if (toggleBtn && serviceCards) {
  toggleBtn.addEventListener("click", () => {
    const isHidden = serviceCards.classList.toggle("collapsed");

    toggleBtn.querySelector("span").textContent =
      isHidden ? "View Services" : "Hide Services";

    toggleBtn.querySelector("i").className =
      isHidden ? "bx bx-chevron-down" : "bx bx-chevron-up";
  });
}

const floatingVideo = document.getElementById("floatingVideo");
const floatVid = document.getElementById("floatVid");
const closeVideo = document.getElementById("closeVideo");

let videoShown = false;

// Show video after scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 700 && !videoShown) {
    floatingVideo.style.display = "block";
    floatVid.muted = false; // 🔊 allow sound
    floatVid.play().catch(() => {
      // autoplay might fail until user interacts
      floatVid.loop=true;
      floatVid.muted = true;
      floatVid.play();
    });
    videoShown = true;
  }
});

// Close button
closeVideo.addEventListener("click", () => {
  floatingVideo.style.display = "none";
  floatVid.pause();
});
