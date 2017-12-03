
function isPalindrome(str) {

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[(str.length - 1) - i]) {
            return false;
        }
    }

    return true;
}

let str = 'abbcba';

// console.log(isPalindrome(str));


Array.prototype.myMap = (cb) => {
    let newArr = [];
    this.forEach(el => {
        newArr.push(cb(el));
    });
    return newArr;
};