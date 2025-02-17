import { WEATHER, TOGGLE_UNIT, ADD_FAVORITE, REMOVE_FAVORITE, SET_RECENT_SEARCH } from "../type";

const initialState = {
    weatherData: null,
    unit: 'C',
    favorites: [],
    recentSearches: []
};

export const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER:
            return {
                ...state,
                weatherData: action.payload 
            };
        case TOGGLE_UNIT:
            return {
                ...state,
                unit: state.unit === 'C' ? 'F' : 'C'
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.includes(action.payload) 
                    ? state.favorites 
                    : [...state.favorites, action.payload]
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(city => city !== action.payload)
            };
            case SET_RECENT_SEARCH:
                return {
                  ...state,
                  recentSearches: state.recentSearches.includes(action.payload)
                    ? state.recentSearches
                    : [action.payload, ...state.recentSearches.slice(0, 4)], // Limit recent searches to 5
                };
        default:
            return state;
    }
};
