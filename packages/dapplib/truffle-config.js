require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain hole guess enter bone genuine'; 
let testAccounts = [
"0x47abf91afe584b715a6c1b81d314d54f706b615d69d007f59343c8e6fee5fb9c",
"0x5cd93563170d344e3f44c496aedd177a13de9d49297ec89e205d4ed222c14fbb",
"0x2d03cde40ef72aa68bfbfc50e96b042ee440ccdc38b8c1dc08baa631d551a197",
"0x82fc69584b581f7ee9b9bb0bb0d8262dbc9068e53d7251b432741b091a225467",
"0x117a3e97f61f4a1c7daab8ec22fd2aae36477708075909260de82249a22c5db1",
"0x75bb130cfa5dbe326d1a604a14dd99dd3065a4034ff18e5c84e92c0ef63d2c77",
"0x04675fb98fadc32080910ce0fe936d7d3886eaf3e22163604c319aa5d47c3c41",
"0x85eacf3344d6f8c5957048df0ee393c25da8df9f79f2db01d831fcce421b8157",
"0x7ab363a366f08bb32dd0eb9a5290dcc1a88ee7af9866390e49f77588f92766a4",
"0x48a6368a720019ad7da038276ee36b68ca4ab4948d628be9ef56a51571f25029"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

