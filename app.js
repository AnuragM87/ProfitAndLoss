var initialPrice=document.querySelector("#initial-price");
// var stockQuantity=document.querySelector("#stocks-quantity");
var stockQuantity=document.querySelector("#stocks-quantity")
var currentPrice=document.querySelector("#current-price");

var submitBtn=document.querySelector("#submit-btn");
var outputBox=document.querySelector("#output-box");

// console.log(stockQuantity.value);
function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        //loss object here
        var loss=(initial-current)*quantity;
        var lossPercentage=(loss/initial)*100;
        outputBox.innerText =`Hey the loss is ${loss} and the percent is ${lossPercentage}`;
    }
    else if(current> initial){
        var profit=(current- initial)*quantity;
        var profitPercentage=(profit/initial)*100;
        outputBox.innerText =`Hey the profit is ${profit} and the percent is ${profitPercentage}`;
// profit logic here
    }
    else{
        outputBox.innerText ="No gain";
// the rest of the logic
    }
}


function submitHandler(){

    var ip=initialPrice.value;
    var qty=stockQuantity.value;
    var curr=currentPrice.value;
    return calculateProfitAndLoss(ip,qty,curr);

}

submitBtn.addEventListener('click',submitHandler);