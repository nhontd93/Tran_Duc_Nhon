function getExtension(fileName){
let extension = fileName.split('.');
return extension[extension.length-1];
}
console.log('image.png, ',getExtension('image.png'));
console.log('Sound.mp3, ',getExtension('Sound.mp3'));
console.log('index.html, ',getExtension('index.html'));