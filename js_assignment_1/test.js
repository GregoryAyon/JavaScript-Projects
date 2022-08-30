// Extra
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeBtn = document.querySelectorAll('.btn-card');
    for (let i = 0; i < removeBtn.length; i++) {
        let button = removeBtn[i];
        button.addEventListener('click', removeCardItem);
    }


    let addBtn = document.querySelectorAll('.btn-cover');
    for (let i = 0; i < addBtn.length; i++) {
        let cardItem = addBtn[i];
        cardItem.addEventListener('click', addedToCard);
    };
}

function removeCardItem(event) {
    let cardItem = event.target;
    cardItem.parentElement.parentElement.remove();
}

function addedToCard(event) {
    let productItem = event.target;

    let productName = productItem.parentElement.previousElementSibling.previousElementSibling.innerText;
    let productPrice = productItem.parentElement.previousElementSibling.innerText;
    let table = document.getElementById('myTable');

    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    if (productName === cell1) {
        alert('This already you have in your card!');
    } else {
        cell1.innerHTML = productName;
        cell2.innerHTML = productPrice;
        cell3.innerHTML = '<button class="btn-card">Remove</button>';
    }
}