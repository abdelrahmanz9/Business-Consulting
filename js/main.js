let setColor = document.getElementById("setColor")
let upBrn = document.querySelector(".up-btn")
let mixedBtns = document.querySelectorAll(".mixed-btn")
let navBar = document.querySelector("nav")





setColor.addEventListener("click", function(){

    let sun = document.getElementById("sun")
    let vector = document.getElementById("vector")
    let icon1 = document.querySelector(".icon-1")
    let icon2 = document.querySelector(".icon-2")
    let icon3 = document.querySelector(".icon-3")
    let headers = document.querySelectorAll(".my-heading")
    let containerProcess = document.querySelectorAll(".process-container")
    let containerNews = document.querySelectorAll(".card-info")
    let PurchaseContainer = document.querySelector(".Purchase-container")
    let navLogos = document.querySelectorAll(".nav-logo")
    let imgsLinlks = document.querySelectorAll(".img-info a")
    let subtitles = document.querySelectorAll(".Business-Projects")
    let hoverIcon = document.querySelector(".hover-icon")
    let emailInput = document.querySelector(".email-input")
    let services = document.querySelector(".services")
    let ProjectsContainer = document.querySelectorAll(".Projects-container")
    let spaceBottom = document.querySelector(".space-bottom")
    let PurchaseSection = document.querySelector(".Purchase-section")
    let footer = document.querySelector("footer")
    let bullets = document.querySelectorAll(".swiper-pagination-bullet")
    
    
    

    sun.classList.toggle("d-none")
    vector.classList.toggle("d-none")
    document.body.classList.toggle("bg-wite")
    icon1.classList.toggle("icon-1-toggle")
    icon2.classList.toggle("icon-2-toggle")
    icon3.classList.toggle("icon-3-toggle")
    PurchaseContainer.classList.toggle("bg-container-w")
    upBrn.classList.toggle("bg-container-w")
    hoverIcon.classList.toggle("text-black")
    emailInput.classList.toggle("email-input-light")
    services.classList.toggle("poreder-light")
    spaceBottom.classList.toggle("poreder-light")
    PurchaseSection.classList.toggle("poreder-light")
    footer.classList.toggle("poreder-light")
    

  

    
    

    for (const header of headers) {

        header.classList.toggle("text-black")
    }

    

    for (const container of containerProcess) {

        container.classList.toggle("bg-container-w")
        
    }
    
    for (const containerNew of containerNews) {


        containerNew.classList.toggle("bg-container-w")
    }

    for (const logo of navLogos) {

        logo.classList.toggle("d-none")
        
    }

    for (const link of imgsLinlks) {
        

        link.classList.toggle("text-black")
    }

    for (const subtitle of subtitles) {
        

        subtitle.classList.toggle("bg-container-w")
    }

    for (const Project of ProjectsContainer) {
        
        Project.classList.toggle("poreder-light")
    }

    for (const bullet of bullets) {
        

        bullet.classList.toggle("bullet")
    }

})




upBrn.addEventListener("click" , function(){

   
    document.documentElement.scrollTop = 0;
    
    
})







$(window).scroll(function(){
    let wScroll = $(Window).scrollTop()
    if(wScroll > 250){

        
        navBar.classList.add("position-fixed")
        navBar.classList.add("nav-dark")
    }
    else
    {
        
        navBar.classList.remove("position-fixed")
        navBar.classList.replace("nav-dark" , "bg-transparent")
    }
    
})







var mixer = mixitup('.mix-container');


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


