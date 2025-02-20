import {reactive} from "vue";
export const searchTerm = reactive({
    query: '',
    results: null,
    weather: null,
    name: null,
    currentLocation: null,
    isCurrentLocation: false,
})
