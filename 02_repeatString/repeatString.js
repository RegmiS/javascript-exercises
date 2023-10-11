const repeatString = function(string_repeat, rep_times) {
    if(rep_times < 0){
        return 'ERROR';
    }
    
    return string_repeat.repeat(rep_times);
};

// Do not edit below this line
module.exports = repeatString;
