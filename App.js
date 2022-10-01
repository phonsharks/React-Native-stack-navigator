import {View,Text} from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
//import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './tst/Home';
import content from './tst/content';

const App = () => {
  const Stack=createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* Burada stackscreenler uygulamada var olan ve
        kullanılacak olan sayfalar.Bunu stack adında oluşturduğumuz değişken
        ile yapıyoruz
        */}
          <Stack.Screen 
          name="Home" 
          component={Home}
          options={{title:"Ana Sayfa"}}
          />
          <Stack.Screen 
          name="content" 
          component={content}
          options={{title:"İçerik"}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App