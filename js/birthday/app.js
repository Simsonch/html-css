function checkBirthday(age) {
    const nowYear = new Date().getFullYear();

    return  nowYear - new Date(age).getFullYear() >= 14;
}