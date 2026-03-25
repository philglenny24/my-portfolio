function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}