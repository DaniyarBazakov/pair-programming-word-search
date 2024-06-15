const wordSearch = (letters, word) => { 
    let array = [];
    for (let i = 0; i < letters.length; i++) {
        array.push([]);
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (letter of letters) {
        for (let i = 0; i < letter.length; i++) {
            array[i].push(letter[i]);
        }
    }
    const verticalJoin = array.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false
}

module.exports = wordSearch


