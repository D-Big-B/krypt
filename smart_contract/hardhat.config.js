require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/XhmchfEPUJ-VQrBo_T_Jqa8vJlttLi54",
      accounts: [
        "be8e041839c3a7514752e1a3735d6fd433dff62ece58f01b7e220d37f8063688",
      ],
    },
  },
};
