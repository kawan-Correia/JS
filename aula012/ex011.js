var idade = 68
console.log(`você tem ${idade} anos`)
if (idade < 16) {
    console.log('nao vota')
}   else if( idade <18 || idade >67) {
        console.log('voto opcional')
    } else {
        console.log('Voto obrigatorio')
    }
