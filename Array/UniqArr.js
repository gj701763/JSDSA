let arr = [2, 4, 5, 4, 2, 5, 6,8];

function uniq(arr) {
        let duplicates = [];  // Track duplicate values
        let unique = [];      // Track unique values

        for (let i = 0; i < arr.length; i++) {
            if (!duplicates.includes(arr[i]) && !unique.includes(arr[i])) {
                unique.push(arr[i]);  // If not seen before, add to unique
            } else {
                // If it's already in unique, move it to duplicates
                unique = unique.filter(item => item !== arr[i]);
                duplicates.push(arr[i]);
            }
        }
        
        return unique;
}

console.log(uniq(arr)); // Output: [6]
