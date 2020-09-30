const helper = require("../index");

const data =  [
    {'test': 'super', 'xxx': 'one'}, {'test': 'script', 'zzz': 'two'}
];

const x = helper.filterData(data, ["test"])
console.log(JSON.stringify(x));
