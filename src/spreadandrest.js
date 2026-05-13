let arrayFruta = ['manzana, mora, limon']
let arrayVerdura = ['tomate', 'cebolla', 'brocoli']

// spread
let arraySano = [...arrayFruta, ...arrayVerdura, 'aguacate']
console.log(arraySano)

//rest
let [fruta1, ...resto] = arrayFruta
console.log(fruta1, resto)
// Cómo diferenciarlos rápido ?

// 1.  ¿Estás "creando" variables nuevas? (Izquierda del `=`). Entonces es REST (estás guardando lo que sobra).
// 2.  ¿Estás "pasando" datos o creando un valor? (Derecha del `=` o dentro de un render). Entonces es SPREAD (estás repartiendo lo que ya tienes).