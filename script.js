// Palindrome Checker

function palindrome(str) {
    str = str.toLowerCase();
    let strArr = str.split('');
    let filteredArr = []
    for (let i = 0; i < strArr.length; i++) {
        if (Boolean(strArr[i].match(/[\W_]/)) == false) {
            filteredArr.push(strArr[i]);
        }
    }
    str = filteredArr.join('');
    let strRev = filteredArr.reverse().join('');
    return str == strRev;
}

console.log(palindrome("A man, a plan, a canal. Panama"))