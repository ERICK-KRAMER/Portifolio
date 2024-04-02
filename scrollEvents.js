"use strict";
function getElement(el) {
    return document.querySelector(el);
}
// Adiciona um ouvinte de evento ao menu
const menu = getElement("#menu");
menu.addEventListener('click', (event) => {
    const target = event.target;
    //
    const projects = getElement("#projectsDiv");
    const footer = getElement("#footer");
    const home = getElement("#homeDiv");
    // Verifica se o elemento clicado é um filho do menu
    if (target.closest('#home')) {
        const positionY = home.offsetTop;
        window.scrollTo({ top: positionY, behavior: 'smooth' });
    }
    else if (target.closest('#project')) {
        const positionY = projects.offsetTop;
        window.scrollTo({ top: positionY, behavior: 'smooth' });
    }
    else if (target.closest('#contact')) {
        const positionY = footer.offsetTop;
        window.scrollTo({ top: positionY, behavior: 'smooth' });
    }
});
