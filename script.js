let totalArvores = 0;

function plantarArvore() {
    totalArvores++;

    document.getElementById("arvores").textContent = totalArvores;

    if (totalArvores % 10 === 0) {
        alert("Parabéns! Você contribuiu para um futuro mais sustentável! 🌳");
    }
}
