export const rangeGenerator = (start = 0, end = 100, step = 1) => {
    function* generateRange() {
        let number = start - step;

        while (number < end - step) {
            number += step;
            yield number;
        }
    }

    return {
        [Symbol.iterator]: generateRange
    };
}