// Code your solution here

function findMatching(array, search){
   return array.filter(element => element.toLowerCase() === search.toLowerCase())
}

function fuzzyMatch(array, search){
    return array.filter(element => element.substring(0, search.length) === search) 
}

function matchName(array, search){
    return array.filter(element => element.name === search)
}