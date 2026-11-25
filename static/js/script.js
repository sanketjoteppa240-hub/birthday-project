
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchMessage = document.getElementById("searchMessage");

    function searchBusinesses() {

        const searchText = searchInput.value.trim().toLowerCase();

        const businesses = document.querySelectorAll(".business-card");

        let count = 0;

        businesses.forEach(function (business) {

            const businessDetails = business.innerText.toLowerCase();

            if (businessDetails.includes(searchText)) {
                business.style.display = "";
                count++;
            } else {
                business.style.display = "none";
            }

        });

        searchMessage.textContent = searchText === ""
            ? "Showing all businesses."
            : count + " matching business(es) found.";
    }

    searchButton.addEventListener("click", searchBusinesses);

    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchBusinesses();
        }
    });

});
