function iniciarSimulador() {
    var pedido = {
        platos: [],
        total: 0
    };

    do {
        var plato = prompt("Ingrese un plato (o 'fin' para terminar el pedido):");
        if (plato !== 'fin') {
            var precio = prompt("Ingrese el precio del plato:");
            precio = parseFloat(precio);
            if (!isNaN(precio)) {
                pedido.platos.push({ plato: plato, precio: precio });
                pedido.total += precio;
            } else {
                alert("¡Ingrese un precio válido!");
            }
        }
    } while (plato !== 'fin');

    mostrarPedido(pedido);
}

function mostrarPedido(pedido) {
    var mensaje = "Pedido cargado:\n\n";
    mensaje += "Platos:\n";
    pedido.platos.forEach(function(item) {
        mensaje += "- " + item.plato + " ($" + item.precio + ")\n";
    });
    mensaje += "\nTotal: $" + pedido.total.toFixed(2);

    alert(mensaje);
}