const BN = require("ethers").BigNumber;
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { token } from "../typechain-types/@openzeppelin/contracts";

const {
  time, // time  
  constants,
} = require("@openzeppelin/test-helpers");
const { factory } = require("typescript");
const ether = require("@openzeppelin/test-helpers/src/ether");

function sleep(ms : any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const [deployer] = await ethers.getSigners();
  const { chainId } = await ethers.provider.getNetwork();

  /**
   @dev const for deployed addresses
   */
  const testnet = {
        token : "0x131D6FED3Db0d884Cb671F1a2b35964e9Cf83389",
   }
  /**
 @dev Getting contracts for deployment via "ethers.getContractFactory" as we require ethers for deployment
 */
  let Token = await ethers.getContractFactory("MAZI");


  
  //  let token = await Token.deploy();
  // let  token = await _token.deployed();
   let token = await Token.attach(testnet.token);
  console.log("token",token.address);

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });