const userName = prompt("Can you enter your name, please ?");

document.getElementById("cartTitle").innerText = `${userName} cart!`;


function changeTotal(input) {
   const row  = input.parentElement.parentElement;
   const rowNodes = row.childNodes;
   const price = rowNodes[3].innerText;
   const priceInt = parseInt(price, 10);
   const inputValue = parseInt(input.value, 10);
   rowNodes[5].innerText = `$${inputValue * price}`; // row 11 is total price
}

function deleteItem(input) {
   const td  = input.parentNode;
   const row  = td.parentNode;
   row.parentNode.removeChild(row);
}

function getBooks(){
  const booksCount = parseInt(prompt("how many book do you want to see (1 - 5) ?"));
  if (!booksCount || booksCount < 0 || booksCount > 5) return getBooks();

  const bookPrice = 100;

  const table = document.getElementById("cart");
  for (var i = 0; i < booksCount; i++) {
  const tr = document.createElement("tr");
  const index = document.createElement("td");
  index.innerText = i + 1;
  const name = document.createElement("td");
  name.innerText = `book${i+1}`;

  const imageCell = document.createElement("td");
  const image = document.createElement("img");
  image.src = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  imageCell.appendChild(image);

  const price = document.createElement("td");
  price.innerText = bookPrice;

  const quantity = document.createElement("td");
  const inputQuantity = document.createElement("input");
  inputQuantity.type = "number";
  inputQuantity.value = 1;
  inputQuantity.min = 1;
  inputQuantity.onchange = function () {
    return changeTotal(inputQuantity);
  }
  quantity.appendChild(inputQuantity);

  const totalPrice = document.createElement("td");
  totalPrice.innerText = `${bookPrice}`;

  const deleteButton = document.createElement("td");
  const inputDelete = document.createElement("input");
  inputDelete.type = "button";
  inputDelete.value = "Delete";
  inputDelete.classList.add("btn");
  inputDelete.classList.add("btn-danger");
  inputDelete.onclick = function () {
    return deleteItem(inputDelete);
  }
  deleteButton.appendChild(inputDelete);

  tr.appendChild(index);
  tr.appendChild(name);
  tr.appendChild(imageCell);
  tr.appendChild(price);
  tr.appendChild(quantity);
  tr.appendChild(totalPrice);
  tr.appendChild(deleteButton);
  table.appendChild(tr);

  }
}


getBooks();
