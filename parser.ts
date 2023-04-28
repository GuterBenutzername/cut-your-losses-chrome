class Assignment {
    constructor(public name: string, public grade: number, public weight: number, public future: Boolean) {
        this.name = name
        this.grade = grade;
        this.weight = weight;
        this.future = future;
    }
}

let unknown: [string, string, string];

function unknownToAssignment(unknown: [string,string,string]) {
    let assignment = new Assignment(unknown[0],0,0,false)
    switch (unknown[1]) {
        case "Major":
            assignment.weight = 60;
            break;
        case "Quiz":
            assignment.weight = 25;
            break;
        case "Daily":
            assignment.weight = 15;
            break;
        default:
            assignment.weight = 0;
            break;
    }
    if (unknown[2] === "Z" || unknown[2].trim() === "") {
        assignment.grade = 0
    } else if (unknown[2] === "-") {
        assignment.grade = 0
        assignment.future = true
    } else {
        assignment.grade = parseFloat(unknown[2])
    }
    return assignment;
}
