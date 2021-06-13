function openShipping() {
    document.getElementById("contact-container").style.display = "none";
    document.getElementById("shipping-container").style.display = "block";
    document.getElementById("payment-container").style.display = "none";
    document.getElementById("ShippingLI").className = "active";
    document.getElementById("PaymentLI").className = "not-active";
    document.getElementById("shippingCost").innerHTML = "-";
    document.getElementById("totalCost").innerHTML = "-";

}

function openContact() {
    document.getElementById("contact-container").style.display = "block";
    document.getElementById("shipping-container").style.display = "none";
    document.getElementById("payment-container").style.display = "none";
    document.getElementById("ShippingLI").className = "not-active";
}

function openPayment() {
    document.getElementById("contact-container").style.display = "none";
    document.getElementById("shipping-container").style.display = "none";
    document.getElementById("payment-container").style.display = "block";
    document.getElementById("PaymentLI").className = "active";
    document.getElementById("shippingCost").innerHTML = "10.00";
    document.getElementById("totalCost").innerHTML = "20.00";
}

function makePayment() {
    document.getElementById("alert").style.transition = "0.1s";
    document.getElementById("alert").style.display = "block";
    setTimeout(() => {
        location.href = "./../index.html";
    }, 2000);
}
