const Helper = require("../lib/helper");
const config = require("./config");

const helper = new Helper(config.baseConfig);

console.log('secret hash: ' + helper.secretHash);
