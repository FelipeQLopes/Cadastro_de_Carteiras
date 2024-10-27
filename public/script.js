const colorPreview = document.getElementById('preview-box');
const iconPreview = document.getElementById('icon-preview');

document.querySelectorAll('.color-picker input').forEach(input => {
    input.addEventListener('change', (event) => {
        const color = event.target.value;
        colorPreview.style.backgroundColor = color;
    });
});

document.querySelectorAll('.icon-picker input').forEach(input => {
    input.addEventListener('change', (event) => {
        const icon = event.target.value;
        iconPreview.textContent = icon;
    });
});


function validateForm() {
    const fields = ["nomeConta", "saldo", "descricaoConta", "meta", "detalhes"];
    for (const field of fields) {
        if (document.getElementById(field).value === "") {
            alert(`${field} é obrigatório`);
            return false;
        }
    }
    return true;
}

function addData() {
    if (validateForm()) {
        const data = {
            nomeConta: document.getElementById("nomeConta").value,
            saldo: document.getElementById("saldo").value,
            descricaoConta: document.getElementById("descricaoConta").value,
            meta: document.getElementById("meta").value,
            detalhes: document.getElementById("detalhes").value
        };

        fetch('/addContas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(message => alert(message))
        .catch(error => alert("Erro: " + error));
    }
}
