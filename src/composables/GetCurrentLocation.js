import {searchTerm} from "@/enums/searchTerm.js";
import {handleSearch} from "@/composables/SearchFunc.js";
import {getLocation} from '@/composables/GetLocation.js'

export function getCurrentLocation() {
    searchTerm.isCurrentLocation = !searchTerm.isCurrentLocation
    handleSearch()
    getLocation(searchTerm.currentLocation.lat, searchTerm.currentLocation.lon)
}