// import React from 'react'
// import { Image, SafeAreaView, Text, View } from 'react-native'

// const Home = () => {
//   return (
//     <View style={{backgroundColor:'pink'}}>
//       <SafeAreaView>
//         <View>
//           <Image source={require('../assets/welcome.jpg')} style={{width:100, height:200}} />
//         </View>
//       </SafeAreaView>
//     </View>
//   )
// }

// export default Home

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Card, Icon, Searchbar, TextInput, Title} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <LinearGradient colors={['#000000', '#4A90E2']}>
        <ImageBackground
          source={require('../assets/Background.png')}
          resizeMode="cover"
          style={styles.back}>
          <View>
            <Image source={require('../assets/navbar.png')} />
          </View>

          <View style={styles.searchSection}>
            <Searchbar placeholder="Search" />
          </View>
          <Title style={styles.cat}>Categories</Title>
          <Image
            source={require('../assets/Categories.png')}
            style={{paddingEnd: 40}}
          />
          <Card style={styles.card}>
            <Image
              source={require('../assets/Pasta.png')}
              style={styles.pasta}
            />
            <Card.Title
              titleStyle={{
                color: 'white',
                top: -180,
                fontSize: 25,
                fontWeight: 700,
              }}
              title="30% OFF"
              subtitle="Discover discounts in your favorite local restaurants"
              subtitleStyle={{
                color: 'white',
                top: -180,
                fontSize: 10,
                fontWeight: 200,
                flex: 1,
                flexWrap: 'wrap',
              }}
            />
            <View style={styles.container}>
              <LinearGradient
                colors={['#4A90E2', '#497BFFB2']}
                style={{
                  top: -180,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingEnd: 20,
                  paddingStart: 20,
                  marginStart: 20,
                }}>
                <TouchableOpacity>
                  <Text>Order Now</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </Card>
          <View>
            <Title style={{color: 'white', paddingStart: 30, top: -50}}>
              Fastest Near You
            </Title>
          </View>
          <TouchableOpacity>
            <Card
              style={{backgroundColor: 'black'}}
              onPress={() => navigation.navigate('Resturant')}>
              <Image
                source={require('../assets/near.png')}
                style={{margin: 'auto', top: -80}}
              />
            </Card>
          </TouchableOpacity>
        </ImageBackground>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    height: 860,
    width: 393,
    // padding: 30,
    paddingTop: 30,
    margin: 'auto',
  },
  searchSection: {
    marginTop: 20,
    paddingEnd: 20,
    paddingStart: 20,
  },
  cat: {
    paddingStart: 20,
    marginBottom: 30,
    marginTop: 20,
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 32.76,
  },

  card: {
    padding: 20,
    backgroundColor: '#1D102D',
    borderRadius: 20,
    width: 350,
    height: 220,
    margin: 'auto',
    marginTop: 0,
    marginBottom: 90,
  },
  pasta: {
    // left:40/
    width: 200,
    height: 200,
    left: 130,
    top: -7,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default App;
