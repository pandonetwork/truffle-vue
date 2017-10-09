var Users = artifacts.require("./Users.sol");

module.exports = function(deployer) {
  deployer.deploy(Users);
};
