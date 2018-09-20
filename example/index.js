const helper = require("../index");

const data =  [
    {
        "SalesTable": {
            "Estate": {
                "RecId": 1,
                "EstateName": "dsad 1"
            }
        }
    },
    {
        "SalesTable": {
            "Estate": {
                "RecId": 1,
                "EstateName": "dsad 1"
            }
        }
    }
];
const x = helper.filterData(data, ["SalesTable.Estate"])
console.log(JSON.stringify(x));
