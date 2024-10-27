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
    var nomeConta = document.getElementById("nomeConta").value;

    if (nomeConta.trim() === "") {
        alert("Please enter a name for the account.");
        return false; 
    }
}