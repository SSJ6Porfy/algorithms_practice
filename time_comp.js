
let array = [2,2,2,2,2];
let subArr = [2,2,2,2,2];
let count = 0;
for (let i = 0; i < array.length; i++) {
    const el = array[i];
    for (let j = 0; j < subArr.length; j++) {
        const ele = subArr[j];
        count += 1;
    }
}

console.log(count);