function openSearchBar() {
    console.log("search icon clicked");
    var icon = document.getElementById("searchBox");
    console.log(icon);
    console.log(icon.classList);
    icon.classList.replace("search-box-not-opened", "search-box");
    
}
