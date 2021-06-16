const ReadlineSync=require("readline-sync");
const crypto = require('crypto');
const urlEncodeDecode=()=>{
  const option=parseInt(ReadlineSync.question('Enter 1 for url encode,and 2 for url decode\n'));
  if(option==1){
    const url=ReadlineSync.question('Enter the url to be encoded\n');
    console.clear();
    console.log(`Encoded url is: ${encodeURIComponent(url)}\n`);
  }
  else if(option==2){
    const url=ReadlineSync.question('Enter the url to be decoded\n');
    console.clear();
    console.log(`Decoded url is: ${decodeURIComponent(url)}\n`);
  }
  else{
    console.clear();
    console.log('Invalid choice\n');
  }
}
const base64EncodeDecode=()=>{
  const option= parseInt(ReadlineSync.question('Enter 1 for base64 encode, and 2 for url decode\n'));
  if(option==1){
    const url=ReadlineSync.question('Enter ther url to be base 64 encoded\n');
    console.clear();
    console.log(`Encoded url is: ${Buffer.from(url).toString('base64')}\n`);
  }
  else if(option==2){
    const url=ReadlineSync.question('Enter ther url to be base 64 decoded\n');
    console.clear();
    console.log(`Decoded url is: ${Buffer.from(url, 'base64').toString('ascii')}\n`);
  }
  else{
    console.clear();
    console.log('Invalid choice\n');
  }
}
const hash=(algo,str)=>{
  console.clear();
  console.log(`Encoded url is: ${crypto.createHash(algo).update(str).digest('hex')}\n`);
}
const stringHashing=()=>{
  const option= parseInt(ReadlineSync.question('Enter 1 for md5 hashing, 2 for sha1 hashing, 3 for sha-256 hashing and 4 for sha-512 hashing\n'));
  const str=ReadlineSync.question('Enter the string to be hashed\n');
  if(option==1){
    console.clear();
    const algo='md5';
    // console.log(`Encoded url is: ${crypto.createHash(algo).update(str).digest('hex')}\n`);
    hash(algo,str);
  }
  else if(option==2){
    console.clear();
    const algo='sha1';
    // console.log(`Encoded url is: ${crypto.createHash(algo).update(str).digest('hex')}\n`);
    hash(algo,str);
  }
  else if(option==3){
    console.clear();
    const algo='sha256';
    // console.log(`Encoded url is: ${crypto.createHash(algo).update(str).digest('hex')}\n`);
    hash(algo,str);
  }
  else if(option==4){
    console.clear();
    const algo='sha512';
    // console.log(`Encoded url is: ${crypto.createHash(algo).update(str).digest('hex')}\n`);
    hash(algo,str);
  }
  else{
    console.clear();
    console.log('Invalid choice\n');
  }
}
const toEpoch=(year,month,date,hours,minuites,seconds)=>{
  const dt=new Date(year,month,date,hours,minuites,seconds);
  const epoch=Math.floor(dt.getTime()/1000);
  console.clear();
  console.log(`Timestamp is:- ${epoch}`);
}
const humanToTimestamp=()=>{
  const year=ReadlineSync.question('Enter year:-\n');
  console.clear();
  const month=ReadlineSync.question('Enter month:-\n');
  console.clear();
  const date=ReadlineSync.question('Enter date:-\n');
  console.clear();
  const hours=ReadlineSync.question('Enter hours:-\n');
  console.clear();
  const minuites=ReadlineSync.question('Enter minuites:-\n');
  console.clear();
  const seconds=ReadlineSync.question('Enter seconds:-\n');
  console.clear();
  toEpoch(year,month-1,date,hours,minuites,seconds);

}
const epochConverters=()=>{
  const option= parseInt(ReadlineSync.question('Enter 1 for converting timestamp to human redable date,2 for converting human readable date to timestamp\n'));
  if(option==1){
    const timestamp=ReadlineSync.question('Enter the timestamp to be converted to human readable format(input should be of the form 1611041456)\n');
    const res=new Date(timestamp*1000);
    console.clear();
    console.log(`The human readable timestamp is:`,res.toLocaleString());
  }else if(option==2){
    console.clear();
    humanToTimestamp();
  }else{
    console.clear();
    console.log('Invalid option')
  }
	
}

