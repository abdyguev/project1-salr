





var section = document.querySelector('section')

var thisissalrBtn = document.querySelector("#thisissalr")
var listenBtn = document.querySelector("#listen")
var tourBtn = document.querySelector("#tour")
var shopBtn = document.querySelector("#shop")
var logoBtn = document.querySelector(".nav-brand")



var newSection = document.createElement("section")
var midSection = document.querySelector("#mid-section")



function insertThisIsSalr(){
    section.remove()
    newSection.innerHTML = mainPage
    midSection.appendChild(newSection)
    newSection.classList.add("activePadding")
}



function insertListen(){
    section.remove()
    newSection.innerHTML = listenPage
    midSection.appendChild(newSection)
    newSection.classList.add("activePadding")

}


function insertTour(){
    section.remove()
    newSection.innerHTML = tourPage
    midSection.appendChild(newSection)
    newSection.classList.add("activePadding")

}

function insertShop(){
    section.remove()
    newSection.innerHTML = shopPage
    midSection.appendChild(newSection)
    newSection.classList.add("activePadding")

}

function insertAll(){


}

listenBtn.addEventListener("click", insertListen)
thisissalrBtn.addEventListener("click", insertThisIsSalr)
tourBtn.addEventListener("click", insertTour)
shopBtn.addEventListener("click", insertShop)
logoBtn.addEventListener("click", insertAll)
// thisissalrBtn.addEventListener("click", insertThisIsSalr)
















