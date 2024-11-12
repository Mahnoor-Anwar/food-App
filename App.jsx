import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { NativeModules, Text, View } from 'react-native'
import { App_Navigator } from './Config/App_Navigator'
import MenuScreen from './screens/MenuScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { LongPressGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/longPressGesture'
import Login from './screens/Login'
import Signup from './screens/Signup'

const App = () => {
const Stack = createStackNavigator();
const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown:false}}>
    //   {isAuthenticated ? (
    //     <Stack.Screen name="HomeTabs" component={App_Navigator} />

    //   ):
    //   <>
    //   <Stack.Screen name="Login" component={Login}/>
    //   <Stack.Screen name="Signup" component={Signup}/>
    //   </>
    //   }
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
  
      <Stack.Screen name="HomeTabs" component={App_Navigator} />

   
    {/* <>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Signup" component={Signup}/>
    </> */}
   
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App