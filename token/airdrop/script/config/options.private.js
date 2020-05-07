const getDeployedAddress = require("./getDAODeployedAddress");
const singularContractAddress = require("../../contracts/build/contracts/SingularDTVToken.json").networks[1512051714758].address
module.exports = {
    oldContractAddress: singularContractAddress,
    //name of the truffle build file
    oldContractBuildFileName: './script/ERC20.json',

    newContractAddress: getDeployedAddress("DAOToken","private"),
    //name of the truffle build file
    newContractBuildFileName: './script/ERC20.json',
    mnemonic: 'myth like bonus scare over problem client lizard pioneer submit female collect',
    providerAddress: "ws://localhost:8545",
    resultFileName: "./results.json",
    eventName: "Transfer",
    oldDecimals: 18,
    newDecimals: 18,
    getPastEventsOptions: {
        //options - https://web3js.readthedocs.io/en/v1.2.6/web3-eth-contract.html#getpastevents
        fromBlock: 0,
        toBlock: "latest"
    }
}