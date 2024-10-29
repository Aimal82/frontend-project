document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('color-change');

    container.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'SPAN') {
            event.target.classList.add('hovered');
        }
    });

    container.addEventListener('mouseout', (event) => {
        if (event.target.tagName === 'SPAN') {
            event.target.classList.remove('hovered');
        }
    });
});
