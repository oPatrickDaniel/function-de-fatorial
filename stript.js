function fatorial(num) {
    var result = num;
    if (num === 0 || num === 1) {
        console.log(1)
        return 1;
    } else {
        while (num > 1) {
            num--;
            result *= num;
        }
        console.log(result)
        return result;
    }
}

fatorial(3)