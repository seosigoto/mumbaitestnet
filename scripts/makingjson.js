const fs = require("fs");
const prevMetadata = 100;
const imageIPFSHash = "https://gateway.pinata.cloud/ipfs/QmSw24cDfRJtRemM2GVY3bRNGsvA8aTuTPPSAcbNDKYpqp/";
console.log("...");
for (let i = 1; i <= prevMetadata ; i++) {
    const json = {
        description: "riendly OpenSea Creature that enjoys long swims in the ocean.",
        external_url: "https://openseacreatures.io/3", 
        image: imageIPFSHash+"image ("+i.toString()+").jpg",
        name: "Dave Starbelly",
        attributes: [
            {
                trait_type: "Rarity Score",
                value: "ranking"
            },
            {
                trait_type: " Pixels pink",
                value: "sumPink"
            },
            {
                trait_type: " Dark Grey Pixels",
                value: 'sumDarkGrey'
            },
            {
                trait_type: "Light Grey Pixels",
                value: "sumLightGrey"
            },
            {
                trait_type: " Ochre Pixels",
                value: 'sumOchre'
            },
            {
                trait_type: "Sand Pixels",
                value: 'sumSand'
            },  
            {
                display_type: "boost_number", 
                trait_type: "Aqua Power", 
                value: 40
            },
            {
               display_type: "boost_percentage", 
               trait_type: "Stamina Increase", 
               value: 10
            }, 
            {
               display_type: "number", 
               trait_type: "Generation", 
               value: 2
            }                                      
        ]
    };
    fs.writeFileSync(`./output/${i}.json`, JSON.stringify(json));
    console.log("...");
}