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

