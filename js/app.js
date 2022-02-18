const fNav = document.querySelector('.first');
const sNav = document.querySelector('.sec');
const burg1 = document.querySelector('#burg1');
const burg2 = document.getElementById('burg2');
const nav = document.querySelector('.header__nav-list');

burg1.addEventListener('click', ()=>{
    fNav.classList.remove('active');
    sNav.classList.add('active');
    console.log('sdfsdf');
})

burg2.addEventListener('click', ()=>{
    fNav.classList.add('active');
    sNav.classList.remove('active');
    console.log('sdfsdf');
})

