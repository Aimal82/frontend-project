const container = document.getElementById('color-change');

document.addEventListener('DOMContentLoaded', () => {

    container.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'SPAN') { 
            event.target.style.color = 'black'; 
        }
    });
    container.addEventListener('mouseout', (event) => {
        if (event.target.tagName === 'SPAN') { 
            event.target.style.color = 'rgb(184, 184, 184)';
        }
    });
});
