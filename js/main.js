/* Burger */

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.nav__burger');
    const navList = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__list a');
    burger.addEventListener('click', () => {
        navList.classList.toggle('active');
        burger.classList.toggle('active');
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.toggle('active');
            burger.classList.toggle('active');
        })
    })
})

/* Chart */

const backgroundColor = ['rgb(119, 42, 207)']
const borderColor = ['rgb(119, 42, 207)']
const ctx = document.getElementById('myChart');
let smooth = true;
const myChart = new Chart(ctx, {
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
function updateChartFontSize(chart) {
    const screenWidth = window.innerWidth;
    const fontSize = screenWidth <= 600 ? 10 : 20;
    chart.options.scales.x.ticks.font.size = fontSize;
    chart.update();
}
updateChartFontSize(myChart);
window.addEventListener('resize', () => {
    updateChartFontSize(myChart);
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
        delay: 4000,
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
        360: {
            slidesPerView: 2,
            width: 720
        },
        600: {
            slidesPerView: 1,
            width: 600
        },
        768: {
            slidesPerView: 3,
            width: 1020
        },
        1320: {
            slidesPerView: 4,
            width: 1700
        }
    }
});

/* FAQ */

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faqs.forEach(item => {
            if (item !== faq) {
                item.classList.remove('active');
            }
        });
        faq.classList.toggle('active');
    });
});

/* Binotel */

(function(d, w, s) {
    var widgetHash = 'yEaYLo340SJSAbUx3kGr', bch = d.createElement(s); bch.type = 'text/javascript'; bch.async = true;
    bch.src = '//widgets.binotel.com/chat/widgets/' + widgetHash + '.js';
    var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(bch, sn);
})(document, window, 'script');