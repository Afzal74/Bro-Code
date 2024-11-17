//checked = property that determines the checked state of an HTML
//          checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    

    if(myCheckbox.checked){
        subResult.textContent =`you are subscribed`;
    }
    else{
        subResult.textContent =`you are not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `you r paying with visa`
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent =  `you r paying with master Card`;
    }
    else if (payPalBtn.checked){
        paymentResult.textContent =  `you r paying with Paypal`;
    }
    else{
        paymentResult.textContent =  `you must select a payment option`;
    }
}

