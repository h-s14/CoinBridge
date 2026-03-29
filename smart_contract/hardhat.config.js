import "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import { defineConfig } from "hardhat/config";

export default defineConfig({
  solidity: {
    version: "0.8.11",
  },
  networks: {
    sepolia: {
      type: "http",
      chainType: "l1",
      url: "https://eth-sepolia.g.alchemy.com/v2/6AMOD5PtY_8c7vA8KdCxnoo9-x1_ywRp",
      // Set SEPOLIA_PRIVATE_KEY env var before deploying
      accounts: process.env.SEPOLIA_PRIVATE_KEY ? [process.env.SEPOLIA_PRIVATE_KEY] : [],
    },
  },
});
