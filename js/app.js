// const userName = prompt("Can you enter your name, please ?");

document.getElementById("cartTitle").innerText = `${userName} cart!`;


function changeTotal(input) {
   const row  = input.parentElement.parentElement.childNodes;
    row[11].innerText = `$${parseInt(input.value, 10) * 99}`;
}