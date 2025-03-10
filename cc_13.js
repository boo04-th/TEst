// Task 2: Adding Employee Cards Dynamically
function createEmployeeCard(name, position) {
    const container = document.getElementById("employeeContainer");//Getting the main container to place employee cards

    const card = document.createElement("div");//Creating a new card for the employee
    card.classList.add("employee-card");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    const positionPara = document.createElement("p");//Adding the employee's position to the card
    positionPara.textContent = position;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    const removeButton = document.createElement("button");//Adding a button to remove the employee card
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    const editButton = document.createElement("button");//Adding a button to edit the employee card
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    removeButton.addEventListener("click", function () {
        container.removeChild(card);
    });

    editButton.addEventListener("click", function () {
        enableEditing(card);
    });

    //Adding elements with clear spacing
    buttonContainer.appendChild(removeButton);
    buttonContainer.appendChild(editButton);
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(buttonContainer);
    container.appendChild(card);
}

// Example usage
document.addEventListener("DOMContentLoaded", () => {
    createEmployeeCard('Jane Le', 'Software Engineer');
    createEmployeeCard('Helen Phan', 'Marketing Manager');
    createEmployeeCard('Kayla La', 'Head Coach');
});

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function updateEmployeeCards() {
    const employeeCards = document.querySelectorAll(".employee-card"); //Selecting all the employee cards on the page
    Array.from(employeeCards).forEach(card => {// Apply a highlighting style
        card.classList.add("highlight"); // Add a highlight class (ensure this is defined in CSS)
    });
}

// Example usage
updateEmployeeCards();

// Task 4 - Employee Card Removal with Event Bubbling
document.getElementById("employeeContainer").addEventListener("click", function (event) {
    if (event.target.closest('.employee-card')) { // When the employee card itself is clicked (excluding the remove button)
        console.log("An employee card was clicked!");
    }
});

function removeEmployeeCard(event) {
    event.stopPropagation();
    const card = event.target.closest('.employee-card');
    if (card) {
        card.remove(); // Using remove() directly to remove the card
    }
}