var Migrations = artifacts.require("./MainContract.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
