import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const dotenv = require('dotenv');
dotenv.config();

const config: HardhatUserConfig = {
  networks: {
      hardhat: {},
      rinkeby: {
          url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
          accounts: [`${process.env.KEY}`]
      }
  },
  solidity: {
    compilers: [
        {
            version: "0.5.3",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 1000,
                },
            }
        },
        {
            version: "0.6.12",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 1000,
                },
            }
        }
    ]
  }
};

export default config;
