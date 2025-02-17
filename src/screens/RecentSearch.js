import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRecentSearch } from '../store/action/weatherAction';

const RecentSearchesScreen = ({ navigation}) => {
  const {recentSearches} = useSelector(state => state.WeatherReducer);
  console.log(recentSearches,"==========recentSearches");

  const dispatch = useDispatch();
  const handleSelectSearch = (search) => {
    console.log(search,"===========");
    
    dispatch(setRecentSearch(search)); 
    navigation.goBack(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Searches</Text>
      {recentSearches.length > 0 ? (
        <FlatList
          data={recentSearches}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleSelectSearch(item)}
            >
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noResults}>No recent searches</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
});

export default RecentSearchesScreen;
