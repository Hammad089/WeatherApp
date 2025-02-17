import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../constants/scale';
import SearchIcon from '../assets/svg/Search.svg';
import RecentSearchIcon from '../assets/svg/history.svg';
import { useNavigation } from '@react-navigation/native';

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchContainer}>
      <SearchIcon width={wp(6)} height={hp(6)} style={styles.searchIcon} />
      <TextInput
        placeholder="Search Location..."
        placeholderTextColor={'#000'}
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.input}
      />
      <TouchableOpacity onPress={() => navigation.navigate('recent',{setSearchQuery:setSearchQuery})}>
        <RecentSearchIcon width={wp(6)} height={hp(6)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    width: wp(90),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#0008',
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default Searchbar;
