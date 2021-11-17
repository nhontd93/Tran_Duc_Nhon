function docsotien(so) {
let van=Math.floor(so/10000); 
ngan=Math.floor(so/1000%10); 
tram=Math.floor(so/100%10); 
chuc=Math.floor(so/10%10); 
donvi=so%10;

let doc = ['mot','hai','ba','bon','nam','sau','bay','tam','chin'];

let docvan = ''; docngan = ''; doctram = ''; docchuc = ''; docdv = '';

if(van)

      {chv=Math.floor(van/10); dv=van%10;
         let docchv = ''; docv = '';
         if(chv==1) docchv = 'muoi ';
         else if(chv>1) docchv = doc[chv-1] + ' muoi';
         if(chv>0&&dv==5) docv = ' lam';
         else if(dv) docv = doc[dv-1];
         docvan = docchv + docv + ' van '; 
      }

if((ngan==0)&&van&&(tram||chuc||donvi)) docngan = 'khong ngan ';

      else if(ngan) docngan = doc[ngan-1] + ' ngan ';



if((tram==0)&&(van||ngan)&&(chuc||donvi)) doctram = 'khong tram ';

      else if(tram) doctram = doc[tram-1] + ' tram ';



if((chuc==0)&&donvi&&(van||ngan||tram)) docchuc = 'linh ';

      else if(chuc==1) docchuc = ' muoi ';

         else if (chuc) docchuc = doc[chuc-1] + ' muoi ';

if(chuc>0&&donvi==5) docdv = 'lam';

      else if(donvi) docdv = doc[donvi-1];

docbangchu = docvan + docngan + doctram + docchuc + docdv;

return docbangchu;
}

console.log('123456',docsotien(parseInt(123456)));
console.log('50678',docsotien(parseInt(50678)));
console.log('6065',docsotien(parseInt(6065)));
console.log('5005',docsotien(parseInt(5005)));
console.log('150005',docsotien(parseInt(150005)));
console.log('105',docsotien(parseInt(105)));
console.log('10',docsotien(parseInt(10)));
console.log('5',docsotien(parseInt(5)));