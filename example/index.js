const jnplHelper = require("../lib/helper");
const config = require("./config");

const helper = new jnplHelper(config.baseConfig);

console.log('secret hash: ' + helper.secretHash);
