const bici = [
  {
   nome : 'nera',
   peso : '150',
  },
  {
    nome : 'romanesca',
    peso : '100',
   },
   {
    nome : 'fiorentina',
    peso : '200',
   },
   {
    nome : 'napoletana',
    peso : '220',
   },
   {
    nome : 'tonde',
    peso : '105',
   },
   {
    nome : 'trombetta',
    peso : '150',
   },
   {
    nome : 'gialla',
    peso : '200',
   }
];

let biciLeggera = bici[0];
console.log(biciLeggera);

for (let index in bici){
  const {nome,peso} = bici[index];
  console.log('peso',peso);
  if(biciLeggera.peso > peso){
    biciLeggera = bici[index];
  }
}

const {nome,peso} = biciLeggera;

document.querySelector('h1').innerHTML = `La bici più leggera è la ${nome} che pesa ${peso} grammi!`