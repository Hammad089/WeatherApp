import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SettingIcon from '../assets/svg/settingIcon.svg'
import { fonts } from '../constants/fonts'
import { RFValue } from "react-native-responsive-fontsize";
import { hp, wp } from '../constants/scale';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const CustomHeader = () => {
  const navigation = useNavigation()
  const {theme} = useSelector((state) => state.themeReducer);
  console.log(theme,"============theme");
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:wp(4)}}>
     <Text style={[styles.headerText,{color: theme === 'dark' ? '#fff' : '#000'}]}>Explore Weather</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('setting')}>
    <SettingIcon width={wp(7.5)} height={hp(7.5)}  />
    </TouchableOpacity>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    headerText:{
        fontFamily:fonts.Poppins_SemiBold,
        fontSize:RFValue(24),
        color:'#1F2933',
        textAlign:'center'
    },
    
})