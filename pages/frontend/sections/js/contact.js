const form = document.querySelector('form');

const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');

function sendEmail() {
    Email.send({
        Host: "smtp.mailendo.com",
        Username: "username",
        Password: "password",
        To: '',
        From: email.value,
        Subject: subject.value,
        Body: mess.value
    }).then(
        message => {
            if (message == 'OK') {
                Swal.fire({
                    title: "Listo!",
                    text: "Mensaje enviado con éxito",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const inputs = document.querySelectorAll('.item');

    for (const input in inputs) {
        if (input.value == "") {
            input.classList.add("error");
            input.parentElement.classList.add("error");
        }

        input.addEventListener('keyup', () => {
            if (input.value != "") {
                input.classList.remove("error");
                input.parentElement.classList.remove("error");
            }
            else {
                input.classList.add("error");
                input.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const errorTxtEmail = document.querySelector('.error-txt.email');

    if (!email.value.match(emailRegEx)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Ingresa un email válido."
        } else {
            errorTxtEmail.innerText = "Su email no puede estar en blanco."
        }

    } else {
        email.classList.add("error");
        email.parentElement.classList.add("error");
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains('error') && !email.classList.contains('error') && !subject.classList.contains('error') && !mess.classList.contains('error')) {
        sendEmail();

        form.reset();
        return false;
    }
});