function calculateSkinType() {
    // Potential answers that the user can get
    let answers = {
        dry: 0,
        oily: 0,
        combination: 0,
        normal: 0
    };
    // Allows the users to select one option in each question
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
            resultText = `Your skin type is Dry Skin. Your skin may feel tight and flaky. Use hydrating products. 
                          <a href="products.html#dry" style="color: blue; text-decoration: underline;">See recommended products for Dry Skin</a>`;
            break;
        case "oily":
            resultText = `Your skin type is Oily Skin. Your skin tends to be shiny. Use lightweight, oil-free products. 
                          <a href="products.html#oily" style="color: blue; text-decoration: underline;">See recommended products for Oily Skin</a>`;
            break;
        case "combination":
            resultText = `Your skin type is Combination Skin. Your skin has both dry and oily areas. Use a mix of products. 
                          <a href="products.html#combination" style="color: blue; text-decoration: underline;">See recommended products for Combination Skin</a>`;
            break;
        case "normal":
            resultText = `Your skin type is Normal Skin. Your skin is well-balanced. Keep up a regular skincare routine. 
                          <a href="products.html#normal" style="color: blue; text-decoration: underline;">See recommended products for Normal Skin</a>`;
            break;
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = resultText; // Display the result with the navigation link
}