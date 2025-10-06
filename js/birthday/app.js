function checkBirthday(age) {
    const nowYear = new Date().getFullYear();
    console.log(nowYear);
    return  nowYear - Date(age).getFullYear() > 14;
    
}