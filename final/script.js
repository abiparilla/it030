function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === name) return decodeURIComponent(value);
    }
    return null;
    }
    let userName = getCookie('name');
    let userTheme = getCookie('theme');
    if (!userName || !userTheme) {
    userName = prompt("What's your name?");
    userTheme = prompt("Do you prefer dark or light theme?").toLowerCase();
    document.cookie = `name=${userName}; max-age=${60 * 60 * 24 * 7}; path=/`;
    document.cookie = `theme=${userTheme}; max-age=${60 * 60 * 24 * 7}; path=/`;
    }

    const welcome = document.getElementById("welcome-message");
    if (welcome && userName) {
    welcome.textContent = `Welcome back, ${userName}`;
    }

    if (userTheme === 'dark') {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#f1f1f1";
    } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#121212";
    }    

function calculateSkinType() {
    let answers = {
        dry: 0,
        oily: 0,
        combination: 0,
        normal: 0
    };
    const questions = document.querySelectorAll("input[type='radio']:checked");
    questions.forEach(q => {
        answers[q.value]++;
    });
    let skinType = Object.keys(answers).reduce((a, b) => (answers[a] > answers[b] ? a : b));

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
    resultElement.innerHTML = resultText;
}