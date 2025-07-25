function SFare(TotalFare, riders) {
    let TotalDistance = riders.reduce((sum, rider) => sum + rider.distance, 0);
    let farePerKm= TotalFare/ TotalDistance; 


const FBreakdown= riders.map(rider => {
    let amount = rider.distance * farePerKm; 
    return {
        name: rider.name,
        distance: rider.distance,
        farePerKm: farePerKm.toFixed(2),
        amountOwed: amount.toFixed(2)
    };
});

return FBreakdown; 
}

let TotalFare = 1000;
let riders = [
    {name: "Jayep", distance: 20},
    {name: "Ian", distance: 40},
    {name: "Kem", distance: 55},
    {name: "Francis", distance: 50}

];

let result = SFare(TotalFare, riders);

console.log(`Total Fare: ${TotalFare}`);
console.log(`Fare per km: ${(TotalFare/ riders.reduce((sum, r) => sum + r.distance, 0)).toFixed(2)} \n`);

result.forEach(rider => {
    console.log (`${rider.name}: ${ rider.distance} km * ${rider.farePerKm} = ${rider.amountOwed}`);
});
