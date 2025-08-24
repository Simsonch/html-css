// Текущее местоположение (например, Москва)
    const currentLat = 55.7558;
    const currentLon = 37.6173;
    
    // Точка назначения (например, Санкт-Петербург)
    const destLat = 59.9343;
    const destLon = 30.3351;
    
    // Расчет расстояния
    const DEGREE_TO_KM = 111.32;
    
    // Вычисляем разницу в координатах
    const deltaLat = (currentLat - currentLon) * DEGREE_TO_KM;
    const deltaLon = (destLon - currentLon) * DEGREE_TO_KM * Math.cos((currentLat + destLat) * Math.PI / 360);
    
    // Вычисляем расстояние по теореме Пифагора (диагональ прямоугольника)
    const distance = Math.sqrt(deltaLat * deltaLat + deltaLon * deltaLon);
    
    // Вывод результата
    console.log(`Расстояние до точки назначения: ${distance.toFixed(2)} км`);