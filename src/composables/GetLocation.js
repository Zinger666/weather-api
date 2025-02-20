import {searchTerm} from "@/enums/searchTerm.js";
import {ref} from "vue";

//`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=df33ab8ba04db41b08bd9ea415a3a2d4&q=${town}`
//?fields=city,lat,lon
export const checkWeather = ref({})

async function fetchWeather(path) {
        const weather = await fetch(
            path
        )
        if (!weather.ok) {
                throw new Error(`Response status: ${weather.status}`);
        } else {
                const data = await weather.json();
                console.log(data);
                searchTerm.name = data.name
                searchTerm.main = data.main
                searchTerm.weather = data.weather[0]
                searchTerm.query = null
                checkWeather.value = searchTerm.weather.main
        }
}

export const getLocation = async (lat, lon, town) => {
        try {
                await fetchWeather(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=df33ab8ba04db41b08bd9ea415a3a2d4&q=${town}`)
        } catch (error) {
                console.log(error)
                await fetchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=df33ab8ba04db41b08bd9ea415a3a2d4`)
        }
}