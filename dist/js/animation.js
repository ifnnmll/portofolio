document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    "#typewriter",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
  );
  gsap.fromTo(
    "#role",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power2.out" }
  );
  gsap.fromTo(
    "#description",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power2.out" }
  );
  gsap.fromTo(
    "#contact-button",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power2.out" }
  );

  gsap.fromTo(
    "#profile-image",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 1.2, delay: 1.5, ease: "power3.out" }
  );
  gsap.fromTo(
    "#background-shape",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 1.2, delay: 1.8, ease: "power3.out" }
  );
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
      start: "top 80%", 
      toggleActions: "play none none none",
    },
  });

  gsap.from("#about p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#about a", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.6,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#about h3", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.9,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from("#about .bg-white", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.2,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none",
    },
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
      toggleActions: "play none none none",
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#contact h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#contact .contact-item", {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#contact",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#contact .form-group", {
    opacity: 0,
    x: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#contact",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#contact button", {
    opacity: 0,
    scale: 0.5,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)",
    delay: 0.2,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 65%",
      toggleActions: "play none none reverse",
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const commonTriggerSettings = {
    start: "top 90%", 
    toggleActions: "play none none reverse", 
    once: true, 
    invalidateOnRefresh: true, 
  };

  // Animasi fade-in untuk judul dan deskripsi
  gsap.from("#project h4, #project h2, #project p", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#project",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".project-item", {
    opacity: 0,
    y: -50,
    scale: 0.95, 
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.2, 
    scrollTrigger: {
      trigger: "#projects-container",
      start: "top 80%", 
      toggleActions: "play none none none", 
      once: true,
    },
  });

  // Animasi fade-in untuk sosial media di footer
  gsap.from("#sosial-media, #sosial-media a, #sosial-media p", {
    opacity: 0,
    duration: 1.5,
    stagger: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#sosial-media",
      ...commonTriggerSettings,
    },
  });
  

  // Animasi tombol Scroll ke Atas
  gsap.from("#toTopBtn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "#sosial-media",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});


