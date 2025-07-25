function ElectricityBill(kWhUsed) {
  let amount = 0;

  if (kWhUsed <= 100) {
    amount = kWhUsed * 5;
  } else if (kWhUsed <= 300) {
    amount = (100 * 5) + ((kWhUsed - 100) * 8);
  } else {
    amount = (100 * 5) + (200 * 8) + ((kWhUsed - 300) * 10);
  }

  return amount.toFixed(2);
}

let kWh = 100
let bill = ElectricityBill(kWh);
console.log("Total kWh used: ₱"+ kWh.toFixed(2));
console.log("Total Electricity Bill: ₱" + bill);
