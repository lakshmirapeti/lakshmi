const wrapp = document.querySelector('.wrapp');
const loginLink = document.querySelector('.login-link');
const registernLink = document.querySelector('.register-link');
const btnPop = document.querySelector('.loginp');
const iconc = document.querySelector('.sp-icon');

registernLink.addEventListener('click', () =>{
    wrapp.classList.add('active');
});

loginLink.addEventListener('click', () =>{
    wrapp.classList.remove('active');
});

btnPop.addEventListener('click', () =>{
    wrapp.classList.add('active-popup');
});

iconc.addEventListener('click', () =>{
    wrapp.classList.remove('active-popup');
});