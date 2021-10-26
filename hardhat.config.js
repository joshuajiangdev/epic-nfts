require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/d0d7e8f59cc445898cc6c26f363d1f50',
      accounts: ['e93c4a29e60e894e5509c77e09f47a4ca380fd18671591f5a8cf34f4609dc78b'],
    },
  },
};