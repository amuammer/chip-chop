const userName = prompt("Can you enter your name, please ?");

document.getElementById("cartTitle").innerText = `${userName} cart!`;


function changeTotal(input) {
   const row  = input.parentElement.parentElement;
   const rowNodes = row.childNodes;
   const price = rowNodes[7].innerText;
   const priceInt = parseInt(price, 10);
   const inputValue = parseInt(input.value, 10);
   rowNodes[11].innerText = `$${inputValue * price}`; // row 11 is total price 
    

   // const totalElement = document.getElementById("total");
   //const total = totalElement.innerText.split(" ")[1];
  // totalElement.innerText = `Total ${(parseInt(total, 10) + priceInt )}`
   
}