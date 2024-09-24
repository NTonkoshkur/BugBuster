/* Chart */

const backgroundColor = ['rgb(119, 42, 207)']
const borderColor = ['rgb(119, 42, 207)']

// hamburger = document.querySelector('.hamburger');
// hamburger.onclick = function (){
//     navBar = document.querySelector('.navbar')
//     navBar.classList.toggle('active')
// }

const ctx = document.getElementById('myChart');
let smooth = true;
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Junior', 'Middle', 'Senior'],
        datasets: [{
            label: '',
            data: [500, 1000, 2000, 2500],
            borderWidth: 3,
            borderColor,
            backgroundColor,
        }]
    },
    options: {
        tooltips: {
            enabled: false,
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    display: false
                }
            },
            x: {
                ticks: {
                    font: {
                        weight: 'bold',
                        size: 20
                    }
                }
            },
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
            }
        }
    }
});

/* Accordion */

const programs = document.querySelectorAll('.program');
programs.forEach(program => {
    program.addEventListener('click', () => {
        programs.forEach(item => {
            if (item !== program) {
                item.classList.remove('active');
            }
        });
        program.classList.toggle('active');
    });
});

/* Slider */

const swiper = new Swiper('.slider__wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 60,
    width: 2550,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        400: {
            slidesPerView: 4,
        },
        620: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        }
    }
});

/* FAQ */

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        // Закрываем все другие вкладки
        faqs.forEach(item => {
            if (item !== faq) {
                item.classList.remove('active');
            }
        });

        // Переключаем текущее состояние
        faq.classList.toggle('active');
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.nav__burger');
    const navList = document.querySelector('.nav__list');

    burger.addEventListener('click', () => {
        navList.classList.toggle('active');
        burger.classList.toggle('active'); // Добавляем класс active к бургер-меню
    });
});















