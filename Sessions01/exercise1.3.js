function countWords(character) {
if (character == character.toLowerCase())
{
  return 1;
}
else
{   
    let characters = character.split('');
    let num = 1;
    for (let i=1; i <= characters.length-1; i++) {
        if (characters[i] == characters[i].toUpperCase())
        num++;
    }
    return num;
}
}
console.log('motHaiBaBonNamSau, ',countWords('motHaiBaBonNamSau'));
console.log('mot, ',countWords('mot'));
console.log('motHaiBa, ',countWords('motHaiBa'));
console.log('motHaiBaBonNamSauBayTamChinMuoi, ',countWords('motHaiBaBonNamSauBayTamChinMuoi'));
console.log('motHaiBaBonNamSauBayTamChinMuoiMuoimotMuoihai, ',countWords('motHaiBaBonNamSauBayTamChinMuoiMuoimotMuoihai'));