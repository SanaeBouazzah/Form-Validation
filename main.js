var form = document.getElementById("form");
var inputs = document.querySelectorAll("input");
var eye = document.querySelector('i');
var pass =document.getElementById("pass");
eye.addEventListener('click', () => {
    if (pass.getAttribute('type') === 'password') {
        pass.setAttribute('type', 'text');
        eye.setAttribute('class', 'fa fa-eye-slash');
    } else {
        pass.setAttribute('type', 'password');
        eye.setAttribute('class', 'fa fa-eye');
    }
});
form.addEventListener("submit", submithandler);
function submithandler(e) {
    e.preventDefault();
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.nextElementSibling.textContent = `${input.dataset.type} is Required`;
        }

        else if (input.dataset.type === "Username" && input.value.trim().length > 6) {
            input.nextElementSibling.textContent = 'Not acceptable  Less Than 7 Character';
        }
        else if (input.dataset.type === "Password" && input.value.length > 10) {
            input.nextElementSibling.textContent = 'Not acceptable  Less  Than 10 Character';
        }


        else if (input.dataset.type === "Email" && !input.value.trim().includes("@gmail.com")) {
            input.nextElementSibling.textContent = 'example@gmail.com';
        }


        else {
            input.nextElementSibling.textContent = "";
        }
    });

};