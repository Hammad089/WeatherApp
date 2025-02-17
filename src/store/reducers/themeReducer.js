import { TOGGLE_THEME, SET_THEME } from '../type';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  theme: 'light', 
};
export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      AsyncStorage.setItem('theme', newTheme); 
      return { ...state, theme: newTheme };

    case SET_THEME:
      return { ...state, theme: action.payload };

    default:
      return state;
  }
};
