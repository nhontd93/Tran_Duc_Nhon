function formatMoney(number) {
    let symBol = ["", "K", "M", "B"];
    let tier = Math.log10(number) / 3 | 0;
    // console.log('tier: ', tier);
    let symBols = symBol[tier];
    let scale = Math.pow(10, tier * 3);
    // console.log('scale: ', scale)
    let scaled = number / scale;
    // console.log('scaled: ', scaled)
    if (scaled <= 1 || tier == 0)
    return scaled + symBols;
    else
    return scaled.toFixed(2) + symBols;
}
console.log('1000000000, ',formatMoney(1000000000));
console.log('1000000, ',formatMoney(1000000));
console.log('1000, ',formatMoney(1000));
console.log('1123400000, ',formatMoney(1123400000));
console.log('1342222, ',formatMoney(1342222));
console.log('999, ',formatMoney(999));
console.log('10233, ',formatMoney(10233));