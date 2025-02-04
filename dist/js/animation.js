document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo("#typewriter", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" });
  gsap.fromTo("#role", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power2.out" });
  gsap.fromTo("#description", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power2.out" });
  gsap.fromTo("#contact-button", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power2.out" });

  gsap.fromTo("#profile-image", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2, delay: 1.5, ease: "power3.out" });
  gsap.fromTo("#background-shape", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2, delay: 1.8, ease: "power3.out" });
});