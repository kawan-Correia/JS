let valores = [2, 5, 6, 7, 0, 8, 9]

console.log(valores)

for ( let pos = 0; pos<=valores.length; pos++) {
    valores.push(3)
    valores.sort()
    console.log (` A posição ${pos} tem o valor ${valores[pos]}`)
}