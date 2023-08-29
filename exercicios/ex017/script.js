function contar(){
    var n1 = document.querySelector('#n1').value
    var res = document.querySelector('#res')
    
    if ( n1 == 0) {
        alert('[Erro!!!]O numero nao pode ser 0')
    }
    res.innerHTML = "";
     for (var i =1; i<=10; i++){
        res.innerHTML+= `<br> ${n1} x ${i} = ${n1 * i}`
     }
}
