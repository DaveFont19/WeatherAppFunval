import Clear from "../assets/images/Clear.png";
import HeavyCloud from "../assets/images/HeavyCloud.png";
import HeavyRain from "../assets/images/HeavyRain.png";
import LightCloud from "../assets/images/Hail.png";
import LightRain from "../assets/images/LightRain.png";
import Shower from "../assets/images/Shower.png";
import Thunderstorm from "../assets/images/Thunderstorm.png"
import Snow from "../assets/images/Snow.png"

export function getImages(weather_condition){
    const image = {
        "01n" : Clear,
        "04n" : HeavyCloud,
        "09n" : HeavyRain,
        "02n" : LightCloud,
        "10n" : LightRain,
        "11n" : Thunderstorm,
        "13n" : Snow,
        "03n" : Shower
    }
    if(image[weather_condition]){
        return image[weather_condition];
    } else {
        return image ["01n"]
    }
}

export function exportImages(weather_condition){
    const images = {
        "01d" : Clear,
        "04d" : HeavyCloud,
        "09d" : HeavyRain,
        "02d" : LightCloud,
        "10d" : LightRain,
        "11d" : Thunderstorm,
        "13d" : Snow,
        "03d" : Shower
    }
    if(images[weather_condition]){
        return images[weather_condition];
    } else {
        return images ["01d"]
    }
}

export function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit.toFixed(2);
  }
  
  export function fahrenheitToCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius.toFixed(2);
  }