// SELECTORS
const inputMoney = document.querySelector('.money');
const buttonMoney = document.querySelector('.money-button');
const currencyList = document.querySelector(".currency-list");
const filterConversion = document.getElementsByClassName('filter-conversion');
const options = document.querySelectorAll("option");

// EVENT LISTENER

buttonMoney.addEventListener("click", addCurrency);

// FUNCTIONS

function addCurrency(event){
  // Prevent form from submitting
  event.preventDefault();

  // DIV FOR EACH CURRENCY

  if(filterConversion[0].value == "usd"){

    options.forEach(function(children){

      if(children.value != filterConversion[0].value){

        // currency DIV
        const currencyDiv = document.createElement("div");
        currencyDiv.classList.add("currency-div");

        // Create li
        const newCurrency = document.createElement("li");

        switch(children.value){

          case "cad":
            var number = inputMoney.value * 1.01941;
            newCurrency.innerText = number.toFixed(5) + " CAD";
            break;
          case "eur":
            var number = inputMoney.value * 1.41544;
            newCurrency.innerText = number.toFixed(5) + " EUR";
            break;
          case "aud":
            var number = inputMoney.value * 0.88297;
            newCurrency.innerText = number.toFixed(5) + " AUD";
            break;
        }

        newCurrency.classList.add("currency-item");
        currencyDiv.appendChild(newCurrency);

        // append currencyDiv to currencyList
        currencyList.appendChild(currencyDiv);
      }
    });
  }





  if(filterConversion[0].value == "cad"){

    options.forEach(function(children){

      if(children.value != filterConversion[0].value){

        // currency DIV
        const currencyDiv = document.createElement("div");
        currencyDiv.classList.add("currency-div");

        // Create li
        const newCurrency = document.createElement("li");

        switch(children.value){
          case "usd":
            var number = inputMoney.value * 0.98054;
            newCurrency.innerText = number.toFixed(5) + " USD";
            break;

          case "eur":
            var number = inputMoney.value * 1.38814;
            newCurrency.innerText = number.toFixed(5) + " EUR";
            break;
          case "aud":
            var number = inputMoney.value * 0.86613;
            newCurrency.innerText = number.toFixed(5) + " AUD";
            break;
        }

        newCurrency.classList.add("currency-item");
        currencyDiv.appendChild(newCurrency);

        // append currencyDiv to currencyList
        currencyList.appendChild(currencyDiv);
      }
    });
  }


  if(filterConversion[0].value == "eur"){

    options.forEach(function(children){

      if(children.value != filterConversion[0].value){

        // currency DIV
        const currencyDiv = document.createElement("div");
        currencyDiv.classList.add("currency-div");

        // Create li
        const newCurrency = document.createElement("li");

        switch(children.value){
          case "usd":
            var number = inputMoney.value * 0.70641;
            newCurrency.innerText = number.toFixed(5) + " USD";
            break;

          case "cad":
            var number = inputMoney.value * 0.72037;
            newCurrency.innerText = number.toFixed(5) + " CAD";
            break;
          case "aud":
            var number = inputMoney.value * 0.62382;
            newCurrency.innerText = number.toFixed(5) + " AUD";
            break;
        }

        newCurrency.classList.add("currency-item");
        currencyDiv.appendChild(newCurrency);

        // append currencyDiv to currencyList
        currencyList.appendChild(currencyDiv);
      }
    });
  }


  if(filterConversion[0].value == "aud"){

    options.forEach(function(children){

      if(children.value != filterConversion[0].value){

        // currency DIV
        const currencyDiv = document.createElement("div");
        currencyDiv.classList.add("currency-div");

        // Create li
        const newCurrency = document.createElement("li");

        switch(children.value){

          case "gbp":
            var number = inputMoney.value * 2.29964;
            newCurrency.innerText = number.toFixed(5) + " GBP";
            break;
          case "cad":
            var number = inputMoney.value * 1.15498;
            newCurrency.innerText = number.toFixed(5) + " CAD";
            break;
          case "eur":
            var number = inputMoney.value * 1.60329;
            newCurrency.innerText = number.toFixed(5) + " EUR";
            break;
        }

        newCurrency.classList.add("currency-item");
        currencyDiv.appendChild(newCurrency);

        // append currencyDiv to currencyList
        currencyList.appendChild(currencyDiv);
      }
    });
  }

  // RESET BUTTON
  const resetButton = document.createElement("button");
  resetButton.innerHTML = "Reset";
  resetButton.classList.add("reset-button");

  // append resetButton to currencyList
  currencyList.appendChild(resetButton);

  resetButton.addEventListener("click", function(){
    location.reload();
    inputMoney.value = "";
  });
}
