type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    /*
    while we have size in the original array, aplice the list with the window size and add it to the new arrea 
    */

    const newArray = []
    while(arr.length){
        newArray.push(arr.splice(0,size))
    }

    return newArray
};
