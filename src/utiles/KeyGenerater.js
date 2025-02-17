

 export function generateRandomKey(length  = 16, useLetters = true, useDigits = true) {
    if (!useLetters && !useDigits) {
        throw new Error("At least one of useLetters or useDigits must be true.");
    }

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    let characters = '';

    if (useLetters) characters += letters;
    if (useDigits) characters += digits;

    let randomKey =  '';
    for (let i  = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomKey += characters[randomIndex];
    }

    return randomKey;
}

