const helper = require("../lib/helper");
const config = require("./config");

const helpMe = new helper.jnplHelper(config.baseConfig);

console.log('secret hash: ' + helpMe.secretHash);
