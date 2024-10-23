// script.js
document.getElementById('add-item').addEventListener('click', addItem);

let totalPrice = 0;

function addItem() {
    const item = document.getElementById('item').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (item && price && quantity) {
        const itemTotal = price * quantity;
        totalPrice += itemTotal;

        const table = document.getElementById('shopping-list').getElementsByTagName('tbody')[0];
        const row = table.insertRow();

        row.insertCell(0).innerText = item;
        row.insertCell(1).innerText = 'Rp ' + price.toFixed(2);
        row.insertCell(2).innerText = quantity;
        row.insertCell(3).innerText = 'Rp ' + itemTotal.toFixed(2);
        
        const deleteCell = row.insertCell(4);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Hapus';
        deleteButton.onclick = function () {
            const rowTotal = parseFloat(row.cells[3].innerText.replace('Rp ', ''));
            totalPrice -= rowTotal;
            row.remove();
            document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        };
        deleteCell.appendChild(deleteButton);
        
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        document.getElementById('form-kasir').reset();
    } else {
        alert('Mohon isi semua field.');
    }
}

document.getElementById('checkout').addEventListener('click', function() {
    if (totalPrice > 0) {
        alert('Total belanja: Rp ' + totalPrice.toFixed(2));
        document.getElementById('shopping-list').getElementsByTagName('tbody')[0].innerHTML = '';
        totalPrice = 0;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    } else {
        alert('Belum ada item yang ditambahkan.');
    }
});