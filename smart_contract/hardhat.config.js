require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.11",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/6AMOD5PtY_8c7vA8KdCxnoo9-x1_ywRp",
      accounts: [
        "//Enter the private address of the wallet you want to provide GAS from to deploy the contract",
      ],
    },
  },
};
