//keyBy
function keyBy(array, fn) {
    let res = {};
    for (let item of array) {
        res[fn(item)] = item;
    };
    return res;
};
