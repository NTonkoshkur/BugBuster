/* Chart */

const backgroundColor = ['rgb(119, 42, 207)']
const borderColor = ['rgb(119, 42, 207)']

hamburger = document.querySelector('.hamburger');
hamburger.onclick = function (){
    navBar = document.querySelector('.navbar')
    navBar.classList.toggle('active')
}

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

document.querySelectorAll('.accordion__button').forEach((el) => {
    el.addEventListener('click', () => {
        let accordionContent = el.nextElementSibling;
        if (accordionContent.style.maxHeight) {
            document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null)
        }
        else {
            document.querySelectorAll('.accordion__content').forEach((el) => el.style.maxHeight = null)
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        }
    })
})

/* Slider */

const swiper = new Swiper('.slider__wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 60,
    width: 1700,
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
        0: {
            slidesPerView: 2,
        },
        620: {
            slidesPerView: 3,
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
        faq.classList.toggle('active')
    })
})













