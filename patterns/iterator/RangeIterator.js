export function rangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let count = 0;

    const rangeIterator = {
        next() {
            let result;
            if (nextIndex < end) {
                result = {
                    value: nextIndex,
                    done: false
                };
                nextIndex += step;
                count++;
                return result;
            }
            return {
                value: count,
                done: true
            };
        }
    };

    return rangeIterator;
}