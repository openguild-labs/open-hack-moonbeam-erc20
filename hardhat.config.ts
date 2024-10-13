/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-ignition-ethers");

const privateKey = "INSERT_PRIVATE_KEY";

module.exports = {
  solidity: "0.8.20",
  networks: {
    moonbase: {
      url: "https://rpc.api.moonbase.moonbeam.network",
      chainId: 1287, // 0x507 in hex,
      accounts: [privateKey],
    },
  },
};
