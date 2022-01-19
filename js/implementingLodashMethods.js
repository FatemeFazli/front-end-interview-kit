//keyBy
const keyBy = (array, fn) => {
    let res = {};
    for (const item of array) {
        res[fn(item)] = item;
    };
    return res;
};

//map
const map = (collection, fn) => {
    if (Array.isArray(collection)){
        return collection.map(fn);
    }
    else {
        return Object.values(collection).map(fn)
    }
}
