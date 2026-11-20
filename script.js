
// =====================================
// NIRUTH BIRTHDAY WEBSITE
// JAVASCRIPT
// =====================================


//
// ==========================================
// NIRUTH'S BIRTHDAY WEBSITE
// JAVASCRIPT
// ==========================================


// 1. SCREEN NAVIGATION

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    selectedScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// 2. LOGIN VERIFICATION
// ==========================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("answer1").value.trim().toLowerCase();

    const profession = document.getElementById("answer2").value.trim().toLowerCase();

    const friend = document.getElementById("answer3").value.trim().toLowerCase();

    const correctName = "niruth";
    const correctProfession = "doctor";
    const correctFriend = "sanket";

    if (
        name === correctName &&
        profession === correctProfession &&
        friend === correctFriend
    ) {

        showScreen("welcomeScreen");

        celebrate();

    }

    else {

        document.getElementById("errorMessage").textContent =
            "WRONG ANSWER! 😂 Are you really Dr. Niruth? Try again!";

    }

});


// ==========================================
// 3. YES / NO INTERACTION
// ==========================================

const noButton = document.getElementById("noButton");

const noMessage = document.getElementById("noMessage");

let noCount = 0;

const funnyReplies = [
    "Seriously bro? I worked so hard! 😭",
    "Doctor, are you suffering from memory loss? 💀",
    "Your birthday surprise is waiting! Click YES 😂",
    "NO is not an option, Mr. Niruth! 🤣",
    "Fine! But I'm still making you celebrate! ❤️"
];

noButton.addEventListener("click", function() {

    noMessage.textContent =
        funnyReplies[noCount % funnyReplies.length];

    noCount++;

    // Make the NO button move playfully
    noButton.style.transform =
        "translate(" + (Math.random() * 80 - 40) + "px, " +
        (Math.random() * 40 - 20) + "px)";

});


// ==========================================
// 4. ALL NAVIGATION BUTTONS
// ==========================================

const navigationButtons = document.querySelectorAll("[data-go]");

navigationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const destination = button.getAttribute("data-go");

        showScreen(destination);

        // Extra celebration when final page opens
        if (destination === "birthdayScreen") {
            celebrate();
        }

    });

});


// ==========================================
// 5. BIRTHDAY CAKE INTERACTION
// ==========================================

const blowButton = document.getElementById("blowButton");

const cakeEmoji = document.getElementById("cakeEmoji");

const cakeMessage = document.getElementById("cakeMessage");

const birthdayButton = document.getElementById("birthdayButton");

let candleBlown = false;

blowButton.addEventListener("click", function() {

    if (candleBlown) {
        return;
    }

    candleBlown = true;

    // Change cake appearance
    cakeEmoji.textContent = "🍰";

    cakeMessage.textContent =
        "WISH GRANTED! 🎉 May all your dreams come true!";

    blowButton.textContent = "CANDLES BLOWN! ❤️";

    blowButton.disabled = true;

    blowButton.style.opacity = "0.6";

    // Show next surprise
    birthdayButton.classList.remove("hidden");

    celebrate();

});


// ==========================================
// 6. CONFETTI CELEBRATION
// ==========================================

function celebrate() {

    const colors = [
        "#e98252",
        "#f5c46b",
        "#f7a9b4",
        "#9bcbdc",
        "#ffffff"
    ];

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.width = "9px";

        confetti.style.height = "9px";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-15px";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.borderRadius = "3px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        confetti.style.transition =
            "transform 3s ease-in, opacity 3s ease-in";

        document.body.appendChild(confetti);

        setTimeout(function() {

            confetti.style.transform =
                "translate(" +
                (Math.random() * 200 - 100) +
                "px, 110vh) rotate(720deg)";

            confetti.style.opacity = "0";

        }, 50);

        setTimeout(function() {

            confetti.remove();

        }, 3100);

    }

}


// ==========================================
// 7. FINAL LETTER
// ==========================================

console.log("NIRUTH BIRTHDAY WEBSITE LOADED SUCCESSFULLY!");

console.log("WARNING: One doctor is getting older! 💀");

