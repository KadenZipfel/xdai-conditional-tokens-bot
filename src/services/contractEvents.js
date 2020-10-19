const conditionalTokensContractAbi = [{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"collateralToken","type":"address"},{"name":"parentCollectionId","type":"bytes32"},{"name":"conditionId","type":"bytes32"},{"name":"indexSets","type":"uint256[]"}],"name":"redeemPositions","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"payoutNumerators","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"ids","type":"uint256[]"},{"name":"values","type":"uint256[]"},{"name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"collateralToken","type":"address"},{"name":"collectionId","type":"bytes32"}],"name":"getPositionId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"owners","type":"address[]"},{"name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"collateralToken","type":"address"},{"name":"parentCollectionId","type":"bytes32"},{"name":"conditionId","type":"bytes32"},{"name":"partition","type":"uint256[]"},{"name":"amount","type":"uint256"}],"name":"splitPosition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"oracle","type":"address"},{"name":"questionId","type":"bytes32"},{"name":"outcomeSlotCount","type":"uint256"}],"name":"getConditionId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"parentCollectionId","type":"bytes32"},{"name":"conditionId","type":"bytes32"},{"name":"indexSet","type":"uint256"}],"name":"getCollectionId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"collateralToken","type":"address"},{"name":"parentCollectionId","type":"bytes32"},{"name":"conditionId","type":"bytes32"},{"name":"partition","type":"uint256[]"},{"name":"amount","type":"uint256"}],"name":"mergePositions","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"questionId","type":"bytes32"},{"name":"payouts","type":"uint256[]"}],"name":"reportPayouts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"conditionId","type":"bytes32"}],"name":"getOutcomeSlotCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"oracle","type":"address"},{"name":"questionId","type":"bytes32"},{"name":"outcomeSlotCount","type":"uint256"}],"name":"prepareCondition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"payoutDenominator","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"id","type":"uint256"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"conditionId","type":"bytes32"},{"indexed":true,"name":"oracle","type":"address"},{"indexed":true,"name":"questionId","type":"bytes32"},{"indexed":false,"name":"outcomeSlotCount","type":"uint256"}],"name":"ConditionPreparation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"conditionId","type":"bytes32"},{"indexed":true,"name":"oracle","type":"address"},{"indexed":true,"name":"questionId","type":"bytes32"},{"indexed":false,"name":"outcomeSlotCount","type":"uint256"},{"indexed":false,"name":"payoutNumerators","type":"uint256[]"}],"name":"ConditionResolution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stakeholder","type":"address"},{"indexed":false,"name":"collateralToken","type":"address"},{"indexed":true,"name":"parentCollectionId","type":"bytes32"},{"indexed":true,"name":"conditionId","type":"bytes32"},{"indexed":false,"name":"partition","type":"uint256[]"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"PositionSplit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stakeholder","type":"address"},{"indexed":false,"name":"collateralToken","type":"address"},{"indexed":true,"name":"parentCollectionId","type":"bytes32"},{"indexed":true,"name":"conditionId","type":"bytes32"},{"indexed":false,"name":"partition","type":"uint256[]"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"PositionsMerge","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"redeemer","type":"address"},{"indexed":true,"name":"collateralToken","type":"address"},{"indexed":true,"name":"parentCollectionId","type":"bytes32"},{"indexed":false,"name":"conditionId","type":"bytes32"},{"indexed":false,"name":"indexSets","type":"uint256[]"},{"indexed":false,"name":"payout","type":"uint256"}],"name":"PayoutRedemption","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"id","type":"uint256"},{"indexed":false,"name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"operator","type":"address"},{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"ids","type":"uint256[]"},{"indexed":false,"name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"value","type":"string"},{"indexed":true,"name":"id","type":"uint256"}],"name":"URI","type":"event"}];
const fixedProductMarketMakerFactoryContractAbi = [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementationMaster","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"consData","type":"bytes"}],"name":"cloneConstructor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"saltNonce","type":"uint256"},{"name":"conditionalTokens","type":"address"},{"name":"collateralToken","type":"address"},{"name":"conditionIds","type":"bytes32[]"},{"name":"fee","type":"uint256"},{"name":"initialFunds","type":"uint256"},{"name":"distributionHint","type":"uint256[]"}],"name":"create2FixedProductMarketMaker","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"},{"name":"from","type":"address"},{"name":"ids","type":"uint256[]"},{"name":"values","type":"uint256[]"},{"name":"data","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"operator","type":"address"},{"name":"from","type":"address"},{"name":"id","type":"uint256"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"onERC1155Received","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"fixedProductMarketMaker","type":"address"},{"indexed":false,"name":"conditionalTokens","type":"address"},{"indexed":false,"name":"collateralToken","type":"address"},{"indexed":false,"name":"conditionIds","type":"bytes32[]"},{"indexed":false,"name":"fee","type":"uint256"}],"name":"FixedProductMarketMakerCreation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"funder","type":"address"},{"indexed":false,"name":"amountsAdded","type":"uint256[]"},{"indexed":false,"name":"sharesMinted","type":"uint256"}],"name":"FPMMFundingAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"funder","type":"address"},{"indexed":false,"name":"amountsRemoved","type":"uint256[]"},{"indexed":false,"name":"collateralRemovedFromFeePool","type":"uint256"},{"indexed":false,"name":"sharesBurnt","type":"uint256"}],"name":"FPMMFundingRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"buyer","type":"address"},{"indexed":false,"name":"investmentAmount","type":"uint256"},{"indexed":false,"name":"feeAmount","type":"uint256"},{"indexed":true,"name":"outcomeIndex","type":"uint256"},{"indexed":false,"name":"outcomeTokensBought","type":"uint256"}],"name":"FPMMBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"seller","type":"address"},{"indexed":false,"name":"returnAmount","type":"uint256"},{"indexed":false,"name":"feeAmount","type":"uint256"},{"indexed":true,"name":"outcomeIndex","type":"uint256"},{"indexed":false,"name":"outcomeTokensSold","type":"uint256"}],"name":"FPMMSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"target","type":"address"},{"indexed":false,"name":"clone","type":"address"}],"name":"CloneCreated","type":"event"}]

/**
 * Returns a `ConditonalTokens` contract instance from a given web3 instance.
 * @param  {} web3 the web3 instance.
 */
module.exports.getconditionalTokensContract = (web3) => { 
    return new web3.eth.Contract(conditionalTokensContractAbi, process.env.CT_ADDRESS);
}

/**
 * Returns a `FixedProductMarketMakerFactory` contract instance from a given web3 instance.
 * @param  {} web3 the web3 instance.
 */
module.exports.getFixedProductionMarketMakerFactoryContract = (web3) => {
    return new web3.eth.Contract(fixedProductMarketMakerFactoryContractAbi, process.env.FIXED_PRODUCT_MM_FACTORY_ADDRESS);
}