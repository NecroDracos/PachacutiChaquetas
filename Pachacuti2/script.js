// Variables globales
let currentSlideIndex = 0
const slides = document.querySelectorAll(".carousel-slide")
const dots = document.querySelectorAll(".dot")

// Función para mostrar slide específico
function showSlide(index) {
  // Ocultar todos los slides
  slides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  // Mostrar slide actual
  slides[index].classList.add("active")
  dots[index].classList.add("active")

  currentSlideIndex = index
}

// Función para ir al siguiente slide
function nextSlide() {
  const nextIndex = (currentSlideIndex + 1) % slides.length
  showSlide(nextIndex)
}

// Función para ir al slide anterior
function prevSlide() {
  const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length
  showSlide(prevIndex)
}

// Función para ir a slide específico (dots)
function currentSlide(index) {
  showSlide(index - 1)
}

// Función para toggle del menú móvil
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu")
  const menuIcon = document.querySelector(".menu-icon")
  const closeIcon = document.querySelector(".close-icon")

  mobileMenu.classList.toggle("hidden")
  menuIcon.classList.toggle("hidden")
  closeIcon.classList.toggle("hidden")
}

// Auto-play del carrusel (opcional)
setInterval(nextSlide, 5000)

// Cerrar menú móvil al hacer click en un enlace
document.querySelectorAll(".nav-mobile .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const mobileMenu = document.querySelector(".mobile-menu")
    const menuIcon = document.querySelector(".menu-icon")
    const closeIcon = document.querySelector(".close-icon")

    mobileMenu.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  })
})

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})
