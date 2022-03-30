// Palindrome Checker

function palindrome(str) {
    let strArr = str.split('');
    let filteredArr = []
    for (let i = 0; i < strArr.length; i++) {
        if (Boolean(strArr[i].match(/[\W_]/)) == false) {
            filteredArr.push(strArr[i]);
        }
    }
    console.log(filteredArr);
}

console.log(palindrome("2_A3*3#A2"))