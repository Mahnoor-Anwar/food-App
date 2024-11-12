import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Switch,
  Button,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Card, Title} from 'react-native-paper';
// import { Text } from 'react-native-paper'

const Resturant = () => {
  const navigate = useNavigation();

  return (
    <ScrollView>
      <LinearGradient colors={['#000000', '#4A90E2']}>
        <ImageBackground
          source={require('../assets/Background.png')}
          resizeMode="cover"
          style={styles.background}>
          <ImageBackground
            source={require('../assets/viewresturant.png')}
            resizeMode="cover"
            style={styles.back}>
            <Image source={require('../assets/navbarRest.png')} />
            <Image
              source={require('../assets/nameResturant.png')}
              style={styles.name}
            />
          </ImageBackground>
          <View style={styles.container}>
            <LinearGradient
              colors={['#4A90E2', '#497BFFB2']}
              style={{
                top: 100,
                paddingTop: 10,
                paddingBottom: 10,
                paddingEnd: 20,
                paddingStart: 20,
                marginStart: 20,
              }}>
              <TouchableOpacity>
                <Text>Delivery</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View>
            <Title style={{top: 100, color: 'white', marginLeft: 20}}>
              Features Item
            </Title>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigate.navigate('Menu')}>
              <Card
                style={{
                  backgroundColor: 'black',
                  top: 100,
                  width: 333,
                  margin: 'auto',
                  marginTop: 20,
                  display: 'flex',
                }}>
                <Image source={require('../assets/item.png')} />
              </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate.navigate('Menu')}>
              <Card
                style={{
                  backgroundColor: 'black',
                  top: 100,
                  width: 333,
                  margin: 'auto',
                  marginTop: 20,
                  display: 'flex',
                }}>
                <Image source={require('../assets/item.png')} />
              </Card>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('click');
              }}>
              {/* navigate */}

              <Card
                style={{
                  backgroundColor: 'black',
                  top: 100,
                  width: 333,
                  margin: 'auto',
                  marginTop: 20,
                  display: 'flex',
                }}>
                <Image source={require('../assets/item.png')} />
              </Card>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    height: 252,
    width: 393,
    // padding: 30,
    paddingTop: 30,
    // margin: 'auto',
  },
  background: {
    height: 867,
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
export default Resturant;
