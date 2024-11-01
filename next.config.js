/** @type {import('next').NextConfig} */
// CHAIN_ID: 204,
// CHAIN_NAME: "opBNB",
// CHAIN_NETWORK: "opBNB",
// TOKEN: "BNB",
// SYMBOL: "tBNB",
// RPC: "https://opbnb-mainnet-rpc.bnbchain.org",
// URL_FAUCET: "https://opbnb-testnet-bridge.bnbchain.org/deposit",
// NFT_ADDRESS:'0xdd6E85bC17cF6851A9919A19E5f354Af0D312A6B',
// TOKEN_ADDRESS:'0x4710F75e172831D5D37B4a8506E43556e4b452cb',
// FAUCET_ADDRESS:'0x077035f863022d3dc9422b5d0c6Be62446034cCC',
// DAO_ADDRESS:'0x294041aC4ed65f7cba6B2182C2c10193fedDB9fE',
// EXPLORER_URL:'https://op-bnb-testnet-explorer-api.nodereal.io',
// HOST:'https://joygotchi-bnb.vercel.app'

// CHAIN_ID: 5611,
// CHAIN_NAME: "opBNB Testnet",
// CHAIN_NETWORK: "opBNB",
// TOKEN: "BNB",
// SYMBOL: "tBNB",
// RPC: "https://opbnb-testnet-rpc.bnbchain.org",
// URL_FAUCET: "https://opbnb-testnet-bridge.bnbchain.org/deposit",
// NFT_ADDRESS:'0xe966Dd4DfBc97F37470B8F9C26Fc83EFa15339E5',
// TOKEN_ADDRESS:'0x0B47EEB7290D413D2a51273cf7fd440c6f53E8e4',
// FAUCET_ADDRESS:'0x20449b21e2DDb4a1C335C2e65DD731482450558f',
// DAO_ADDRESS:'0x410EaA07644593d428568eA1B6b435e6f6Ad3C4D',
// EXPLORER_URL:'https://op-bnb-testnet-explorer-api.nodereal.io',
// HOST:'https://joygotchi-bnb.vercel.app'
const nextConfig = {
  reactStrictMode: true,
  env: {
        CHAIN_ID: 1891,
        CHAIN_NAME: "Lightlink Pegasus Testnet",
        CHAIN_NETWORK: "Pegasus",
        TOKEN: "ETHEREUM",
        SYMBOL: "ETH",
        RPC: "https://replicator.pegasus.lightlink.io/rpc/v1",
        URL_FAUCET: "https://faucet.pegasus.lightlink.io/",
        NFT_ADDRESS:'0x32f93910803B544C4c58240cc5E7B94678A4BD57',
        TOKEN_ADDRESS:'0xc9D2EDF36Ed48Cc3110c2D833bAc3420df12Ba5a',
        FAUCET_ADDRESS:'0xCC5D4595ec07e570d00ad7eF3213062071E5E00f',
        EXPLORER_URL:'https://pegasus.lightlink.io',
        HOST: 'https://joy-dragon-v2.vercel.app/'
  },
}
module.exports = nextConfig
