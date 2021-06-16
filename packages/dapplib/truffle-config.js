require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note snow public gesture merry flock ghost'; 
let testAccounts = [
"0x40711fe298dcea0c84a8163d1f2b05bf62bc5dc842c4e69e99c313a05ee89e35",
"0x70136dd6f12976a834b65952cacd5ab27f2a65bd54b3513c1963795dca645fcf",
"0x77709ecffc88fb28763944de807ffcfbabd498e112f24cfdf4fdae11c50d12c2",
"0xfb0f34e65fe46fbb3d3a3753164fa9ef32b2f57837d220d30c44386686cdca20",
"0xb703a7ccd657ceb7d9ab023ab73d5c82890180aaa287c52584740ace67bad62f",
"0x13916640d32ce1e3e637fb43897e8c7acd357661e3bcb325495beb083390af97",
"0x43a7eda7e87d3a0ae80bfe1916390417df65376044815b8293b955e7ac1bd7b7",
"0xd30f8c436741fea8518659b2eeadceee9daab2c0e88e9f020e3fd3d79e8bab0c",
"0xc9b2569f2386c0ba3e9fb2174ae66c947fa601a444981e93244c1151bbd4491e",
"0xbd0a8f239914d1287549c28e6d49a5145cbc89fa1ac9b11379ac3673eb18d09a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

