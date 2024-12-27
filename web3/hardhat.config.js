require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "flowevm",
  networks: {
    flowevm: {
      url: process.env.FLOW_URL,
      chainId: 545,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
