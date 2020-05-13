const userName = prompt("Can you enter your name, please ?");

document.getElementById("cartTitle").innerText = `${userName} cart!`;


function changeTotal(input) {
   const row  = input.parentElement.parentElement.childNodes;
   const price = row[7].innerText;
   const priceInt = parseInt(price, 10);
   const inputValue = parseInt(input.value, 10);
   row[11].innerText = `$${inputValue * price}`; // row 11 is total price 
    
  // const totalElement = document.getElementById("total");
  // const total = totalElement.innerText.split(" ")[1];
  //totalElement.innerText = `Total ${(parseInt(total, 10) + priceInt )}`
   
}