export function isValidEmail(email) {
    const regex = /.+@.+\..{2,6}/i;
    return regex.test(email);
}

export function isValidPassword(password) {
    return password.length > 6;
}
