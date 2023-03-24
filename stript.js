function fatorial(num) {
    let result = num;
    if (num === 0 || num === 1) {

        return 1;
    } else {
        while (num > 1) {

            num--;
            result *= num;
        }

        return result;
    }
}
