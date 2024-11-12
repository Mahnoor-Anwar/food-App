import React from 'react';
import {Image, ImageBackground, LayoutAnimation, StyleSheet, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Card, Checkbox, Text, Title} from 'react-native-paper';

const MenuScreen = () => {
  return (
    <ScrollView>
      <LinearGradient colors={['#000000', '#4A90E2']}>
      <ImageBackground  source={require('../assets/Background.png')}
        resizeMode="cover"
        style={styles.background}>
        <ImageBackground source={require('../assets/menuImg.png')} resizeMode='cover' style={styles.back}>
          <Image source={require('../assets/navbarRest.png')}/>
        </ImageBackground>
        <Card style={{backgroundColor:'black'}}>
        <Image source={require('../assets/viewItem.png')}  style={{top:-30}}/>
        </Card>
        <Card style={{backgroundColor:'black', margin:'auto', padding:20}}>
            <Image source={require('../assets/type.png')}/>
        </Card>
        </ImageBackground>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    height: 252,
    width: 393,
    paddingTop: 30,
  },
  background: {
    height: 899,
  },
  name: {
    left: 20,
    top: 90,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
