function fazerBolo(sabor, callback) {
    //faz o bolo
    var bolo = "Bolo de " + sabor;
    //manda entregar o bolo
    callback(bolo);
}

function entregarBolo(bolo) {
    //entrega bolo
}

fazerBolo("chocolate", entregarBolo());