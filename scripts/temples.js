const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click',() => {
    nav.classList.add("visible")
})

cerrar.addEventListener('click',() => {
    nav.classList.remove("visible")
})


const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('last-modified');

const currentYear = new Date().getFullYear();
copyrightElement.textContent = `Copyright © ${currentYear} 🌴 Jose Manuel Rodas 🌴 La Paz, Bolivia`;

lastModifiedElement.textContent = `Document last modified: ${document.lastModified}`;
