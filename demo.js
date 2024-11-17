let names = ['Gaju', 'raje', 'raju'], height = [184,170, 160];

function sortNames(names, height) {
    let people = [];
    for(let i = 0; i < names.length; i++) {
        people.push([names[i], height[i]]);
    }

    people.sort((a, b) => a[1] - b[1]);

    let sortName = [];
    for(let i = 0; i < people.length; i++) {
        sortName.push(people[i][0]);
    }
    return sortName;
}console.log(sortNames(names, height));
