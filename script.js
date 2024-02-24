document.addEventListener('DOMContentLoaded', () => {
    var data = [
        // Datos de ejemplo, puedes dejarlo vacío o con algunas filas para guiar al usuario
    ];

    var container = document.getElementById('hot');
    var hot = new Handsontable(container, {
        data: data,
        rowHeaders: true,
        colHeaders: ['Tipo', 'ID', 'Precio', 'Válido Desde (YYYY-MM-DDTHH:MM)', 'Válido Hasta (YYYY-MM-DDTHH:MM)'],
        columns: [
          {type: 'dropdown', source: ['item', 'weapon', 'armor']},
          {type: 'numeric'},
          {type: 'numeric'},
          {type: 'date', dateFormat: 'YYYY-MM-DDTHH:MM', correctFormat: true},
          {type: 'date', dateFormat: 'YYYY-MM-DDTHH:MM', correctFormat: true}
        ],
        contextMenu: true,
        filters: true,
        dropdownMenu: true,
        stretchH: 'all',
        manualRowResize: true,
        manualColumnResize: true,
        licenseKey: 'non-commercial-and-evaluation' // Change this license key if you have one
    });

    document.getElementById('generate').addEventListener('click', () => {
        const output = document.getElementById('output');
        output.textContent = JSON.stringify(hot.getData(), null, 2);
    });
});
