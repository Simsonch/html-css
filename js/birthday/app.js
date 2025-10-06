function checkBirthday(age) {
    const nowYear = new Date().getFullYear();

    return  nowYear - Date(age).getFullYear() >= 14;
}