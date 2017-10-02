function additionner(a,b) {
    if(typeof(a) !== 'number' 
    || typeof(b) !== 'number') {
        throw new Error('Expect numbers as parameters');
    }
    return a+b;
}

function soustraire(a,b) {
    return a-b;
}