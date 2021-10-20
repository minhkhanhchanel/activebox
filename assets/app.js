$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()){
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    })
})
const mobileMenu = document.querySelector('.js-mobile-menu')
const mobileModal = document.querySelector('.js-mobile-header-modal')
const mobileIconModal = document.querySelector('.mobile-menu__ion-bar') //sai
const mobileCloseModal = document.querySelector('.fa-times')//icon
const mobileModalContainer = document.querySelector('.js-mobile-header-modal__container')
function showMenuMobile() {
    mobileModal.classList.add('open'),mobileIconModal.classList.add('fa-times')
}
function hideMenuMobile() {
    mobileModal.classList.remove('open'),mobileIconModal.classList.remove('fa-times')
}
mobileMenu.addEventListener('click',showMenuMobile)

mobileModal.addEventListener('click',hideMenuMobile)

// mobileCloseModal.addEventListener('click',hideMenuMobile)




// mobileCloseModal.addEventListener('click',hideMenuMobile)

mobileModalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})