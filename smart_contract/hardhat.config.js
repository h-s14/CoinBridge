require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.11",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/6AMOD5PtY_8c7vA8KdCxnoo9-x1_ywRp",
      accounts: [
        "fde09cd6f2f1ed20d604df0ddbd43901aa9a49a17ca8bd13d20860289b92d47f",
      ],
    },
  },
};
