import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRecentSearch } from '../store/action/weatherAction';
import { getWeatherData } from '../WeatherService';
import CustomHeader from '../component/CustomHeader';
import RenderWeather from '../component/RenderWeather';
import Searchbar from '../component/Searchbar';

const WeatherScreen = () => {
  const {theme} = useSelector((state) => state.themeReducer);
  console.log(theme,"============theme");
  
  const [searchQuery, setSearchQuery] = useState('');
  const {weatherData} = useSelector(state => state.WeatherReducer); 
  const {recentSearches} = useSelector(state => state.WeatherReducer); 
  const dispatch = useDispatch();

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchWeather();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, weatherData]);

  const fetchWeather = async () => {
    const data = await getWeatherData();
    dispatch({ type: 'WEATHER', payload: data }); 
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      setFilteredData(weatherData);
    } else {
      const filtered = weatherData.filter(item =>
        item.cityName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
      if (filtered.length > 0 && !recentSearches.includes(searchQuery.trim())) {
        dispatch(setRecentSearch(searchQuery.trim())); 
      }
    }
  };

  return (
    <View style={{backgroundColor: theme === 'dark' ? '#121212' : '#fff', flex: 1}}>
      <CustomHeader />
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}
        keyExtractor={item => item.cityId.toString()}
        renderItem={({ item }) => <RenderWeather item={item} />}
        ListEmptyComponent={<Text style={styles.noResults}>No cities found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  noResults: { textAlign: 'center', marginTop: 20, fontSize: 16, color: 'gray' },
});

export default WeatherScreen;
