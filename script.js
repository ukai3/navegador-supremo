script.js

function processInput() {
    const userInput = document.getElementById('userInput').value;
    const response = document.getElementById('response');
    
    // Substitui qualquer entrada pelo texto "Olá, Mundo!"
    response.textContent = 'Olá, Mundo!';
}

// Opcional: Adiciona a funcionalidade de pressionar Enter para processar a entrada
document.getElementById('userInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        processInput();
    }
});
