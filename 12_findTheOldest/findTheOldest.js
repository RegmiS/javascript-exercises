const findTheOldest = function(arr) {
    return oldest_person = arr.reduce((first, second) => {
        let firstAge = getAge(first.yearOfBirth, first.yearOfDeath);
        let secondAge = getAge(second.yearOfBirth, second.yearOfDeath);
        return firstAge < secondAge ? second: first;
    });
};

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
