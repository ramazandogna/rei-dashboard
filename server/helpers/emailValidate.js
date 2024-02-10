const validateEmail = (email) => {
    // Geçerli e-posta formatını kontrol etmek için bir regex kullanıyoruz
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Eğer e-posta formatı uygun değilse false döndürüyoruz
    if (!regex.test(email)) {
        return false;
    }

    // E-posta domain'inin belirli bir listeye dahil olup olmadığını kontrol edebiliriz
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

    // Eğer e-posta domain'i izin verilenler listesinde değilse false döndürüyoruz
    if (!allowedDomains.includes(domain)) {
        return false;
    }

    // Eğer e-posta hem geçerli bir formatta hem de izin verilen bir domain'e sahipse true döndürüyoruz
    return true;
}

module.exports = validateEmail;