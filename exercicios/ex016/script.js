function contar() {
    var ini = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    var res = document.querySelector('#res')

    if(ini.value == fim.value) {
        alert('[Erro!!] inicio e Fim nao pode ter o msm valor!!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <=0 ){
            alert('Passo invalido, vamos considerar 1')
            p = 1
        }
        if(i < f) {
            //contagem crescendo
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F600}`;
            }
         } else {
            //contagem diminuindo
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F600}`
            }
         }
         res.innerHTML += `\u{1F3C1}`;
    }
}
