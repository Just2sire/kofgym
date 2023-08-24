const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('the_end')
})

setTimeout(() => {
    loader.style.display = "none" ;
}, 1100);