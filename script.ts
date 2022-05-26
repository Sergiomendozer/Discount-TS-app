// const greeting: string = "Typescripts test";
document.getElementById("type-s").innerHTML = "greeting";
// console.log(greeting);

// tsc script
// ts-node script
// document.getElementById("new_price").innerHTML = "";
// original_price: number,
//   discount_percentage: number

// original_price = parseFloat(document.getElementById("original_price").value);

// console.log(original_price);

function discount_calculation(): void {
  let original_price: number = parseFloat(
    document.getElementById("original_price").value
  );
  console.log(original_price);
  let discount_percentage = document.getElementById(
    "discount_percentage"
  ).value;
  console.log(discount_percentage);

  //   console.log(original_price);
  let decimal: number = (100 - discount_percentage) / 100;
  let you_save: number = original_price * (discount_percentage / 100);
  let new_price: number = original_price * decimal;
  //   console.log("New Price: $" + new_price);
  //   console.log("You Save: $" + you_save);
  document.getElementById("new_price").innerHTML = new_price;
  //   document.getElementById("monthly_payments").innerHTML = you_save;
}

// let original_price: number = 70;
// let discount_percentage: number = 20;
// discount_calculation(original_price, discount_percentage);
