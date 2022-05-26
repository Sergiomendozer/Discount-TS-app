// const greeting: string = "Typescripts test";
// document.getElementById("type-s").innerHTML = greeting;
// console.log(greeting);

// tsc script
// ts-node script
function discount_calculation(
  original_price: number,
  discount_percentage: number
): void {
  //   console.log(original_price);
  let decimal: number = (100 - discount_percentage) / 100;
  let you_save: number = original_price * (discount_percentage / 100);
  let new_price: number = original_price * decimal;
  console.log("New Price: $" + new_price);
  console.log("You Save: $" + you_save);
}

// pic with arrows like loan sharks
let original_price: number = 70;
let discount_percentage: number = 20;
discount_calculation(original_price, discount_percentage);
