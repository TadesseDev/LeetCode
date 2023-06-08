/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    try{
        const valConst=obj.constructor
        const classConst=classFunction.prototype.constructor
        return valConst==classConst || valConst.prototype instanceof classConst
    }catch(e){
        // console.log(e)
       return false
    }
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */