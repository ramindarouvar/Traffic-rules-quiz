import http from "./httpService";
import config from "./config.json";

export const getTheCityWeather = city => {
    return http.get(`${config.weatherapi}${city}`)
}