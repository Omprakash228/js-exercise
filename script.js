// 01 - Salary object
let salaries = {
    "John": 100,
    "Ann": 160,
    "Peter": 130
}

let salarySum = 0;
for(let key in salaries) {
    salarySum += salaries[key];
}

console.log(salarySum);

// 02 - multiplyNumeric 
function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] == "number") { 
            obj[key] *= 2;
        }
    }
}


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);

// 03 - checkMailId
function checkMailId(str) {
    let regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    return regex.test(str);
}

console.log(checkMailId("testString"));
console.log(checkMailId("test@example.com"));

// 04 - truncate if more than maxlength
function truncate(str, maxlength) {
    if(str.length > maxlength)
        str = `${str.substr(0, maxlength)}...`;
    return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

//05 - array functions
let styles = ["James", "Brennie"];
console.log(styles);

styles.push("Robert");
console.log(styles);

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Calvin";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Regal");
styles.unshift("Rose");
console.log(styles);


