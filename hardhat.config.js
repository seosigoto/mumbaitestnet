require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require('hardhat-contract-sizer');
require("hardhat-gas-reporter");
require('dotenv').config();

const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const ALCHEMY_API_KEY_TEST = process.env.ALCHEMY_API_KEY_TEST || "";
const ALCHEMY_API_KEY_MAIN = process.env.ALCHEMY_API_KEY_MAIN || "";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "01234567890123456789";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const POLYSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 3,
      gas: 8000000,
      gasMultiplier: 2,
      allowUnlimitedContractSize: true
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      gas: 8000000,
      gasMultiplier: 2,
      allowUnlimitedContractSize: true,
      accounts: [PRIVATE_KEY]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      gas: 8000000,
      gasMultiplier: 2,
      allowUnlimitedContractSize: true,
      accounts: [PRIVATE_KEY]
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY_TEST}`,
      accounts: [PRIVATE_KEY]
    },
    matic: {
      url: `polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY_MAIN}`,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: POLYSCAN_API_KEY
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 100,
    showTimeSpent: true,
  }
};