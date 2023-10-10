fs = require('fs');
let url = require('url');
let addr = 'https://trainings.internshala.com/learn/back-end-web-development-fs-specialization/screen/35782'; let result = url.parse(addr,true);
let student = result.query;
console.log(`Student ID: ${student.id}`);
console.log(`Student name: ${student.name}`);