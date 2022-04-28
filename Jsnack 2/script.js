const zucchine = [
  {
   varieta : 'nera',
   peso : '150',
   lunghezza : '15',
  },
  {
    varieta : 'romanesca',
    peso : '100',
    lunghezza : '16',
   },
   {
    varieta : 'fiorentina',
    peso : '200',
    lunghezza : '20',
   },
   {
    varieta : 'napoletana',
    peso : '220',
    lunghezza : '12',
   },
   {
    varieta : 'tonde',
    peso : '105',
    lunghezza : '8',
   },
   {
    varieta : 'trombetta',
    peso : '150',
    lunghezza : '15',
   },
   {
    varieta : 'gialla',
    peso : '200',
    lunghezza : '20',
   },
   {
    varieta : 'friulano',
    peso : '80',
    lunghezza : '17',
   },
   {
    varieta : 'crookneck',
    peso : '120',
    lunghezza : '18',
   },
   {
    varieta : 'bomacheneso',
    peso : '90',
    lunghezza : '22',
   }
];

const zucchineCorte = [];
const zucchineLunghe = [];


for(let index in zucchine){
  if (zucchine[index].lunghezza > 15) {
    zucchineLunghe.push(zucchine[index])
  }else{
    zucchineCorte.push(zucchine[index])
  }
}

let pesoZucchineCorte = 0;
let pesoZucchineLunghe = 0;

for (let i=0; i<zucchineCorte.length; i++){
  
  pesoZucchineCorte += parseInt(zucchineCorte[i].peso);
};

for (let i=0; i<zucchineLunghe.length; i++){
  
  pesoZucchineLunghe += parseInt(zucchineLunghe[i].peso);
}

document.querySelector('h1').innerHTML = `Le zucchine corte pesano ${pesoZucchineCorte} grammi mentre quelle lunghe pesano ${pesoZucchineLunghe} grammi`;