//Shuffles array (puts it in random order)
export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
}


export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
export function range(min, max) {

    const arr = [];

    for (let i = min; i <= max; i++) {
        arr.push(i)
    }

    return arr;

}

export function generateWrongAnswers(num) {

    let nums;

    if (num < 4) {
        nums = range(num + 1, num + 8)
    } else {
        nums = [...range(num - 4, num - 1), ...range(num + 1, num + 10)];
    }

    shuffle(nums);

    return nums.slice(0, 3);
}



