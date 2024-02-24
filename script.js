document.getElementById('addItem').addEventListener('click', () => {
    const type = document.getElementById('type').value;
    const id = document.getElementById('id').value;
    const price = document.getElementById('price').value;
    const validFrom = document.getElementById('validFrom').value;
    const validTo = document.getElementById('validTo').value;

    const item = {
        type,
        id: Number(id),
        price: Number(price),
        'valid-from': validFrom,
        'valid-to': validTo
    };

    addItemToList(item);
});

document.getElementById('generate').addEventListener('click', generateRawText);

let items = [];

function addItemToList(item) {
    items.push(item);
    console.log(items);
    alert('Ítem añadido a la lista');
}

function generateRawText() {
    const output = document.getElementById('output');
    output.textContent = JSON.stringify(items, null, 2);
}
