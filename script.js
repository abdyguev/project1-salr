





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
    section.remove()
    newSection.innerHTML = wholePage
    midSection.appendChild(newSection)
    newSection.classList.add("activeLanding")
}





listenBtn.addEventListener("click", insertListen)
thisissalrBtn.addEventListener("click", insertThisIsSalr)
tourBtn.addEventListener("click", insertTour)
shopBtn.addEventListener("click", insertShop)
logoBtn.addEventListener("click", insertAll)

// CART //

function updateSubtotal(product) {
    const price = product.querySelector(".price span");
    const quantity = product.querySelector(".quantity input");
    const subtotal = product.querySelector(".subtotal span");
  
    const priceNum = price.innerHTML;
    const quantityNum = quantity.value;
  
    const subtotalNum = priceNum * quantityNum;
    subtotal.innerHTML = subtotalNum;
  
    return subtotalNum;
  }
  
  function calculateAll() {

    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);
  
    let totalSum = 0;
  
    const products = document.querySelectorAll(".product");
  
    products.forEach((singleProduct) => {
      totalSum += updateSubtotal(singleProduct);
      console.log(totalSum);
    });
  
    
    const total = document.querySelector("#subtotal-value span");
    total.innerHTML = totalSum;
  }
  
 
  
  function removeProduct(event) {
    const target = event.currentTarget.parentNode.parentNode;
    console.log("The target in remove is:", target);
    target.parentNode.removeChild(target);
  
    const total = document.querySelector("#subtotal-value span");
    const subtotal = target.querySelector(".subtotal span");
  
    total.innerHTML = total.innerHTML - subtotal.innerHTML;
  }
  

  
  function createProduct() {
    
    let nameElement = document.querySelector(
      '.create-product input[type="text"]'
    );
    let priceElement = document.querySelector(
      '.create-product input[type="number"]'
    );
  
    let cart = document.querySelector("tbody");
    let newProduct = document.createElement("tr");

  
  
    var deleteButton = newProduct.querySelector(".btn-remove");


    deleteButton.addEventListener("click", removeProduct);
  
    nameElement.value = "";
    priceElement.value = "";
  }
  
  window.addEventListener("load", () => {
    const calculatePricesBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);
  
    const removeButtons = document.querySelectorAll(".btn-remove");
    removeButtons.forEach((eachButton) => {
      eachButton.addEventListener("click", removeProduct);
    });
  
  });




