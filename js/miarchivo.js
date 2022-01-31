let contador = 0;
let palabra = prompt("Resuelve esta adivinanza: Blanca por dentro, verde por fuera. Si no sabes espera.");
while(palabra != "pera"){
    palabra = prompt("vuelve a intentarlo");
    contador +=1;
}
alert("Felicidades, resolviste la adivinanza. :)");