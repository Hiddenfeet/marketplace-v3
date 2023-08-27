/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Cronos } from "@thirdweb-dev/chains";
export const NETWORK = Cronos;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x6421DAA7f1E3A42DDdF7347D2e68c16643Fd5708";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xf601FfEA6A76E83921750361E613d82286c4Ad9B";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://cronoscan.com/address/0xf601ffea6a76e83921750361e613d82286c4ad9b";
