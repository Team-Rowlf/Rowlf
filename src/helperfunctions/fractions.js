export const decimalToFraction = (num) => {
    let numString = num.toString();
    if (numString.includes('.')) {
        let array = numString.split('.');
        if (array[1].length === 1) {
            array[1] += '0'
        }
        // checking for 8ths here; not elegant, but side effect of rounding to 2 decimal places in database
        // could always go back and change that; don't necessarily need to round if trying to convert to fractions
        // that said, may screw up with this logic since it's based on 2 decimals
        if ((array[1] === '13') || (array[1] === '38') || (array[1] === '63') || (array[1] === '88')) {
            array[1] = Number(array[1]) - .5;
            let numerator = array[1] / 12.5;
            return (array[0] !== '0' ? array[0] + ` ${numerator}/8` : `${numerator}/8`)
        }
        let divideHundred = 100 / Number(array[1]);
        // not precise check, but good enough approximation
        let denom = divideHundred;
        for (let i = 1; i < 16; i ++){
            if (((divideHundred * i) % 1 < (1/16)) || Math.abs(((divideHundred * i) % 1) - 1) < (1/16)) {
                if (Number(array[1]) <= 50) {
                    denom = Math.round(divideHundred)
                } else {
                    denom = Math.round(100/(Number(array[1])/i))
                } 
                return array[0] !== '0' ? array[0] + ` ${i}/${denom}` : `${i}/${denom}`
            }
        }
        }
    else {
        return num;
    }
}

