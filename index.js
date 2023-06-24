const { ethers } = require("ethers")

const main = ()=> {
   const op = 'balance'
        switch(op) {
            case 'balance' : 
            consultarBalance()
            case 'contratos' : 
            consultarBalance()
        }

}

const consultarBalance = async () => {
    const provider = ethers.providers.getDefaultProvider('sepolia')

    const blockNumber = await provider.getBlockNumber()
    console.log('blockNumber', blockNumber)

    const myBalance = await provider.getBalance('0xeEB5fce994AaF685D0D396484e7943ba5A06bfd6')
    console.log('myBalance', myBalance.toString(), ethers.utils.formatEther( myBalance.toString()) )
}

const consultarContratos = async () => {
    
}


main()