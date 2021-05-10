const cookies = document.querySelector(".cookie-disclaimer")
const cookiesBtn = document.querySelectorAll(".cookie-btn");

//Close cookie discalimer onclick
cookiesBtn.forEach (button => (button.addEventListener ("click", function(){
    cookies.style.display = "none";
})))