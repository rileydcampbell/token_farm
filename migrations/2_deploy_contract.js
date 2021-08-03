const TokenFarm = artifacts.require("TokenFarm");
const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");

module.exports = async function(deployer, network, accounts) {
    // Deploy dai token
    await deployer.deploy(DaiToken)
    const daiToken = await DaiToken.deployed()
    // Deploy dapp token
    await deployer.deploy(DappToken)
    const dappToken = await DappToken.deployed()
    // Deploy tokenFarm
    await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
    const tokenFarm = await TokenFarm.deployed()

    await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')
    await daiToken.transfer(accounts[1], '100000000000000000000')

};