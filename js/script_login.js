let r = document.querySelector(":root");

function change_to_sign_in() {
    document.getElementById("sign_up").classList.remove("active");
    document.getElementById("sign_up").classList.remove("fade_in");
    document.getElementById("sign_in").classList.add("active");
    document.getElementById("light1").classList.remove("active");
    document.getElementById("light2").classList.add("active");
    r.style.setProperty("--delay", "0s");
}

function change_to_sign_up() {
    document.getElementById("sign_up").classList.add("active");
    document.getElementById("sign_in").classList.remove("active");
    document.getElementById("light2").classList.remove("active");
    document.getElementById("light1").classList.add("active");
}   