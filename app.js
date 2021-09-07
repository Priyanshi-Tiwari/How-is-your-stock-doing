var purchasePrice=document.querySelector("#purchase-price");
var stockQuantity=document.querySelector("#stock-quantity");
var currentPrice=document.querySelector("#current-price");
var calculatetBtn=document.querySelector("#calculate-btn");
var outputDiv=document.querySelector("#output-div");
var containerDiv=document.querySelector(".flex-container")
var form=document.forms[0].elements[1];
console.log(form)

function clickHandler(){
   var purchaseValue=purchasePrice.value;
   var quantityValue=stockQuantity.value;
   var currentValue=currentPrice.value;

   var amountInvested=purchaseValue*quantityValue;
   var amountReturned=currentValue*quantityValue;

   var finalAmount=amountReturned-amountInvested;
   console.log(finalAmount)
   var profitPercent=(finalAmount*100/amountInvested).toFixed(2);
   console.log(profitPercent)

   if(finalAmount>0){
       outputDiv.innerText=`Congratulations! you gained Rs. ${finalAmount} with a profit of ${profitPercent} %`

   }
   else if(finalAmount===0){
       outputDiv.innerText=`You bought and sold the stock at the same price`
   }
   else{
       outputDiv.innerText=`You lost Rs. ${Math.abs(finalAmount)} with a loss of ${Math.abs(profitPercent)} %`
   }


}



calculatetBtn.addEventListener("click",clickHandler)


// if(profitPercent>50){
//     containerDiv.classList.add("happyTheme")
//   }
