const cardName = document.querySelector("#card-name");
const cardNumber = document.querySelector("#card-number");
const dateM = document.querySelector("#details-inputs-date-m");
const dateY = document.querySelector("#details-inputs-date-y");
const cardCvc = document.querySelector("#details-inputs-cvc");
const btn = document.querySelector(".btn");
const nameErr = document.querySelector(".error-for-name");
const numberErr = document.querySelector(".error-for-number");
const numberPlaceholder = document.querySelector(".card-front-number");
const dateErr = document.querySelector(".error-for-date");
const cvcErr = document.querySelector(".error-for-cvc");

btn.addEventListener("click", () => {
    nameValidation();
    numberValidation();
    dateValidation();
    cvcValidation();
});

function nameValidation(){
    var regexForName = /[a-zA-Z]+\s+[a-zA-Z]+/g;
    if(regexForName.test(cardName.value)){
        document.querySelector(".card-front-name").innerHTML = cardName.value.toUpperCase();
        cardName.classList.remove("wrong");
        nameErr.classList.remove("show");
        nameErr.classList.add("hidden");
    }else{
        cardName.classList.add("wrong");
        nameErr.classList.remove("hidden");
        nameErr.classList.add("show");
        document.querySelector(".card-front-name").innerHTML = "Name placeholder";
    }
}

function numberValidation(){
    let ok = 1;
    const digits = "0123456789";
    const numberArr = cardNumber.value.split("");
    if(cardNumber.value.length != 16){
        ok = 0;
    }
    for(let i of numberArr){
        if(!digits.includes(i)){
        ok = 0;
        break;
    }
  }
    for(let i = 0; i < numberArr.length; i++){
        if(i === 4 || i === 9 || i === 14){
            numberArr.splice(i, 0, " ");
        }
    }
  if(ok === 0){
    cardNumber.classList.add("wrong");
    numberErr.classList.remove("hidden");
    numberErr.classList.add("show");
    document.querySelector(".card-front-number").innerHTML = "0000 0000 0000 0000";
  } else{
    cardNumber.classList.remove("wrong");
    numberErr.classList.remove("show");
    numberErr.classList.add("hidden");
    document.querySelector(".card-front-number").innerHTML = numberArr.join("");
  }
}

function dateValidation(){
    let dateRegex = /^[0-9][0-9]$/;
    if (dateM.value.length != 2 || dateY.value.length != 2){
        dateM.classList.add("wrong");
        dateY.classList.add("wrong");
        dateErr.classList.remove("hidden");
        dateErr.classList.add("show");
    } else if (!dateRegex.test(dateM.value) || !dateRegex.test(dateY.value) || dateM.value === '00' || dateM.value > '12') {
        dateM.classList.add("wrong");
        dateY.classList.add("wrong");
        dateErr.classList.remove("hidden");
        dateErr.classList.add("show");
    } else {
        dateM.classList.remove("wrong");
        dateY.classList.remove("wrong");
        dateErr.classList.add("hidden");
        document.querySelector(".card-front-date").innerHTML = dateM.value + " / " + dateY.value;
    }
}

function cvcValidation(){
    let cvcRegex = /^[0-9][0-9][0-9]$/;
    if(cardCvc.value.length != 3 || !cvcRegex.test(cardCvc.value)){
        cardCvc.classList.add("wrong");
        cvcErr.classList.remove("hidden");
        cvcErr.classList.add("show");
    } else{
        cardCvc.classList.remove("wrong");
        cvcErr.classList.add("hidden");
        cvcErr.classList.remove("show");
        document.querySelector(".card-cvc").innerHTML = cardCvc.value;
    }
}