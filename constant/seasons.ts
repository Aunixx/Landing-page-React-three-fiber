import sunny from "../public/weather/sunny-inactive.svg";
import cloud from "../public/weather/cloudy-inactive.svg";
import cloudWind from "../public/weather/foggy-inactive.svg";
import snow from "../public/weather/snowy-inactive.svg";
import wind from "../public/weather/windy-inactive.svg";
import activeWind from "../public/weather/windy-active.svg";
import activeSun from "../public/weather/sunny-active.svg";
import activeRain from "../public/weather/rainy-active.svg";
import activeCloud from "../public/weather/cloudy-active.svg";
import activeCloudWind from "../public/weather/foggy-active.svg";
import activeSnow from "../public/weather/snowy-active.svg";
import rain from "../public/weather/rainy-inactive.svg";

export const seasons: any = {
  Sunny: activeSun,
  Sunny_off: sunny,
  cloud: activeCloud,
  cloud_off: cloud,
  rainy: activeRain,
  rainy_off: rain,
  cloudWind: activeCloudWind,
  cloudWind_off: cloudWind,
  snow: activeSnow,
  snow_off: snow,
  Windy: activeWind,
  Windy_off: wind,
};

export const totalSeasons: any = [
  "Sunny",
  "cloud",
  "rainy",
  "cloudWind",
  "snow",
  "Windy",
];
