import {searchTerm} from "@/enums/searchTerm.js";

export const handleSearch = async () => {
    if (searchTerm.query !== '') {
        const res = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm.query}&limit=5&appid=df33ab8ba04db41b08bd9ea415a3a2d4`
        )
        const data = await res.json()
        searchTerm.results = data
        console.log(searchTerm.results)
    } else {
        searchTerm.results = null
    }
    if(searchTerm.isCurrentLocation === true) {
        const currentLocation = await fetch(
            "http://ip-api.com/json/?fields=192"
        )
        const data = await currentLocation.json()
        searchTerm.currentLocation = data
    }
}