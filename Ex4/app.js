const arr = [1, 2, 2, 3, 4, 5, 5, 5, 6]
function countOccurrences(arr) {
    let occurrences = {}
    for (let i = 0; i < arr.length; i++) {
        if (occurrences[arr[i]]) {
            occurrences[arr[i]]++
        } else {
            occurrences[arr[i]] = 1
}
    } return occurrences
}console.log(countOccurrences(arr))