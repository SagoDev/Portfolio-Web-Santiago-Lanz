const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');

function sendEmail() {
    fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: fullName.value,
            email: email.value,
            subject: subject.value,
            message: mess.value
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Swal.fire({
                    title: "Listo!",
                    text: "Mensaje enviado con éxito",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: data.message,
                    icon: "error"
                });
            }
        })
        .catch(error => console.error("Error:", error));
}



function checkInputs() {
    const inputs = document.querySelectorAll('.item');

    for (const input of inputs) {
        if (input.value === "") {
            input.classList.add("error");
            input.parentElement.classList.add("error");
        }

        input.removeEventListener('keyup', handleKeyUp);
        input.addEventListener('keyup', handleKeyUp);
    }

    function handleKeyUp(event) {
        const input = event.target;
        if (input.value !== "") {
            input.classList.remove("error");
            input.parentElement.classList.remove("error");
        } else {
            input.classList.add("error");
            input.parentElement.classList.add("error");
        }
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
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    checkEmail();

    if (!fullName.classList.contains('error') && !email.classList.contains('error') && !subject.classList.contains('error') && !mess.classList.contains('error')) {
        sendEmail();
        form.reset();
        return false;
    }
});
