import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import ResturantScreen from '../screens/ResturantScreen';
import MenuScreen from '../screens/MenuScreen';
import Carts from '../screens/Carts';
import Browser from '../screens/Browser';
import Login from '../screens/Login';


const Tab = createBottomTabNavigator();

const App_Navigator = () => {
  return (    
    <>
   <Tab.Navigator  
   initialRouteName='Menu'
   
   screenOptions={{
    tabBarActiveTintColor:'white',
    tabBarInactiveTintColor:'black',
    tabBarActiveBackgroundColor:'black',
    tabBarInactiveBackgroundColor:'white',
    headerShown:false
   }}
   
   >
    <Tab.Screen options={{
      tabBarIcon:({color})=>{
        return <AntDesign color={color} name='home' size={30} />
      }
    }} name='Home' component={Home} />
    <Tab.Screen 
    options={{
      tabBarIcon:({color})=>{
        return <AntDesign color={color} name='infocirlceo' size={30} />
      }
    }}
     name='Resturant' component={ResturantScreen} />
      <Tab.Screen 
    options={{
      tabBarIcon:({color})=>{
        return <AntDesign color={color} name='infocirlceo' size={30} />
      }
    }}
     name='Browser' component={Browser} />
    <Tab.Screen
     options={{
      tabBarIcon:({color})=>{
        return <Ionicons color={color} name='person-circle-outline' size={30} />
      }
    }}
    name='Menu' component={MenuScreen} />
    <Tab.Screen
     options={{
      tabBarIcon:({color})=>{
        return <AntDesign color={color} name='cart' size={30} />
      }
    }}
    name='Cart' component={Carts} />
   </Tab.Navigator>

    
   </>
  )
}

export  {App_Navigator}