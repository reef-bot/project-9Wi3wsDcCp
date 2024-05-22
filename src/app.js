function openCrate() {
    const tokens = 500; // User's initial tokens
    const cost = 50; // Cost to open a crate
    const resultElement = document.getElementById('result');
    
    if (tokens < cost) {
        resultElement.textContent = 'Error: Not enough tokens to open a crate.';
    } else {
        tokens -= cost; // Deduct tokens
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
        let message;
        
        if (randomNumber <= 50) {
            message = 'Common reward!';
        } else if (randomNumber <= 80) {
            message = 'Uncommon reward!';
        } else if (randomNumber <= 95) {
            message = 'Rare reward!';
        } else {
            message = 'Epic reward!';
        }
        
        resultElement.textContent = `Opened crate. ${message} Tokens left: ${tokens}`;
    }
}