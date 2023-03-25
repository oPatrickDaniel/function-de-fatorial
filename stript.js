function fatorial(num) {
    let result = num;
    if (num < 0 || Number.isInteger(num) == false) {

        return "escreva um numero inteiro positivo";

    } else if (num === 0 || num === 1) {

        console.log(1)
        return 1;
    } else {

        while (num > 1) {

            num--;
            result *= num;
        }
        return result;
    }
}
