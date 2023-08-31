import Clear from "../assets/images/Clear.png";
import HeavyCloud from "../assets/images/HeavyCloud.png";
import HeavyRain from "../assets/images/HeavyRain.png";
import LightCloud from "../assets/images/LightCloud.png";
import LightRain from "../assets/images/LightRain.png";
import Shower from "../assets/images/Shower.png";
import Thunderstorm from "../assets/images/Thunderstorm.png"
import Snow from "../assets/images/Snow.png"

export function getImages(weather){
    const image = {
        "01d" : Clear,
        "04d" : HeavyCloud,
        "09d" : HeavyRain,
        "02d" : LightCloud,
        "10d" : LightRain,
        "11d" : Thunderstorm,
        "13d" : Snow,
        "03d" : Shower,

        "01n" : Clear,
        "04n" : HeavyCloud,
        "09n" : HeavyRain,
        "02n" : LightCloud,
        "10n" : LightRain,
        "11n" : Thunderstorm,
        "13n" : Snow,
        "03n" : Shower
    }
    if(image[weather]){
        return image[weather];
    } else {
        return image ["01d"]
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
        "03d" : Shower,


        "01n" : Clear,
        "04n" : HeavyCloud,
        "09n" : HeavyRain,
        "02n" : LightCloud,
        "10n" : LightRain,
        "11n" : Thunderstorm,
        "13n" : Snow,
        "03n" : Shower

    }
    if(images[weather_condition]){
        return images[weather_condition];
    } else {
        return images ["01d"]
    }
}
