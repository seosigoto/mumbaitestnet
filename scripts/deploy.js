
const hre = require("hardhat");
const fs = require('fs');

async function main() {    

  const POLYERC721 = await hre.ethers.getContractFactory("PolyERC721", { });
  const polyerc721 = await POLYERC721.deploy();
  await polyerc721.deployed();

  console.log("polyerc721 deployed to:", polyerc721.address);

  let config = `
  module.exports = {   
    polyerc721Address: "${polyerc721.address}"
  }`

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
