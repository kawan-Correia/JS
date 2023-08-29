let valores = [2, 5, 6, 7, 0, 8, 9]

console.log(valores)

for ( let pos = 0; pos<=valores.length; pos++) {
    valores.sort()
    valores.push(3);
    console.log (` A posição ${pos} tem o valor ${valores[pos]}`)
}