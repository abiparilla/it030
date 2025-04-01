console.log("CSS + JavaScript is powerful!");

function changeTheme() {
    document.body.classList.toggle("dark-mode");
}

function calculateSkinType() {
    let answers = {
        dry: 0,
        oily: 0,
        normal: 0,
        combination: 0,
        sensitive: 0
    };

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
            break;
        case "oily":
            resultText = "Your skin type is Oily Skin. Your skin tends to be shiny. Use lightweight, oil-free products.";
            break;
        case "normal":
            resultText = "Your skin type is Normal Skin. Your skin is well-balanced. Keep up a regular skincare routine.";
            break;
        case "combination":
            resultText = "Your skin type is Combination Skin. Your skin has both dry and oily areas. Use a mix of products.";
            break;
        case "sensitive":
            resultText = "Your skin type is Sensitive Skin. Your skin is prone to irritation. Use gentle, fragrance-free products.";
            break;
    }

    document.getElementById("result").innerHTML = resultText;
}