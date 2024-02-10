const emailValidate = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    if (!regex.test(email)) {
        return false;
    }
    const allowedDomains = [
        'gmail.com',
        'yahoo.com',
        'outlook.com',
        'hotmail.com',
        'icloud.com',
        'protonmail.com',
        'yandex.com',
        'mail.com',
    ];
    const domain = email.split('@')[1]; // E-posta adresinden domain'i alıyoruz
    if (!allowedDomains.includes(domain)) {
        return false;
    }
    return true;
}

module.exports = {emailValidate};