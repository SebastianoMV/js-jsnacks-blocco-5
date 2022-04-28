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

let pesoTotaleZucchine = 0;

for (let i=0; i<zucchine.length; i++){
  
  pesoTotaleZucchine += parseInt(zucchine[i].peso);
}

document.querySelector('h1').innerHTML = `Le zucchine pesano ${pesoTotaleZucchine} grammi`;