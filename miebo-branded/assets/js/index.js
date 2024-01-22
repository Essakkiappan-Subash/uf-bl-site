var iconOverly = document.querySelectorAll(".icon-overly");
var sliding = document.querySelector(".sliding");
var slidOverly = document.querySelectorAll(".slid-overly")
var actionSlider = document.querySelector(".action__slider");

document.querySelector(".slider-1").addEventListener("click", function() {
    actionSlider.style.gridTemplateColumns = "60% 20% 20%";
    
    document.querySelectorAll(".sliding")[0].style.display = "none";
    document.querySelectorAll(".sliding")[1].style.display = "none";
    document.querySelectorAll(".sliding")[2].style.display = "none";
    
    slidOverly[0].classList.add("active");
    slidOverly[1].classList.remove("active");
    slidOverly[2].classList.remove("active");

    // document.querySelectorAll(".slid-overly")[0].style.display = "block";
    // document.querySelectorAll(".slid-overly")[1].style.display = "none";
    // document.querySelectorAll(".slid-overly")[2].style.display = "none";

    iconOverly[0].style.display = "none";
    iconOverly[1].style.display = "block";
    iconOverly[2].style.display = "block";
})

document.querySelector(".slider-2").addEventListener("click", function() {
    actionSlider.style.gridTemplateColumns = "20% 60% 20%";

    document.querySelectorAll(".sliding")[0].style.display = "none";
    document.querySelectorAll(".sliding")[1].style.display = "none";
    document.querySelectorAll(".sliding")[2].style.display = "none";

    slidOverly[0].classList.remove("active");
    slidOverly[1].classList.add("active");
    slidOverly[2].classList.remove("active");

    // document.querySelectorAll(".slid-overly")[0].style.display = "none";
    // document.querySelectorAll(".slid-overly")[1].style.display = "block";
    // document.querySelectorAll(".slid-overly")[2].style.display = "none";

    iconOverly[0].style.display = "block";
    iconOverly[1].style.display = "none";
    iconOverly[2].style.display = "block";
})

document.querySelector(".slider-3").addEventListener("click", function() {
    actionSlider.style.gridTemplateColumns = "20% 20% 60%";

    document.querySelectorAll(".sliding")[0].style.display = "none";
    document.querySelectorAll(".sliding")[1].style.display = "none";
    document.querySelectorAll(".sliding")[2].style.display = "none";
    
    slidOverly[0].classList.remove("active");
    slidOverly[1].classList.remove("active");
    slidOverly[2].classList.add("active");

    // document.querySelectorAll(".slid-overly")[0].style.display = "none";
    // document.querySelectorAll(".slid-overly")[1].style.display = "none";
    // document.querySelectorAll(".slid-overly")[2].style.display = "block";

    iconOverly[0].style.display = "block";
    iconOverly[1].style.display = "block";
    iconOverly[2].style.display = "none";
})