// ============================
// Typing Animation
// ============================

const typed = new Typed(".typing", {
    strings: [
        "Python Developer",
        "AI & ML Enthusiast",
        "Frontend Developer",
        "Flask Developer",
        "Problem Solver"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    startDelay: 300,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: "|"
});


// ============================
// EmailJS
// ============================

emailjs.init({
    publicKey: "87eacmVbc5o6eEr61"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_es6zpu4",
        "template_zyswpr3",
        this
    ).then(() => {

        alert("✅ Message Sent Successfully!");

        form.reset();

    }).catch((error) => {

        console.log(error);

        alert(error.text || JSON.stringify(error));

    });

});
//============================
//initialise AOS
//============================  

AOS.init({

    duration: 1000,

    once: true,

    offset: 120,

    easing: "ease-in-out"

});

/*==============================
    DARK / LIGHT MODE
==============================*/

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

    else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});
/*==============================
    ACTIVE NAVBAR
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*==============================
    SCROLL PROGRESS BAR
==============================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";

});
/*==============================
        PRELOADER
==============================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 1000);

});