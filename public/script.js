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
