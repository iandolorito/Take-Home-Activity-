let Orders = [
  { item: "Shoes", price: 1500 },
  { item: "Bag", price: 1000 },
  { item: "Watch", price: 2000 },
  { item: "Socks", price: 300 },
  { item: "Cap", price: 250 }
];

function applyBestDiscount(Orders) {
  let total = Orders.reduce((sum, item) => sum + item.price, 0);
  let itemCount = Orders.length;

  
  let discount10 = total > 1000 ? total * 0.10 : 0;
  let discount20 = total >= 5000 ? total * 0.20 : 0;
  let discountFlat = itemCount >= 5 ? 100 : 0;

  
  let Discounts = [
    { name: "10% Discount", amount: discount10 },
    { name: "20% Discount", amount: discount20 },
    { name: "₱100 Flat Discount", amount: discountFlat },
    { name: "No Discount", amount: 0 }
  ];

  
  let best = Discounts.reduce((max, curr) => curr.amount > max.amount ? curr : max);

  let finalTotal = total - best.amount;

  return {
    originalTotal: total.toFixed(2),
    discountApplied: best.name,
    discountAmount: best.amount.toFixed(2),
    finalTotal: finalTotal.toFixed(2)
  };
}


let result = applyBestDiscount(Orders);
console.log("Original Total: ₱" + result.originalTotal);
console.log("Discount Applied: " + result.discountApplied + " (-₱" + result.discountAmount + ")");
console.log("Final Total: ₱" + result.finalTotal);
