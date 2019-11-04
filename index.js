// Code your solution here
function findMatching(array, search){
    return array.filter(element => element.toLowerCase() === search.toLowerCase());
}

function fuzzyMatch(array, search){
    return array.filter(possibleMatch => possibleMatch.toLowerCase().indexOf(search.toLowerCase())=== 0);
}

function matchName(array, search){
    return array.filter(record => record.name === search);
}