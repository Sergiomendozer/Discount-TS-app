// tsc script
// ts-node script

function discount_calculation(): void {
  let original_price: number = parseFloat(
    document.getElementById("original_price").value
  );
  console.log(original_price);
  let discount_percentage = document.getElementById(
    "discount_percentage"
  ).value;
  let decimal: number = (100 - discount_percentage) / 100;
  let you_save: number = original_price * (discount_percentage / 100);
  let new_price: number = original_price * decimal;
  //   console.log("New Price: $" + new_price);
  //   console.log("You Save: $" + you_save);
  document.getElementById("new_price").innerHTML = new_price;
  document.getElementById("you_save").innerHTML = you_save;
}
