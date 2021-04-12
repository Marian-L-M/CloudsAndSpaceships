const activeImage = document.querySelector(".active-explore img");
const activeDesc = document.querySelector(".active-img-desc");
const images = document.querySelectorAll(".img-card img");

const nav = document.querySelector("nav");

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");

const dropDown = document.querySelector(".dropdown");
const dropDownContent = document.querySelector(".dropdown-content")

const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

//Mobile Nav
//Opening mobile menu
menuBtn.addEventListener ("click", function() {
    mobileNav.classList.add("active");
    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
})

//Closing mobile menu
closeBtn.addEventListener ("click", function() {
    mobileNav.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
})

/* Close menu by clicking grey area*/
mobileNav.addEventListener ("click", function() {
    mobileNav.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
})



// Mobile Nav Menu Links

mobileNavLinks.forEach(link => (link.addEventListener("click", 
function(){
    mobileNav.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    
})))
//Eventlisteners for images

images.forEach(image => (image.addEventListener("click", changeImage)));

function changeImage(e) {
    activeImage.src = e.target.src;
    activeDesc.innerHTML = e.target.nextElementSibling.innerText;
}

// Scroll Menu bar

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 30) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
})