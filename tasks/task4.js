// Маємо масив об'єктів, де кожен об'єкт представляє автомобіль з інформацією про її бренд, модель і витрату палива. 
// Завдання — перевірити, чи всі машини в масиві мають витрату палива менше 6 л/100 км. 
// Якщо це так, то фільтруємо машини по бренду і повертаємо ті, що найбільш економні.

function getMostFuelEfficientCars(cars, brand) {
  
  const allFuelEfficient = cars.every(car => car.fuelConsumption < 6);
  
 
  if (allFuelEfficient) {
    return cars
      .filter(car => car.brand === brand)  
      .sort((a, b) => a.fuelConsumption - b.fuelConsumption);  
  } 
  
  
  return [];
}


module.exports = getMostFuelEfficientCars;
