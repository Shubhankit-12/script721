const hre = require("hardhat");

async function main() {
  await hre.run("verify:verify", {
    //Deployed contract address
    address: "0x131D6FED3Db0d884Cb671F1a2b35964e9Cf83389",
    //Pass arguments as string and comma seprated values
    // constructorArguments: [],
    //Path of your main contract.
    contract: "contracts/Token721.sol:MAZI",
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//npx hardhat run --network rinkeby  scripts/verify.ts