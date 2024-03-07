function goToPage() {
    var selectElement = document.getElementById("selectMenu");
    var selectedValue = selectElement.value;
    if (selectedValue !== "") {
        window.location.href = selectedValue;
    }
}
