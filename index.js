document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os itens do cardápio
    document.querySelectorAll('.menu-item').forEach(item => {
        // Obtém o id do item
        const itemId = item.id;
        // Verifica se o item deve ser oculto com base no localStorage
        if (localStorage.getItem(itemId) === 'hidden') {
            // Adiciona a classe 'hidden' ao item para ocultá-lo
            item.classList.add('hidden');
        }
    });
});
