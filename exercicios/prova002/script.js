function carregar () {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var h1 = document.querySelector("h1#titulo");
  var footer = document.querySelector("p#footer")
  var data = new Date()
  var hora = data.getHours()
    //var hora = 13
  msg.innerHTML = `Agora são ${hora} Horas`
  if(hora > 0 && hora < 12 ) {
    //Bom dia!!
    img.src = "imagens/manha.jpg";
    document.body.style.background = "#e2cd9f";
    h1.style.color = 'Black';
    footer.style.color = 'black';
    // document.body.style.color = 'black'
  } else if (hora >=12 && hora < 18){
    // Boa tarde!!
    img.src = "imagens/tarde.jpg";
    document.body.style.background = '#b9846f'
  }else{
    //Boa noite!!
    img.src = "imagens/noite.jpg";
    document.body.style.background = '#515154'
  }
}