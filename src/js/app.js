//import initCloud from './cloud.js'

const isMobile = document.documentElement.clientWidth < 768;
const isTablet = document.documentElement.clientWidth < 1100;
const isLaptop = document.documentElement.clientWidth < 1408;
const scrollParam = 50;

function checkScroll() {
    if (window.scrollY > scrollParam) {
        return true;
    }
    return false;
}
function initAdaptiveScrollHeader() {
    let header = document.querySelector("header");
    let header__bottom = document.querySelector(".header__bottom");
    let stickyOptions = UIkit.sticky(header__bottom);
    function check()
    {
        if (checkScroll()) {
            header.classList.add("header_active");
            header__bottom.classList.add("header__bottom_active");
        }
        if (!checkScroll()) {
            header.classList.remove("header_active");
            header__bottom.classList.remove("header__bottom_active");
        }
    }
    document.addEventListener('scroll', (event) => {
        check();
    });
    check();
}
function initSliders() {

    window.tabSliderLeft = new Swiper('.hero__swiper', {
        loop: true,
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
        },
        navigation: {
            prevEl: '.hero__swiper-button-prev',
            nextEl: '.hero__swiper-button-next',
        },
        thumbs: {
            swiper: window.tabSliderRight
        },
        pagination: {
            el: '.hero__swiper-pagination',
            clickable: true,
        },
    });

    
}

document.addEventListener('DOMContentLoaded', (event) => {
    initAdaptiveScrollHeader();
    initSliders();
    if(!isMobile)
    {

    }
    if(isLaptop) {
    
    }
})