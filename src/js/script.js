const btnMobile = document.getElementById('btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('#btn-mobile i');

btnMobile.addEventListener('click', () =>{

    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-x');
})
