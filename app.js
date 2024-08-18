let nome = document.getElementById('nome');
let btn = document.getElementById('btn');
let loading = document.getElementById('loading');

btn.addEventListener('click', function() {
    // Mostrar o spinner de carregamento
    loading.style.display = 'block';

    // Simular um carregamento com setTimeout
    setTimeout(function() {
        // Armazenar o nome no localStorage
        localStorage.setItem('nomeUsuario', nome.value);

        // Redirecionar para a próxima página
        window.location.href = 'resultado.html';
    }, 2000); // Tempo em milissegundos (2 segundos)
});
