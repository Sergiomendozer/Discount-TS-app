// tsc script
// ts-node script
function discount_calculation() {
    var original_price = parseFloat(document.getElementById("original_price").value);
    console.log(original_price);
    var discount_percentage = document.getElementById("discount_percentage").value;
    var decimal = (100 - discount_percentage) / 100;
    var you_save = original_price * (discount_percentage / 100);
    var new_price = original_price * decimal;
    //   console.log("New Price: $" + new_price);
    //   console.log("You Save: $" + you_save);
    document.getElementById("new_price").innerHTML = new_price;
    document.getElementById("you_save").innerHTML = you_save;
}
