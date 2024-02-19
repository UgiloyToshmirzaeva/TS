"use strict";
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
//FUNCTION TYPES
//////////////////////////////////////////////////////////////
// function getFullName (firstname, surname) {
//     if (typeof firstname !=='string'){
//         throw new Error('!!')
//     }
//     return`${firstname} ${surname}`
// }
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullNameArrow('John', 'Fox'));
//OBJECTS
///////////////////////////////////////////////////////////
let user = {
    firstname: 'Ugiloy',
    city: 'Tashkent',
    age: 99,
};
const getInfo = (userEntity) => {
    return `${userEntity.firstname} ${userEntity.age}`;
};
console.log(getInfo(user));
//ARRAYS
////////////////////////
const arrs = ['dev', 'devOps', 'testing'];
//const arr: any[] = ['dev', 'devOps', 1]
for (const arr of arrs) {
    console.log(arr.toLowerCase);
}
let result = arrs
    .filter(s => s !== 'devOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(result);
//array TUPLES
///////////////////////////////////////////////////////////
// const skill :(string| number)[] = [1, 'dev'] // union
// const skill: [number, string, string] = [1, 'dev', 'devOps'] //after pushing new element it cannot accept it as its types are for each of the element so we use union types!!
const skill = [1, 'dev', 'devOps'];
const id = skill[0];
// const fourth = skill[3]
skill.push('skill4');
console.log(skill[3]);
const Arr = [1, 'arrayelem', false, true, true, false]; // we use spread operator in such cases
//READONLY ARR
/////
//modification problems: 
// const c = 7;
// c = 9;
const massive = [1, 'dev'];
massive[0] = 3;
console.log(massive);
// readonly - модификатор, который говорит что нельзя модифицировать данное переменное.
const massive1 = [1, 'dev'];
// massive1[0] = 3
// console.log(massive1); // теперь изменть этот массив нельзя, он только для чтение. 
const arr1 = ['info', 'contacts']; // readonly for arrays
// arr1.push('duedj') //it cant be done as we use readonly
///ENUMS
///////////////////////////////////////////////////////////////
//Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const result1 = {
    message: 'платеж успешен',
    statusCode: StatusCode.SUCCESS
};
// 1 - успех, 2 - в процессе, 3 - отклонен
const action = (status) => {
    return;
};
action(StatusCode.SUCCESS);
action(1);
const res1 = 1 /* Roles.ADMIN */;
//UNION
/////////////////////////////////////////////////////
const logId = (id) => {
    console.log(id);
    // console.log(id.toLowerC); МЕТОДЫ ТУТ НЕ РАБОТАЮТ 
};
const logID = (ID) => {
    if (typeof ID === 'string') {
        console.log(ID.toUpperCase());
    }
    else if (typeof ID === 'number') {
        console.log(ID);
    }
    else {
        console.log(ID);
    }
}; // МЕТОДЫ ТУТ РАБОТАЮТ 
logId(78);
logId(true);
logId('hello');
logID(78);
logID(true);
logID('hello');
