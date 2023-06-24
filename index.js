const { ethers } = require("ethers")

const provider = ethers.providers.getDefaultProvider('sepolia')

const storeContractAddress = '0x5c9a271f51e3F9854b3D079A5b731d4c865FA18D'

const myPrivateKey = ''
const signer =  new ethers.Wallet(myPrivateKey, provider)

const storeContratABI = [
    {
        "inputs": [],
        "name": "retrieve",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "num",
                "type": "uint256"
            }
        ],
        "name": "store",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const blockchainReads = 'blockchainReads'
const constractReads = 'constractReads'
const constractWrites = 'constractWrites'

const main = ()=> {
   const op = constractReads
        switch(op) {
            case 'blockchainReads': 
                blockchainReadsFunc()
                break;
            case 'constractReads' : 
                constractReadsFunc()
                break;
            case 'constractWrites' : 
                constractWritesFunc()
                break;
        }

}

const blockchainReadsFunc = async () => {


    const blockNumber = await provider.getBlockNumber()
    console.log('blockNumber', blockNumber)

    const myBalance = await provider.getBalance('0xeEB5fce994AaF685D0D396484e7943ba5A06bfd6')
    console.log('myBalance', myBalance.toString(), ethers.utils.formatEther( myBalance.toString()) )
}

const constractReadsFunc = async () => {
 const storeContract = new ethers.Contract(storeContractAddress, storeContratABI, provider)
 const retrieveResponse = await storeContract.retrieve()
 console.log(retrieveResponse.toString())
}

const constractWritesFunc = async () => {
    
    const storeContract = new ethers.Contract(storeContractAddress, storeContratABI, signer)
    const storeTx = await storeContract.store(10)
    await storeTx.wait()
    console.log('done!')

}


main()