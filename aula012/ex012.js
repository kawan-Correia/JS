var exato = new Date()
var hora = exato.getHours()

console.log(`Agora são exatamente ${hora} horas`);

if (hora < 12) {
  console.log("Bom diaa!");
} else if (hora <= 18) {
  console.log("Boa tardee!");
} else {
  console.log("Boa noitee!");
}
