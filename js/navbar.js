function openSearchBar() {
    console.log("search icon clicked");
    var icon = document.getElementById("searchBox");
    icon.style.display = "block";
    document.getElementById("searchIcon").href = "./pages/product-listing.html";
}

function openProductListing() {
    document.getElementById("searchIcon").href = "./pages/product-listing.html";
}
