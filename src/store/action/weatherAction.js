import { WEATHER,TOGGLE_UNIT, ADD_FAVORITE,REMOVE_FAVORITE,SET_RECENT_SEARCH,TOGGLE_THEME,SET_THEME} from "../type";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const setWeatherData = data => {
    console.log("DATA WEATHER",data);
    
  return dispatch => {
    dispatch({
      type: WEATHER,
      payload: data,
    });
  };
};
export const toggleUnit = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_UNIT,
    });
  };
};

export const addFavorite = city => {
    console.log("CITY",city);
    
  return dispatch => {
    dispatch({
      type: ADD_FAVORITE,
      payload: city,
    });
  };
};

export const removeFavorite = city => {
  return dispatch => {
    dispatch({
      type: REMOVE_FAVORITE,
      payload: city,
    });
  };
};

export const setRecentSearch = city => {
    console.log("setRecentSearch",city);
    
  return dispatch => {
    dispatch({
      type: SET_RECENT_SEARCH,
      payload: city,
    });
  };
};
export const toggleTheme = () => {
  return { type: TOGGLE_THEME };
};

export const loadTheme = () => {
  return async (dispatch) => {
    const savedTheme = await AsyncStorage.getItem('theme');
    if (savedTheme) {
      dispatch({ type: SET_THEME, payload: savedTheme });
    }
  };
};