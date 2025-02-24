const solve = (meal_cost, tip_percent, tax_percent) => {
  const finalTip = meal_cost * (tip_percent / 100);
  const finalTax = meal_cost * (tax_percent / 100);
  console.log(Math.round(meal_cost + finalTip + finalTax));
};
solve(12, 20, 8);
