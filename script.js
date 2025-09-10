// Part 1: Javascripts Basics

// Variable declarations + conditionals
document.getElementById("check-age-btn").addEventListener
    ("click", function () {
        let age = prompt("enter your age:");
        age = Number(age);
        if (age >= 18) {
            document.getElementById("age-result").textContent =
                "you are an adult.";
        } else if (age > 0) {
            document.getElementById("age-result").textContent =
                "you are a minor.";
        } else {
            document.getElementById("age-result").textContent =
                "invalid input.";
        }
    });

// Part 2: Functions

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

document.getElementById("calc-total-btn").addEventListener
    ("click", function () {
        let total = calculateTotal(100, 3);
        document.getElementById("total-result").textContent =
            "Total = " + total;
    });

// Function 2: Toggle message visibilty
function toggleMessage() {
    let msg = document.getElementById("toggle-message");
    msg.classList.toggle("hidden");
}

document.getElementById("toggle-msg-btn").addEventListener("click", toggleMessage);

// Part 3: Loops

// Loop 1: Countdown
document.getElementById("count-btn").addEventListener
    ("click", function () {
        let list = document.getElementById("countdown-list");
        list.innerHTML = ""; // clear previous countdown

        for (let i = 5; i >= 1; i--) {
            let li = document.createElement("li");
            li.textContent = i; // Fixed: show countdown number
            list.appendChild(li);
        }
    });

// Loop 2: Array iteration
const names = ["Alice", "Bob", "Charlie", "Diana"];

document.getElementById("show-names-btn").addEventListener("click", function () {
    let list = document.getElementById("names-list");
    list.innerHTML = ""; // clear previous list

    names.forEach(function (name) {
        let li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
    });
});

// Part 4: DOM Manipulation

// DOM interaction 1: Change heading text
document.getElementById("change-text-btn").addEventListener("click", function () {
    document.querySelector("h1").textContent = " JavaScript is Awesome!";
});

// DOM interaction 2: Add new list item
document.getElementById("add-item-btn").addEventListener("click", function () {
    let list = document.getElementById("dynamic-list");
    let li = document.createElement("li");
    li.textContent = "New item " + (list.children.length + 1);
    list.appendChild(li);
})