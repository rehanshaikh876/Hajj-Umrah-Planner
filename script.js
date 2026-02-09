function searchContent() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    let noResults = document.getElementById('noResults');
    let found = false;

    cards.forEach(card => {
        let title = card.getAttribute('data-title');
        if (title.includes(input)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    noResults.style.display = found ? "none" : "block";
}