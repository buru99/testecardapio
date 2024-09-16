document.querySelectorAll('.toggle-item').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const itemId = checkbox.getAttribute('data-item');
        if (checkbox.checked) {
            localStorage.setItem(itemId, 'hidden'); // ou envie para o backend
        } else {
            localStorage.removeItem(itemId); // ou envie para o backend
        }
    });
});
