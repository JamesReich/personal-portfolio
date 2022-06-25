
///////////////////////////
//       Skills 
///////////////////////////

const skillsCont = document.getElementById('skills-slider');

$(skillsCont).ready(function () {
    $('#skills-slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        cssEase: 'ease',
        centerMode: true,
        draggable: true,
        infinite: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        useCss: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

///////////////////////////
//       EMAIL
///////////////////////////
const nameForm = document.getElementById('name');
const emailForm = document.getElementById('email');
const messageForm = document.getElementById('message');
const emailSent = document.getElementById('email-success');
const successBtn = document.getElementById('success-btn');
const emailFailed = document.getElementById('email-failed');
const failBtn = document.getElementById('fail-btn');

const namePlaceholder = document.getElementsByName('user_name');
const emailPlaceholder = document.getElementsByName('user_email');
const messagePlaceholder = document.getElementsByName('message');

emailSent.style.display = 'none';
emailFailed.style.display = 'none';

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;

        if (nameForm.value == '') {

            namePlaceholder[0].placeholder = 'Please enter your name';
            nameForm.style.border = '3px solid rgb(221, 79, 79)'

        } else if (messageForm.value == '') {

            messagePlaceholder[0].placeholder = 'Message must not be empty';
            messageForm.style.border = '3px solid rgb(221, 79, 79)'

        } else if (emailForm.value == '') {

            emailPlaceholder[0].placeholder = 'Please enter a valid email'
            emailForm.style.border = '3px solid rgb(221, 79, 79)'



        } else if (nameForm.value == '' && messageForm.value == '') {


            namePlaceholder[0].placeholder = 'Please enter your name';

            messagePlaceholder[0].placeholder = 'Message must not be empty';

        } else {

            // these IDs from the previous steps
            emailjs.sendForm('service_9oq9vf5', 'contact_form', this)
                .then(function () {
                    console.log('SUCCESS!');

                    nameForm.value = '';
                    emailForm.value = '';
                    messageForm.value = '';

                    emailSent.style.display = '';

                    nameForm.style.border = ''
                    messageForm.style.border = ''
                    emailForm.style.border = ''


                }, function (error) {
                    console.log('FAILED...', error);

                    emailFailed.style.display = '';
                });

        }

    });
}



successBtn.addEventListener('click', () => {

    emailSent.style.display = 'none';

})
failBtn.addEventListener('click', () => {

    emailFailed.style.display = 'none';

})