const textElements = document.querySelectorAll('.menu-text-foodprice');

textElements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'black'; 
    });

    element.addEventListener('mouseout', () => {
        element.style.color = 'rgb(184, 184, 184)'; 
    });
});