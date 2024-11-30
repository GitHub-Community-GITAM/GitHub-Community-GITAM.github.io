
document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".nav-links a");
    const footerLinks = document.querySelectorAll(".footer-links a"); 
    const navbarHeight = 50;

    const allLinks = [...navbarLinks, ...footerLinks]; 

    allLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            smoothScroll(e, allLinks); 
        });
    });

    function smoothScroll(e, links) {
        e.preventDefault();

        const targetHref = e.target.getAttribute("href");
        if (targetHref.startsWith("#")) { 
            const targetId = targetHref.slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetPosition = targetSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

                links.forEach(nav => nav.classList.remove("active"));
                e.target.classList.add("active");
            }
        }
    }
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburgerButton = document.querySelector('.hamburger-button');
  navLinks.classList.toggle('open');

  if (navLinks.classList.contains('open')) {
    hamburgerButton.innerHTML = '&#10005;'; // Change to 'X' when open
  } else {
    hamburgerButton.innerHTML = '&#9776;'; // Change back to hamburger icon
  }
}

  
