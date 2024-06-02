const NFTarr=[];
function NFTobj(_name, _job, _id, _holding){
    const NFT={
        Name: _name,
        Job: _job,
        Id: _id,
        Holdings: _holding
    };
    NFTarr.push(NFT);
    console.log("NFT created:" + _name);
}
function NFTsInArr(){
    console.log("Listing Each NFTs:");
    NFTarr.forEach((nft, index) => {
        console.log('${index + 1}, Name: ${nft.Name}, Job: ${nft.Job}, ID: ${nft.Id}, Holdings: ${nft.Holdings}');
    });
}
function getTotalSupply(){
    console.log("Total number of NFTs: "+ NFTarr.length);
}
NFTobj("Alias","Accountant",31,1.75);
NFTobj("Bob","Clerk",35,4.89);
NFTobj("Charlie","Manager",42,3.15);
NFTsInArr();
getTotalSupply();