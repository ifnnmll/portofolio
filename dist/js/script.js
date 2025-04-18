// Navbar fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
  } else {
      header.classList.remove('navbar-fixed');
  }
};

// Hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          e.preventDefault();
          window.scrollTo({
              top: targetElement.offsetTop - 80, // Sesuaikan dengan tinggi navbar
              behavior: "smooth"
          });
      }
  });
});

function switchTab(tab) {
  const sections = ["experience", "education", "competition"];
  
  sections.forEach(section => {
    document.getElementById(section + "-section").classList.add("hidden");
    document.getElementById("btn-" + section).classList.remove("bg-blue-600");
    document.getElementById("btn-" + section).classList.add("bg-blue-500");
  });

  document.getElementById(tab + "-section").classList.remove("hidden");
  document.getElementById("btn-" + tab).classList.add("bg-blue-600");
  document.getElementById("btn-" + tab).classList.remove("bg-blue-500");

  const element = document.getElementById(tab + "-section");
  window.scrollTo({
    top: element.offsetTop - 100,
    behavior: "smooth"
  });
}
