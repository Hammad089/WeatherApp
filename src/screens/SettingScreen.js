import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  Appearance,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import PrivacyIcon from '../assets/svg/privacy.svg';
import ShareIcon from '../assets/svg/share.svg';
import {fonts} from '../constants/fonts';
import {wp, hp} from '../constants/scale';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../store/action/weatherAction';
const Setting = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector(state => state.themeReducer);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={[
          styles.privacyPolicyCard,
          {backgroundColor: theme === 'dark' ? '#121212' : '#fff'},
        ]}
        onPress={() => privacyPolicy()}>
        <View
          style={{
            flexDirection: 'row',
            columnGap: wp(8),
            alignItems: 'center',
            marginLeft: wp(5),
            marginTop: 5,
          }}>
          <PrivacyIcon width={wp(5)} height={hp(5)} />
          <Text
            style={{
              color: theme === 'dark' ? '#fff' : '#000',
              fontFamily: fonts.Poppins_Medium,
              fontSize: RFValue(13),
              fontWeight: '400',
            }}>
            Privacy
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.shareAppCard,
          {backgroundColor: theme === 'dark' ? '#121212' : '#fff'},
        ]}
        onPress={() => ShareAppLink()}>
        <View
          style={{
            flexDirection: 'row',
            columnGap: wp(8),
            alignItems: 'center',
            marginLeft: wp(5),
            marginTop: 5,
          }}>
          <ShareIcon width={wp(5)} height={hp(5)} />
          <Text
            style={{
              color: theme === 'dark' ? '#fff' : '#000',
              fontFamily: fonts.Poppins_Medium,
              fontSize: RFValue(13),
              fontWeight: '400',
            }}>
            Share App
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.privacyPolicyCard}>
        <View
          style={[
            styles.container,
            {backgroundColor: theme === 'dark' ? '#121212' : '#fff'},
          ]}>
          <View style={styles.switchRow}>
            <Text
              style={[
                styles.text,
                {color: theme === 'dark' ? '#fff' : '#000'},
              ]}>
              Light / Dark Mode
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={theme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={() => dispatch(toggleTheme())}
              value={theme === 'dark'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  privacyPolicyCard: {
    margin: wp(2),
    width: wp(90),
    height: hp(6.5),
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
  },
  rateUsCard: {
    margin: wp(2),
    width: wp(90),
    height: hp(6.5),
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
  },
  shareAppCard: {
    margin: wp(2),
    width: wp(90),
    height: hp(6.5),
    backgroundColor: '#FFFFFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
