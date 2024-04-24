import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../constant';
import {dark, light} from '../common/colors';
import {WebView} from 'react-native-webview';

const Profile = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: theme === 'dark' ? dark.themeColor : light.themeColor,
        height: '100%',
        padding: 10,
        gap: 20,
      }}>
      <Text
        style={{
          color: theme === 'dark' ? dark.white : light.white,
          fontSize: 20,
        }}>
        Hello, Dilip Valiya
      </Text>
      <TouchableOpacity onPress={toggleTheme}>
        <View
          style={{
            backgroundColor: theme === 'dark' ? dark.white : light.white,
            padding: 6,
            width: 200,
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <Text
            style={{
              fontWeight: 500,
              color: theme === 'dark' ? light.white : dark.white,
            }}>
            Toggle Theme
          </Text>
        </View>
      </TouchableOpacity>
      <WebView
        source={{uri: 'https://dilip-valiya.vercel.app/'}}
        style={{flex: 1}}
      />
    </View>
  );
};

export default Profile;
