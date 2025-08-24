function getHello(lang) {
    switch (lang) {
        case "ru":
            return "Привет";
        case "en":
            return "Hello"
        case "es":
            return "Hola";
        case "fr":
            return "Bonjour";
        case "de":
            return "Hallo";
        default:
            return "Привет";
    }
}

console.log(getHello("de"));