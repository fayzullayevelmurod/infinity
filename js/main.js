AOS.init();

let burger = document.querySelector('.burger');
let media_menu = document.querySelector('.media_menu');
let media_menu_bg = document.querySelector('.media_menu_bg');
let closeBtn = document.querySelector('.close');

let card_more_btn = document.querySelectorAll('.card_more_btn');
let team_card_text = document.querySelectorAll('.team_card_text');

card_more_btn.forEach((btn, btnID) => {
    btn.addEventListener('click', () => {
        team_card_text[btnID].classList.toggle('active')
    })
})

burger.addEventListener('click', () => {
    media_menu.classList.add('active')
    closeBtn.classList.add('active')
    media_menu_bg.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    media_menu.classList.remove('active')
    closeBtn.classList.remove('active')
    media_menu_bg.classList.remove('active')
})

media_menu_bg.addEventListener('click', () => {
    media_menu.classList.remove('active')
    closeBtn.classList.remove('active')
    media_menu_bg.classList.remove('active')
})