let  names = ["Mary","John","Emma"], heights = [180,165,170] // names[i] == heights[i] inter conect each others


function Sort(names, heights) {
    let people = [];
    for (let i = 0; i < names.length; i++) {
        people.push([names[i], heights[i]]);
    }
    
    // Step 2: Sort the people array by height in descending order
    people.sort((a, b) => b[1] - a[1]);
    
    // Step 3: Extract only the names from the sorted people array
    let sortedNames = [];
    for (let i = 0; i < people.length; i++) {
        sortedNames.push(people[i][0]);
    }
    
    // Step 4: Return the sorted names array
    return sortedNames;
}

 console.log(Sort(names, heights));

