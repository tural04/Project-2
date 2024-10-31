
function smoothScroll(target) {
    const section = document.getElementById(target);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('homeLink').addEventListener('click', () => smoothScroll('home'));
document.getElementById('aboutLink').addEventListener('click', () => smoothScroll('about'));
document.getElementById('productsLink').addEventListener('click', () => smoothScroll('products'));
document.getElementById('reviewLink').addEventListener('click', () => smoothScroll('review'));
document.getElementById('contactLink').addEventListener('click', () => smoothScroll('contact'));



const btnHome = document.getElementById("btnHome");
const btnAbout = document.getElementById("btnAbout");
const btnContact = document.getElementById("btnContact");

btnHome.addEventListener("click", event => {
    window.location.href = "#products";
})

btnAbout.addEventListener("click", event => {
    window.location.href = "#contact";
})


btnContact.addEventListener("click", event => {

    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const error = document.getElementById("error");

    let emailError = false;
    if (!email.includes("@") || !email.includes(".")) {
        emailError = true;
    }

    let phoneError = false;
    if (!number.startsWith("+7") || number.length !== 12) {
        phoneError = true;
    }

    if(emailError && phoneError) {

        error.textContent = "Incorrect type of number and email. Please, rewrite!";
    }
    else if (phoneError) {
        error.textContent = "Incorrect type of number. Please, rewrite!";
    }
    else if (emailError) {
        error.textContent = "Incorrect type of email. Please, rewrite!";
    }
    else {
        error.textContent = " ";
    }

})