const binDecHexOctConverter=()=>{
  const option=parseInt(ReadlineSync.question('Enter 1 for Binary to Decimal\nEnter 2 for Binary to Hex\nEnter 3 for Binary to Octal\nEnter 4 for Decimal to Binary\nEnter 5 for Decimal to Hex\nEnter 6 for Decimal to Octal\nEnter 7 for Octal to Binary\nEnter 8 for Octal to Decimal\nEnter 9 for Octal to Hex\nEnter 10 for Hex to Binary\nEnter 11 for Hex to Decimal \nEnter 12 for Hex to Octal\n'));
  const val=parseInt(readlineSync.question('Enter the value to be converted:-\n'));
  console.clear();
  if(option==1){
    console.clear();
    console.log(parseInt(val,2).toString(10));
  }else if(option==2){
    console.clear();
    console.log(parseInt(val,2).toString(16));
  }else if(option ==3){
    console.clear();
    console.log(parseInt(val,2).toString(8));
  }else if(option==4){
    console.clear();
    console.log(parseInt(val,10).toString(2));
  }else if(option==5){
    console.clear();
    console.log(parseInt(val,10).toString(16));
  }else if(option==6){
    console.clear();
    console.log(parseInt(val,10).toString(8));
  }else if(option==7){
    console.clear();
    console.log(parseInt(val,8).toString(2));
  }else if(option==8){
    console.clear();
    console.log(parseInt(val,8).toString(10));
  }else if(option==9){
    console.clear();
    console.log(parseInt(val,8).toString(16));
  }else if(option==10){
    console.clear();
    console.log(parseInt(val,16).toString(2));
  }else if(option==11){
    console.clear();
    console.log(parseInt(val,16).toString(10));
  }else if(option==12){
    console.clear();
    console.log(parseInt(val,16).toString(8));
  }else{
    console.clear();
    console.log('Invalid option');
  }

}

const rgbToHex=()=>{
  let r=parseInt(ReadlineSync.question('Enter value for red:-\n'));
  console.clear();
  let g=parseInt(ReadlineSync.question('Enter value for green:-\n'));console.clear();
  let b=parseInt(ReadlineSync.question('Enter value for blue:-\n'));console.clear();
  if(r>255 || g>255 || b>255){
    console.log('Value of rgb can\'t be greater than 255');
    return;
  }
  r=r.toString(16);
  g=g.toString(16);
  b=b.toString(16);
  if(r.length==1){
    r="0"+r;
  }
  if(g.length==1){
    g="0"+g;
  }
  if(b.length==1){
    b="0"+b;
  }
  const hex="#"+r+g+b;
  console.log(`Hex value is ${hex}\n`);
}
const hexToRgb=()=>{
  let hex=ReadlineSync.question('Enter hex value:-\n');
  if(hex.length!=6){
    console.clear();
    console.log('Hex length should be 6');
    return;
  }
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
console.clear();
  console.log(`r:${r} g:${g} b:${b}\n`);
}

const rgbhexConverter=()=>{
  const option=parseInt(ReadlineSync.question('Enter 1 for rgbToHex\nEnter 2 for hexToRgb\n'));console.clear()
  if(option==1){
    console.clear();
    rgbToHex();
  }else if(option==2){
    console.clear();
    hexToRgb();
  }else{
    console.clear();
    console.log('Invalid option');
  }
}

const unitConverter=()=>{
  const option=parseInt(ReadlineSync.question('1.Centimeter to Inch \n2.Inch to Centirmeter \n'));
  const val=parseInt(ReadlineSync.question('Enter the value to be converted\n'));
  console.clear();
  if(option==1){
    let res=(val*0.3937007874);
    console.clear();
    console.log(`Inch is= ${res}\n`);
    
  }
  if(option==2){
    let res=(val / 2.54);
    console.clear()
    console.log(`Centimeter is= ${res}\n`);
  }
}

  let flag=true;
  while(flag){
   const selectedUtilityOption=parseInt(ReadlineSync.question('Welcome to Utility Apps. Which utility function would you like to use?\n1. URL Encoder/Decoder\n2. Base64 Encoding/Decoding\n3. String hashing\n4. Epoch Converters\n5. Binary/Decimal/Hex/Octal Converters\n6. RGB ⇔ Hex\n7. Unit Converters \n8. Exit\n'));console.clear()
    
    switch(selectedUtilityOption){
    case 1:
      urlEncodeDecode();
      break;

    case 2:
      base64EncodeDecode();
      break;
    case 3:
      stringHashing();
      break;
    case 4:
      epochConverters();
      break;
    case 5:
      binDecHexOctConverter();
      break;
    case 6:
      rgbhexConverter();
      break;   
    case 7:
      unitConverter();
      break;
    case 8:
      console.log('Leaving the app');
      flag=false;
      break;
      exit();   
    default:
      console.log("Invalid input\n");
      break;
    }
  }
  