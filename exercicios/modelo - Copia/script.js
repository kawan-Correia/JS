let num = document.querySelector("#fnum")
let lista = document.querySelector("#flista")
let res = document.querySelector("#res")
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
      return true;
    } else {
      return false;
    }
} 

inputField.addEventListener("keyup", function (event) {
  // Verifica se a tecla pressionada é Enter (código 13)
  if (event.keyCode === 13) {
    // Executa a ação desejada (por exemplo, clicar no botão de confirmação)
    adicionar.click();
  }
});
 
function adicionar() {
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
        res.innerHTML=""
    } else {
        alert('Valor invalido ou ja encontrado na lista')
    }
        num.value = ""
        num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("Confira o valor digitado")
    } else  {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
             soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor) 
                menor = valores[pos]
        } 
        media = soma / tot
        res.innerHTML= ''
        res.innerHTML+= `<p> ao todo temos ${tot} numeros cadastrados </p>`
        res.innerHTML+= `<p> O maior valor foi ${maior}`
        res.innerHTML += `<p> O menor valor foi ${menor}`;
        res.innerHTML += `<p> A soma dos valores é ${soma}`;
        const truncatedNumber = Math.floor(media * 100) / 100; // Trunca para duas casas decimais
        res.innerHTML += `<p> A media é ${truncatedNumber.toFixed(2)}`;

        

    }
}
