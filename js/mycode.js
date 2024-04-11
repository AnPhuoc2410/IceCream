function CalTotal() {
    var total = 0;
    var items = document.querySelectorAll('input[type="checkbox"]:checked');
    let cream = document.getElementById("buy");
    var TotalBuy = document.getElementById("total");

    items.forEach(function(item) {
        var priceSpan = item.parentElement.nextElementSibling;
        var price = parseFloat(priceSpan.textContent.charAt(0));
        total += price;
    });

    items.forEach(function(item) {
        var itemName = item.parentElement.textContent;
        let li = document.createElement("li");
        li.textContent = itemName;
        cream.appendChild(li);
    });

    TotalBuy.textContent = "Total amount:" + total + "$";
    TotalBuy.style.backgroundColor = "orange";
}