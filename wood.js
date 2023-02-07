function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChiarWood = 3; 
    const perTableWood = 10;
    const perBedWood =  50;


    const chairWood = chairQuantity * perBedWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;


    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;


}

const totalWood = woodCalculator(10, 5, 3);
console.log("total wood required: ", totalWood);
