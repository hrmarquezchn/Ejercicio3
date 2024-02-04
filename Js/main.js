function calcularMetros() {
    let km = document.getElementById("km").value;
    let metros = km * 1000;
    document.getElementById("resultado-metros").innerHTML = metros + " m";
}

function limpiarKm() {
    document.getElementById("km").value = "";
    document.getElementById("resultado-metros").innerHTML = "";
}

function calcularCentimetros() {
    let metros = document.getElementById("metros").value;
    let centimetros = metros * 100;
    document.getElementById("resultado-centimetros").innerHTML = centimetros + " cm";
}

function limpiarMetros() {
    document.getElementById("metros").value = "";
    document.getElementById("resultado-centimetros").innerHTML = "";
}

function calcularPulgadas() {
    let pies = document.getElementById("pies").value;
    let pulgadas = pies * 12;
    document.getElementById("resultado-pulgadas").innerHTML = pulgadas + " pulgadas";
}

function limpiarPies() {
    document.getElementById("pies").value = "";
    document.getElementById("resultado-pulgadas").innerHTML = "";
}

function calcularPulgadasYardas() {
    let yardas = document.getElementById("yardas").value;
    let pulgadas = yardas * 36;
    document.getElementById("resultado-pulgadas-yardas").innerHTML = pulgadas + " pulgadas";
}

function limpiarYardas() {
    document.getElementById("yardas").value = "";
    document.getElementById("resultado-pulgadas-yardas").innerHTML = "";
}
