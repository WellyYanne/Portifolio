// Mostra o botão após rolar 20px da página
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    var btn = document.getElementById("btnTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block"; // Mostra o botão
    } else {
        btn.style.display = "none"; // Oculta o botão
    }
}

// Função para rolar a página até o topo
function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
