const textElement = document.getElementById('color-change');

// Change color on mouseover
textElement.addEventListener('mouseover', () => {
    textElement.style.color = 'black'; 
});

// Revert color on mouseout
textElement.addEventListener('mouseout', () => {
    textElement.style.color = 'rgb(184, 184, 184)'; 
});
