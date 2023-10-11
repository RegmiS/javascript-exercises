const reverseString = function(string_input) {
    let string_rev = "";
    
    for ( each_char of string_input){
        string_rev = each_char + string_rev;
    }

    return string_rev;

};

// Do not edit below this line
module.exports = reverseString;
