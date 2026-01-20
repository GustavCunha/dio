export function generatePass() {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()-_=+[]{}<>?';

    const allChars = upper + lower + numbers + special;

    let password = '';

    // Garante pelo menos um de cada tipo
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];

    // Completa até 8 caracteres
    while (password.length < 8) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Embaralha a senha para não ficar previsível
    password = password
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');

    return password;
}
