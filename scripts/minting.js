require("dotenv").config()
const NETWORK = process.env.NETWORK
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PUBLIC_KEY = process.env.PUBLIC_KEY
const ALCHEMY_API_KEY_TEST = process.env.ALCHEMY_API_KEY_TEST
const ethers = require('ethers');

const contract = require("../artifacts/contracts/PolyNFT.sol/PolyERC721.json")

const { polyerc721Address } = require('../config');
const polyerc721address = polyerc721Address;

const provider = new ethers.providers.AlchemyProvider({
    name: NETWORK,
    chainId: 80001
}, ALCHEMY_API_KEY_TEST);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const nftContract = new ethers.Contract(polyerc721Address, contract.abi, wallet);


const mintNFT = async (tokenURI, jsonnumber) => {
    await nftContract.overallmint(PUBLIC_KEY, tokenURI,jsonnumber);
    return tokenURI
}


async function main () {
    let jsonnumber = 95;
    console.log(jsonnumber);
    const baseIPFSHash = `https://gateway.pinata.cloud/ipfs/QmdKJiUFkkqGXUCKWz3R31aFFSD1srCoK9QEoMV3bdva6j/`;
    await mintNFT(baseIPFSHash, jsonnumber);
}

main();
