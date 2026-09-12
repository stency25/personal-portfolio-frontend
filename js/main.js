
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(13, 17, 23, 1)';
    } else {
        header.style.backgroundColor = 'rgba(13, 17, 23, 0.9)';
    }
});