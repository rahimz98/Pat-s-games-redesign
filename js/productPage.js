function openCart() {
    console.log("open menu")
    document.getElementById("cartBar").style.width = "20rem";

}

function closeCart() {
    document.getElementById("cartBar").style.width = "0";
    console.log("close cart")
}