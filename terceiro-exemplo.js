function fazerBolo(sabor, callback) {
    //faz o bolo
    var bolo = "Bolo de " + sabor;
    //manda embalar o bolo
    callback(bolo, entregarBolo);
}

function entregarBolo(bolo) {
    //entrega bolo
}

function embalarBolo(bolo, callback) {
    //embala
    //manda entregar o bolo
    callback(bolo)
}

fazerBolo("chocolate", embalarBolo);