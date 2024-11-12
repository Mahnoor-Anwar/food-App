import React, {useState} from 'react';
import {View, StyleSheet, Image, ImageBackground, Alert} from 'react-native';
import {TextInput, Text, Title, Icon, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Card} from 'react-native-paper';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userObj = {
      email,
      password,
    };
  
    console.log('Logging in with:', email, password);
    
    try {
      const res = await axios.post('http://localhost:7890/api/login', userObj);
      
      if (res.status === 200) {
        Alert.alert('Success', 'Login Successful');
        navigation.navigate('HomeTabs');
      } else {

        Alert.alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.log(error)
        Alert.alert( error);
      }
    }
  

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#000000', '#4A90E2']} style={styles.gradient}>
        <ImageBackground
          source={require('../assets/Background.png')}
          resizeMode="cover"
          style={styles.back}>
          <Image source={require('../assets/logo.png')} style={styles.image} />

          <Title style={styles.head}>Deliver Favourite Food</Title>

          <Card style={styles.card}>
            <Title style={styles.title}>Login</Title>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.input}
            />

            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              style={styles.input}
            />
            <Title style={styles.text}> Forgot Password ?</Title>
           
           
         
            <Button
              mode="contained"
              onPress={handleLogin}
              >
              Login
            </Button>
            <View>
              <Text style={{color:'white', textAlign:'center', marginTop:10}}>Or</Text>
            </View>
             <Image source={require('../assets/googlefb.png')} style={styles.regIcon} /> 

            <View style={styles.signupLink}>
              <Text style={styles.donthaveaccount}>Don't have an account?</Text>
              <Button onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Button>
            </View>
          </Card>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding:20
    // justifyContent: 'center',
    // paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 32.76,
  },
  input: {
    marginBottom: 10,
    width: 255,
    height: 45,
    borderRadius: 5,
    // backgroundColor:'#1D102D',
    borderWidth: 2,
    // borderBlockColor:'#ffff'
    borderColor: '#ffff',
    color: 'white',
  },
  
  signupLink: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#ffff',
  },
  image: {
    margin: 'auto',
    marginBottom: 0,
    marginTop: 30,
  },
  head: {
    textAlign: 'center',
    marginBottom: 30,
    color: 'white',
    fontWeight: 600,
  },
  back: {
    height: 852,
    width: 393,
    padding: 30,
    margin: 'auto',
  },
  gradient: {
    flex: 1,
    borderRadius: 5,
  },
  card: {
    padding: 20,
    backgroundColor: '#1D102D',
    borderRadius: 20,
    width: 300,
    height: 428,
    margin: 'auto',
    marginTop: 0,
  },
  icon: {
    width: 20,
    height: 15,
    bottom: 40,
    left: 220,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 10,
    textAlign: 'right',
    marginEnd: 10,
  },
  donthaveaccount : {
    color: '#ffff',
    textAlign:'center'
  },
  regIcon : {
    margin:'auto',
    marginTop:20
  }
});

export default Login;
