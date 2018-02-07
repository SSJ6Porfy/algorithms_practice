function shuffleArray(arr) {
    let length = arr.length;

    arr.forEach((num, idx) => {
        let rand = idx + (Math.floor(Math.random() * length) - idx);

        let temp = arr[idx];

        let newL = arr[rand];

        arr[idx] = arr[rand];

        arr[rand] = temp;

    });

    return arr;
}

let arr = [1,2,3,4,5];

console.log(shuffleArray(arr));
