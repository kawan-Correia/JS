let amigo = {nome: ' kawan',
sexo: 'M' ,
peso: 68.4 ,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`O meu amigo${amigo.nome} pesa ${amigo.peso}`)
