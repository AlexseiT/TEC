//import initCloud from './cloud.js'

const isMobile = document.documentElement.clientWidth < 768;
const isTablet = document.documentElement.clientWidth < 1100;
const isLaptop = document.documentElement.clientWidth < 1408;
const scrollParam = 50;
function number_format(number, decimals, dec_point, thousands_sep) {

    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}
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
            delay: 4000, 
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
    window.decisionsSlider = new Swiper('.decisions-offer__swiper', {
        spaceBetween: 32,
        slidesPerView: 1,
        thumbs: {
            swiper: window.decisionsSlider
        },
        pagination: {
            el: '.decisions-offer__swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 3,
            }
        }
    });
    window.decisionsSlider = new Swiper('.case-offer__swiper', {
        spaceBetween: 32,
        slidesPerView: 1,
        thumbs: {
            swiper: window.decisionsSlider
        },
        pagination: {
            el: '.case-offer__swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 3,
            }
        }
    });
    let documents__swipers = document.querySelectorAll(".documents__swiper");

    documents__swipers.forEach(documents__swiper => {
        let pagin = documents__swiper.querySelector(".documents__swiper-pagination");
        let slider = new Swiper(documents__swiper, {
            spaceBetween: 0,
            slidesPerView: 2,
            /*thumbs: {
                swiper: window.decisionsSlider
            },*/
            pagination: {
                el: pagin,
                clickable: true,
            },
            breakpoints: {
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            }
        });
        //window.documentsSlider
    });

    window.contactsPersonSlider = new Swiper('.contacts-block__swiper', {
        spaceBetween: 32,
        slidesPerView: 1,
        thumbs: {
            swiper: window.contactsPersonSlider
        },
        pagination: {
            el: '.contacts-block__swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1100: {
                slidesPerView: 3,
            },
            1300: {
                slidesPerView: 4,
            }
        }
    });
    window.servicesProduct = new Swiper('.services-product__swiper', {
        spaceBetween: 32,
        slidesPerView: 1,
        thumbs: {
            swiper: window.servicesProduct
        },
        pagination: {
            el: '.services-product__swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });
}
function targetingElements()
{
    let targetButtons = document.querySelectorAll('.target-button');
    let targetGroup = document.querySelector('.target-group');

    targetButtons.forEach(button => {

        button.addEventListener('mouseenter', function() {

            let targetId = this.getAttribute('data-target-id');
            let activeElements = targetGroup.querySelectorAll('.target-element.active');
        
            activeElements.forEach(element => {
                element.classList.remove('active');
            });
            
            let targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });

}
function toggleElementsClick()
{
    let targetButtons = document.querySelectorAll('.toggle-button');
    let targetGroup = document.querySelector('.toggle-group');
    targetButtons.forEach(button => {
        button.addEventListener('click', function() {
            let targetId = this.getAttribute('data-target-id');
            let targetElement = document.querySelector(targetId);
            let activeElements = targetGroup.querySelectorAll('.toggle-button.active');

            activeElements.forEach(element => {
                let targetIdElement = element.getAttribute('data-target-id');
                let targeActivetElement = document.querySelector(targetIdElement);
                targeActivetElement.classList.remove('active');
                element.classList.remove('active');
            });

            if (targetElement) {
                targetElement.classList.toggle('active');
                button.classList.toggle('active');
            }
        });
    });

}

function includeDataElements()
{
    let includeItems = document.querySelectorAll('.include-item');

    includeItems.forEach(includeItem => {

        let includeId = includeItem.getAttribute('data-include');

        if (includeId) {
            let elementToInclude = document.querySelector(includeId);
            if (elementToInclude) {
                let clonedElement = elementToInclude.cloneNode(true);
                includeItem.innerHTML = '';
                includeItem.appendChild(clonedElement);
                elementToInclude.remove();
            }
        }

    });
}
function initScrollspy()
{
    let element = document.querySelector('.header__top');
    if (element && !isTablet)
    {
        UIkit.scrollspy(element, {
            target: '.fade-group',
            cls: 'uk-animation-fade',
            delay: 300
        });
    }
    element = document.querySelector('.header__bottom-container');
    if (element && !isTablet)
    {
        UIkit.scrollspy(element, {
            target: '*:not(.header__search-input)',
            cls: 'uk-animation-fade',
            delay: 100
        });
    }
    element = document.querySelector('.catalog__grid');
    if (element && !isTablet)
    {
        UIkit.scrollspy(element, {
            target: '.product__card',
            cls: 'uk-animation-slide-bottom',
            delay: 200
        });
    }
    element = document.querySelector('.decisions-offer__swiper');
    if (element && !isTablet)
    {
        UIkit.scrollspy(element, {
            target: '.decisions-offer__swiper .case__card',
            cls: 'uk-animation-slide-bottom',
            delay: 200
        });
    }
    element = document.querySelector('.case-offer__swiper');
    if (element && !isTablet)
    {
        UIkit.scrollspy(element, {
            target: '.case-offer__swiper .case__card',
            cls: 'uk-animation-slide-bottom',
            delay: 200
        });
    }
    element = document.querySelector('.quiz__img-cards');
    if (element && !isTablet)
    {
        UIkit.scrollspy(element, {
            target: '.quiz__img-cards .quiz__img-card',
            cls: 'uk-animation-slide-right',
            delay: 200
        });
    }
    element = document.querySelector('.reviews__column');
    if (element && !isTablet)
    {
        UIkit.scrollspy(element, {
            target: '.reviews__column .reviews__card',
            cls: 'uk-animation-slide-bottom',
            delay: 200
        });
    }
    element = document.querySelector('.contacts-block__swiper');
    if (element && !isTablet)
    {
        UIkit.scrollspy(element, {
            target: '.contacts-block__swiper .contacts-block__person',
            cls: 'uk-animation-slide-bottom',
            delay: 200
        });
    }
}
function initSticky()
{
    let element = document.querySelector('.header__bottom');
    if (element && !isTablet)
    {
        UIkit.sticky(element, {
            end: '!body',       
            offset: 94,         
            showOnUp: true,     
            animation: 'uk-animation-slide-top' 
        });
    }
    element = document.querySelector('.advantages__tag');
    if (element)
    {
        UIkit.sticky(element, {
            position: 'bottom',
            end: '!.advantages__tag-wrapper',       
            offset: -50,         

        });
    }
}
function initBurgerMenu()
{
    let button = document.querySelector('#burger-button');
    let button_close = document.querySelectorAll('.burger-button-close');
    let menu = document.querySelector("#data-menu");
    if (button && menu && button_close.length > 0)
    {
        button.addEventListener('click', function() {
            menu.classList.add("active");
        }); 
        button_close.forEach(element => {
            element.addEventListener('click', function() {
                menu.classList.remove("active");
            });  
        });

    }
}
function targetSwitchQuiz(){


  const switchButtons = document.querySelectorAll('.switch-button');

  switchButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetSlideId = this.getAttribute('data-target');
      const form = this.closest('.switch-group'); 
      const allSlides = form.querySelectorAll('.switch-slide');

      allSlides.forEach(slide => {
        slide.classList.remove('active');
      });

      const targetSlide = document.getElementById(targetSlideId);
      if (targetSlide) {
        targetSlide.classList.add('active');
      }
    });
  });

}
function initButtonsQuiz()
{
    const radioInputs = document.querySelectorAll('.quiz__input[type="radio"]');
    radioInputs.forEach(radio => {
        radio.addEventListener('change', function() {

        const parentButton = this.closest('.quiz__button');

        if (this.checked) {
            parentButton.classList.add('active');
        } else {
            parentButton.classList.remove('active');
        }

        const groupName = this.getAttribute('name');
        document.querySelectorAll(`.quiz__input[name="${groupName}"]`).forEach(otherRadio => {
            if (otherRadio !== this) {
            otherRadio.closest('.quiz__button').classList.remove('active');
            }
        });
        });
    });
}
function initFileButtons()
{
  const fileButtons = document.querySelectorAll('.button-file');
  fileButtons.forEach(button => {
    const inputFile = button.querySelector('.input-file');
    const buttonText = button.querySelector('.button-text-file');
    inputFile.addEventListener('change', function() {
      if (this.files && this.files.length > 0) {
    
        if (this.files.length === 1) {
          buttonText.textContent = this.files[0].name;
        } 
   
        else {
          buttonText.textContent = `Выбрано файлов: ${this.files.length}`;
        }
      } else {
    
        buttonText.textContent = buttonText.dataset.originalText || 'Прикрепить файл';
      }
    });
    
    if (!buttonText.dataset.originalText) {
      buttonText.dataset.originalText = buttonText.textContent;
    }
  });
}
function initButtonUp()
{
    let btnUp = document.querySelector('.btn-up');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            btnUp.classList.add('active');
        } else {
            btnUp.classList.remove('active');
        }
    });
    
    btnUp.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    return overlay;
}
function menuCategoryNormalize()
{
    const toggleButtons = document.querySelectorAll('.header__menu .toggle-button');
    const menuCategoryAll = document.querySelectorAll('.menu-category');
    const backButtons = document.querySelectorAll(".button-menu-back");
    toggleButtons.forEach(toggleButton => {

        let targetId = toggleButton.getAttribute('data-target-id');
        const menuCategory = document.querySelector(targetId);

        /*let overlay = document.querySelector(".menu-overlay");
        if (!overlay) overlay = createOverlay();*/
        let overlay = createOverlay();
        backButtons.forEach(backButton => {
            backButton.addEventListener('click', function() {
                menuCategoryAll.forEach(element => {
                    element.classList.remove('active');
                });
                toggleButtons.forEach(element => {
                    element.classList.remove('active');
                });
            });
        });
        overlay.addEventListener('click', function() {
            menuCategoryAll.forEach(element => {
                element.classList.remove('active');
            });
            toggleButtons.forEach(element => {
                element.classList.remove('active');
            });
            overlay.style.display = 'none';
        });
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class') {
                    if (menuCategory.classList.contains('active')) {
                        overlay.style.display = 'block';
                    } else {
                        overlay.style.display = 'none';
                    }
                }
            });
        });

        observer.observe(menuCategory, {
            attributes: true
        });

        const menuElement = document.querySelector('#data-menu');
        const observerConfig = {
        attributes: true, 
        attributeFilter: ['class'] 
        };

        const observer_second = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'class' && !menuElement.classList.contains('uk-animation')) 
                {
                    menuCategoryAll.forEach(element => {
                        element.classList.remove('active');
                    });
                    toggleButtons.forEach(element => {
                        element.classList.remove('active');
                    });
                    overlay.style.display = 'none';
                }
            });
        });

        observer_second.observe(menuElement, observerConfig);
    });
  
}
/* Фильтры */
function initRangeFilterItemController()
{
    let filter_names = ["price"];
    filter_names.forEach(name => {
        let filter = document.getElementById(name);
        if (filter)
        {   
            let track = filter.querySelector(".slider-track");
            let input_min = document.getElementById(name+"_min");
            let input_max = document.getElementById(name+"_max");
            let input_min_end = document.getElementById(name+"_end_min");
            let input_max_end = document.getElementById(name+"_end_max");
            let text_min = document.getElementById(name+"_min_text");
            let text_max = document.getElementById(name+"_max_text");
            let gap = 0;
            let min_value = parseInt(input_min_end.value);
            let max_value = parseInt(input_max_end.value);
            let around_value = (min_value + max_value) / 2;

            function ValueNormalize(sliderValue) {
                let normalizedValue;
                if (max_value > 1000000) {
                    if (sliderValue <= 80) {
                        normalizedValue = min_value + (sliderValue / 80) * (2000000 - min_value);
                        normalizedValue = Math.round(normalizedValue / 10000) * 10000;
                    } else {
                        normalizedValue = 2000000 + ((sliderValue - 80) / 20) * (max_value - 2000000);
                        normalizedValue = Math.round(normalizedValue / 100000) * 100000;
                    }
                } else {
                    normalizedValue = min_value + (sliderValue / 100) * (max_value - min_value);
                    if (max_value - min_value > 100000) {
                        normalizedValue = Math.round(normalizedValue / 10000) * 10000;
                    } else {
                        normalizedValue = Math.round(normalizedValue / 1000) * 1000;
                    }
                }
  
                return Math.max(min_value, Math.min(max_value, normalizedValue));
            }

            function Min()
            {
                let value = 0;
                if(parseInt(input_max.value) - parseInt(input_min.value) <= gap){
                    value = parseInt(input_max.value) + gap;
                    value = ValueNormalize(value);
                    input_min_end.value = value;
                    value = number_format(value, 0, ",", " ");
                    input_min.value = parseInt(input_max.value);
                }
                else
                {
                    value = parseInt(input_min.value);
                    value = ValueNormalize(value);
                    input_min_end.value = value;
                    value = number_format(value, 0, ",", " ");
                }
                text_min.innerHTML = value;
                let percent1 = 0;
                if(input_min.value != input_min.min){
                    percent1 = ( (input_min.value - input_min.min ) / (input_max.max - input_min.min) ) * 100;
                }
                let percent2 = 100;
                if(input_max.value != input_max.max){
                    percent2 = ( (input_max.value - input_min.min ) / (input_max.max - input_min.min) ) * 100;
                }
                track.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.1) ${percent1}% , rgba(230, 100, 16, 1) ${percent1}% , rgba(230, 100, 16, 1) ${percent2}%, rgba(0, 0, 0, 0.1) ${percent2}%)`;
            }
            function Max()
            {
                
                let value = 0;
                if(parseInt(input_max.value) - parseInt(input_min.value) <= gap){
                    value = parseInt(input_min.value) + gap;
                    value = ValueNormalize(value);
                    input_max_end.value = value;
                    value = number_format(value, 0, ",", " ");
                    input_max.value = parseInt(input_min.value);
                }
                else
                {
                    value = parseInt(input_max.value);
                    value = ValueNormalize(value);
                    input_max_end.value = value;
                    value = number_format(value, 0, ",", " ");
                }

                text_max.innerHTML = value;
                let percent1 = 0;
                if(input_min.value != input_min.min){
                    percent1 = ( (input_min.value - input_min.min ) / (input_max.max - input_min.min) ) * 100;
                }
                let percent2 = 100;
                if(input_max.value != input_max.max){
                    percent2 = ( (input_max.value - input_min.min ) / (input_max.max - input_min.min) ) * 100;
                }
                track.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.1)${percent1}% , rgba(230, 100, 16, 1)${percent1}% , rgba(230, 100, 16, 1) ${percent2}%, rgba(0, 0, 0, 0.1) ${percent2}%)`;

            }

            input_min.addEventListener('input', (event) => {
                Min();
            });
            input_max.addEventListener('input', (event) => {
                Max();
            });

            Min();
            Max();
        }
    });
}
function selectFilterItemController()
{
    let filter_names = ["size", "power", "material"];
    filter_names.forEach(name => {
        let filter = document.getElementById(name);
        if (filter)
        {   
            let input = filter.querySelector("input");
            let text_input = document.getElementById(name+"_filter_input")
            let buttons = filter.querySelectorAll("li");
            buttons.forEach(button => {
                if (button.classList.contains("value-all"))
                {
                    button.addEventListener('click', (event) => {
                        input.value = "";
                        let actives = filter.querySelectorAll(".filter-button_active");
                        actives.forEach(active => {
                            active.classList.remove("filter-button_active");
                        });
                        button.classList.add("filter-button_active");
                    });
                }
                else
                {
                    let value = button.getAttribute("data-value");
                    let button_all = filter.querySelector(".value-all");
                    button.addEventListener('click', (event) => {
                        input.value = "";
                        if (button.classList.contains("filter-button_active"))
                        {
                            button.classList.remove("filter-button_active");
                        }
                        else
                        {
                            button.classList.add("filter-button_active");
                            if (button_all)
                            {
                                button_all.classList.remove("filter-button_active");
                            }
                        }
                        let actives = filter.querySelectorAll(".filter-button_active");
                        if (text_input) text_input.value = "";
                        let check = true;
                        actives.forEach(item => {
                            let symbol = ", ";
                            if (check)
                            {
                                check = false;
                                symbol = "";
                            }
                            if (text_input) text_input.value += symbol + item.getAttribute("data-value");
                            input.value += symbol + item.getAttribute("data-value");
                        });
                    });
                }
            });
        }
    });
}
/* Слайдеры товаров */
function initProductSliders()
{
    const mainSwiper = new Swiper('.product__main-swiper', {
        loop: true,
        spaceBetween: 32,
        navigation: {
        nextEl: '.product__swiper-button-next',
        prevEl: '.product__swiper-button-prev',
        },
    });

    const thumbsSwiper = new Swiper('.product__thumbs-swiper', {
        //loop: true,
        spaceBetween: 8,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
        320: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 6,
        }
        }
    });

    mainSwiper.controller.control = thumbsSwiper;
    thumbsSwiper.controller.control = mainSwiper;

    document.querySelectorAll('.product__thumbs-swiper .swiper-slide').forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            mainSwiper.slideTo(index);
        });
    });

}
document.addEventListener('DOMContentLoaded', (event) => {
    initAdaptiveScrollHeader();
    initSliders();
    initScrollspy();
    initSticky();
    initBurgerMenu();
    targetSwitchQuiz();
    initButtonsQuiz();
    initFileButtons();
    toggleElementsClick();
    if(isTablet) {
        includeDataElements();
    }
    else{
        targetingElements();
    }
    initButtonUp();
    menuCategoryNormalize();
    initRangeFilterItemController();
    selectFilterItemController();
    initProductSliders();
});
