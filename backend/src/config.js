require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Galactic Travelers Society";
const description = "We have traveled all over the galaxy and decided to make a pitstop at your wonderfully unique and obscure planet. We didn’t know what to expect, but we seem to blend in very well and don't even garner a second look. In fact, Earth feels quite a bit like home. We may even decide to stay a little while longer.";
const baseUri = "ipfs://bafybeidtnsvmdeqcdrdzxhba2r6fpnm27lhfir7rexi7srvfahzp3vd5qe/"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 750,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Clothes" },
      { name: "Glasses" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Clothes" },
      { name: "Accessories" },
      { name: "Glasses" },
      { name: "Hat" },

    ],
  },
  {
    growEditionSizeTo: 1500,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Clothes" },
      { name: "Glasses" },
      { name: "Hair" },


    ],
  },
  {
    growEditionSizeTo: 1750,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Clothes" },
      { name: "Accessories" },
      { name: "Hair" },
      { name: "Glasses" },

    ],
  },
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Clothes" },
      { name: "Accessories" },
      { name: "Hat" },

    ],
  },
  {
    growEditionSizeTo: 2250,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Clothes" },
      { name: "Hat" },

    ],
  },
  {
    growEditionSizeTo: 2400,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Clothes" },
      { name: "Accessories" },
      { name: "Hair" },

    ],
  },
  {
    growEditionSizeTo: 2650,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Clothes" },
      { name: "Hair" },
    ],
  },
  {
    growEditionSizeTo: 2750,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Clothes" },
    ],
  },
  {
    growEditionSizeTo: 2800,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Clothes" },
      { name: "Accessories" },
    ],
  },
  {
    growEditionSizeTo: 2900,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Hat" },
    ],
  },
  {
    growEditionSizeTo: 3000,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Hair" },
    ],
  },
  {
    growEditionSizeTo: 3100,
    layersOrder: [
      { name: "Body" },
      { name: "Eyes" },
      { name: "Glasses" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1100,
  smoothing: false,
};

const extraMetadata = {
 // external_url: "https://codecats.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Galactic Travelers Society';
const CONTRACT_SYMBOL = 'GTS';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x040A73789F7Cce15e7a26f45D140a36eB5b6f4D0';
const TREASURY_ADDRESS = '0x040A73789F7Cce15e7a26f45D140a36eB5b6f4D0';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = .001; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-04-17T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x040A73789F7Cce15e7a26f45D140a36eB5b6f4D0"; // Address that will receive the royalty
const BASE_URI = "ipfs://bafybeidtnsvmdeqcdrdzxhba2r6fpnm27lhfir7rexi7srvfahzp3vd5qe/"; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "REPLACE THIS"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
