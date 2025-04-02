window.onload = function () {
    const userName = prompt("What is your name?");
    const colorChoice = prompt("Would you like to enable dark mode? Type 0 for Yes, 1 for No");

    // Greet the user
    if (userName) {
        alert(`Welcome, ${userName}!`);
    }

    // Enable dark mode if the user confirms
    if (colorChoice.toLowerCase() === "1") {
        document.body.style.backgroundColor = "#F4E9CD"; // Light background color
        document.body.style.color = "#031926"; // Dark text for contrast
    } else if (colorChoice.toLowerCase() === "0") {
        document.body.style.backgroundColor = "#031926"; // Dark background color
        document.body.style.color = "#F4E9CD"; // Light text for contrast
    } else {
        alert("Invalid choice. Default background will be applied.");
    }

    // Store user information
    const userInfo = { name: userName || "Guest", selectedColor: selectedColor };
    console.log("User Info:", userInfo);
};

function calculateSkinType() {
    let answers = {
        dry: 0,
        oily: 0,
        normal: 0,
        combination: 0
    };

    const colors = ["#ac7777", "#acab77", "#ac9277", "#77ac77"];

    // Get all selected answers
    const questions = document.querySelectorAll("input[type='radio']:checked");
    questions.forEach(q => {
        answers[q.value]++;
    });

    // Determine the highest score
    let skinType = Object.keys(answers).reduce((a, b) => (answers[a] > answers[b] ? a : b));

    // Display the result
    let resultText = "";
    switch (skinType) {
        case "dry":
            resultText = "Your skin type is Dry Skin. Your skin may feel tight and flaky. Use hydrating products.";
            backgroundColor = colors[0];
            break;
        case "oily":
            resultText = "Your skin type is Oily Skin. Your skin tends to be shiny. Use lightweight, oil-free products.";
            backgroundColor = colors[1];
            break;
        case "normal":
            resultText = "Your skin type is Normal Skin. Your skin is well-balanced. Keep up a regular skincare routine.";
            backgroundColor = colors[2];
            break;
        case "combination":
            resultText = "Your skin type is Combination Skin. Your skin has both dry and oily areas. Use a mix of products.";
            backgroundColor = colors[3];
            break;
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = resultText;
    resultElement.style.backgroundColor = backgroundColor; // Apply the background color
}