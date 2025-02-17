import {StyleSheet, Text, View, Switch} from 'react-native';
import React from 'react';
import {fonts} from '../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {hp, wp} from '../constants/scale';
import {toggleUnit} from '../store/action/weatherAction';
import {useDispatch, useSelector} from 'react-redux';
const RenderWeather = ({item}) => {
  const temperatureUnit = useSelector(state => state.WeatherReducer.unit);
  const dispatch = useDispatch();
   const {theme} = useSelector((state) => state.themeReducer);
  console.log(theme,"============theme");
  return (
    <View style={styles.weatherCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.city}>{item.cityName}</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.infoText}>°C</Text>
          <Switch
            value={temperatureUnit === 'F'}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={temperatureUnit ? 'green' : '#f4f3f4'}
            ios_backgroundColor="#FFF"
            onValueChange={() => dispatch(toggleUnit())}
          />
          <Text style={styles.infoText}>°F</Text>
        </View>
      </View>

      <Text style={styles.infoText}>
        🌡 Temperature:{' '}
        {temperatureUnit === 'C'
          ? item.temperature + '°C'
          : ((item.temperature * 9) / 5 + 32).toFixed(1) + '°F'}
      </Text>
      <Text style={styles.infoText}>
        ☁️ Condition: {item.currentConditions}
      </Text>
      <Text style={styles.infoText}>💨 Wind Speed: {item.windSpeed} km/h</Text>
      <Text style={styles.infoText}>
        💦 Wind Chill Factor: {item.windChillFactor}
      </Text>
    </View>
  );
};

export default RenderWeather;

const styles = StyleSheet.create({
  weatherCard: {
    backgroundColor: '#4D4494',
    width: wp(85),
    alignSelf: 'center',
    marginVertical: hp(1),
    borderRadius: 20,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 4},
    elevation: 5,
  },
  city: {color: '#fff', fontSize: 20, fontWeight: 'bold'},
  infoText: {
    color: '#fff',
    fontFamily: fonts.Poppins_Medium,
    fontSize: RFValue(12),
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
