function groupBy(array, fn) {

    let object = {};

    array.forEach(element => {
        let objectProperty = fn(element);
        if (object[objectProperty] == undefined) {
            object[objectProperty] = [];
            object[objectProperty].push(element);
        }else {
            object[objectProperty].push(element);
        }



    });
    return object;
}


module.exports = { groupBy };