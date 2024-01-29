document.getElementById("surpriseButton").addEventListener("click", function() {
    this.classList.add('hidden'); // Esconder el botón
    const messageSection = document.getElementById("surpriseMessage");
    messageSection.classList.remove("hidden");
    messageSection.style.animation = 'fadeInUp 1.5s forwards';
});
