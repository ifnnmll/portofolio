document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo("#typewriter", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" });
  gsap.fromTo("#role", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power2.out" });
  gsap.fromTo("#description", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power2.out" });
  gsap.fromTo("#contact-button", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power2.out" });

  gsap.fromTo("#profile-image", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2, delay: 1.5, ease: "power3.out" });
  gsap.fromTo("#background-shape", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1.2, delay: 1.8, ease: "power3.out" });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animasi untuk "Tentang Saya" Section
  gsap.from("#about h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%", // Mulai animasi saat elemen 80% masuk viewport
      toggleActions: "play none none none"
    }
  });

  gsap.from("#about p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from("#about a", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.6,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from("#about h3", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.9,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from("#about .bg-white", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.2,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Animasi Elemen Latar Belakang
  gsap.from("#about .absolute", {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

