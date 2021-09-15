// Add your functions here

function map(sourceArray, func) {
    let newArray = [];

    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(func(sourceArray[i]))       //
    }
    return newArray
}

function reduce(sourceArray, func, startingPoint) {
    let val = undefined
    
    if (startingPoint) {
        val = startingPoint;  
    } else {
    val = sourceArray[0];
    }

    for (let i =  startingPoint ? 0 : 1; i < sourceArray.length; i++) {
        val = func(sourceArray[i], val)
    }
    return val;
}
