function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[Erro] Confira os valores inserido e tente novamente')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute("src", "imagem/bebeM.jpg");
                res.style.color = 'blue';
            } else if (idade < 18){
                //jovem
                img.setAttribute("src", "imagem/jovemM.jpg");
                res.style.color = "blue";
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "imagem/adultoM.jpg");
                res.style.color = "blue";
            } else {
                //idoso
                img.setAttribute("src", "imagem/vellhoM.jpg");
                res.style.color = "blue";
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
              //criança
              img.setAttribute("src", "imagem/bebeF.jpg");
              res.style.color = "blueviolet;";
            } else if (idade < 18) {
              //jovem
              img.setAttribute("src", "imagem/JovemF.jpg");
              res.style.color = "blueviolet;";
            } else if (idade < 50) {
              //Adulto
              img.setAttribute("src", "imagem/adultoF.jpg");
              res.style.color = "blueviolet";
            } else {
              //idoso
              img.setAttribute("src" , "imagem/velhoF.jpg");
              res.style.color = "blueviolet";
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${genero} de idade ${idade}`
        res.appendChild(img)
    }
}