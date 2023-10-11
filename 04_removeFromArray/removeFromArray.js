const removeFromArray = function(array_input, ...extras) {
    for (vals in extras){
        let element_location = array_input.indexOf(vals)
        if(element_location != -1){
            array_input.array.splice(location, 1);
        }
    }

    return array_input;

};

// Do not edit below this line
module.exports = removeFromArray;
