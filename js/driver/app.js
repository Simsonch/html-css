
function canDrive(hasLicence, age, isDrunk) {
    return hasLicence && age >= 18 && !isDrunk ? "может" : "не может"; 
}