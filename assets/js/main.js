const activeImage = document.querySelector(".active-explore img");
const activeDesc = document.querySelector(".active-img-desc");
const images = document.querySelectorAll(".img-card img");

const nav = document.querySelector("nav");

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