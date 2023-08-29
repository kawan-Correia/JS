let num = [5, 6, 7, 8, 9, 1]
//num[7] = 2
num.push(3)
//num.length
num.sort()

console.log(`Vetor ${num}`)
console.log(`Vetor tem ${num.length} posições`)
console.log(`O Primeiro ${num[0]}`)
let pos = num.indexOf(4) 
if (pos == -1){
    console.log('Numero da posição nao encontrado')
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}

