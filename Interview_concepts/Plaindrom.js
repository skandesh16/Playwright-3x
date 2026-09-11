function isplaindrom (str) {
    const reversed = str.split('').reverse('').join('');
    return str === reversed;
}

console.log(isplaindrom('racecar'));
console.log(isplaindrom('westlae'));
