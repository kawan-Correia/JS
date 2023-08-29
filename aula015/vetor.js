let valores = [2, 5, 6, 7, 0, 8, 9]

//console.log(valores)
/*
for ( let pos = 0; pos<valores.length; pos++) {
    valores.sort()
    console.log (` A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


for ( let pos in valores) {
    valores.sort()
    console.log(` A Posição ${pos} tem valor ${valores[pos]}`)
}
