const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratinEl) => {
    ratinEl.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.currentTarget.dataset.value;
        event.currentTarget.classList.add("active");
    });
});

btnEl.addEventListener("click", () => {
    if (selectedRating) {
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
    `;
    } else {
        alert("Please select a rating before submitting!");
    }
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}