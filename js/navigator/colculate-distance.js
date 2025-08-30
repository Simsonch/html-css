// @ts-nocheck
// Текущее местоположение (например, Москва)
    const addressLat = 55.7558;
    const addressLong = 37.6173;
    
    // Точка назначения (например, Санкт-Петербург)
    const positionLat = 59.9343;
    const positionLong = 30.3351;
    function calculateDistance(addressLat, addressLong, positionLat, positionLong) {
        // Расчет расстояния
    const DEGREE_TO_KM = 111.32;
    
    // Вычисляем разницу в координатах
        const deltaLat = (positionLat - addressLat) * DEGREE_TO_KM;;
        const deltaLon = (positionLong - addressLong) * DEGREE_TO_KM * Math.cos((addressLat + positionLat) * Math.PI / 360);
    
    // Вычисляем расстояние по теореме Пифагора (диагональ прямоугольника)
        return Math.sqrt(deltaLat * deltaLat + deltaLon * deltaLon);
    }
    
    const distance = calculateDistance(addressLat, addressLong, positionLat, positionLong);
    
    // Вывод результата
    console.log(`Расстояние до точки назначения: ${distance.toFixed(2)} км`);
    