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
    window.documentsSlider = new Swiper('.documents__swiper', {
        spaceBetween: 20,
        slidesPerView: 1,
        thumbs: {
            swiper: window.decisionsSlider
        },
        pagination: {
            el: '.documents__swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1100: {
                slidesPerView: 3,
            }
        }
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
});
