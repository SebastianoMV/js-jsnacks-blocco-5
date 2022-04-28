function reverseString(params) {
  let splitString = params.split('');
  const reverseString = splitString.reverse();
  return reverseString.join('');
}

const parola = prompt('inserisci la parola da girare');
document.querySelector('h1').innerHTML = `Ecco la parola girata: ${reverseString(parola)}`;