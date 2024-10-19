function generatePassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/";
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    return password;
}

document.getElementById("generate").addEventListener("click", function() {
    const length = parseInt(document.getElementById("length").value);
    
    if (length > 0) {
        const password = generatePassword(length);
        document.getElementById("result").textContent = `Generated Password: ${password}`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid length.";
    }
});
