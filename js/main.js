// Presupuesto automático para páginas web
function calcularPresupuesto() {

    //Constantes
    const COSTO_POR_PAGINA = 150;
    const COSTO_SEO = 200;
    const COSTO_TIENDA = 600;
    const COSTO_MANTENIMIENTO = 50;
    const PORCENTAJE_DESCUENTO = 0.10;

    //Ingreso de datos al usuario
    let numeroPaginas = parseInt(prompt("¿Cuántas páginas tendrá el sitio web? (a partir de 10 páginas te ganas 10% de descuento)"));
    let incluyeSeo = prompt("¿Necesita posicionamiento SEO? (SI/NO)").toLowerCase();
    let incluyeTienda = prompt("¿Necesita una tienda online? (SI/NO)").toLowerCase();
    let incluyeMantenimiento = prompt("¿Necesita mantenimiento mensual? (SI/NO)").toLowerCase();
    let incluyeDescuento = false;

    console.log("-- Detalle de tu presupuesto: --")

    //Calculo del total
    let total = 0;
    console.log("Paginas: " + numeroPaginas);

    //Aplicación de un ciclo 
    for (let i = 1; i <= numeroPaginas; i++) {
        total = total + COSTO_POR_PAGINA;
        console.log("   Pagina " + i + ": Costo: " + COSTO_POR_PAGINA);
        if (i == 10) {
            incluyeDescuento = true;
        }
    }

    console.log("   Total Paginas: + USD " + total);

    if (incluyeSeo == "si") {
        total = COSTO_SEO + total;
        console.log("Incluye Seo: " + incluyeSeo + " + USD " + COSTO_SEO);
    }

    if (incluyeTienda == "si") {
        total = COSTO_TIENDA + total;
        console.log("Incluye Tienda: " + incluyeTienda + " + USD " + COSTO_TIENDA);
    }

    if (incluyeMantenimiento == "si") {
        total = COSTO_MANTENIMIENTO + total;
        console.log("Incluye Mantenimiento mensual: " + incluyeMantenimiento + " + USD " + COSTO_MANTENIMIENTO);
    }

    if (incluyeDescuento) {
        let totalDescuento = PORCENTAJE_DESCUENTO * total
        total = total - totalDescuento;
        console.log("Descuento 10%OFF - USD " + totalDescuento)
    }

    //Resultado en la consola
    console.log("-- El presupuesto total es de: USD " + total + " -- ");
}

//Ejecución de la función
calcularPresupuesto();
