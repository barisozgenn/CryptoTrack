

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "./src/redux";

//#region Import Screen,
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

//#endregion

import TabsFooter from "./navigation/tab";

const Stack = createNativeStackNavigator();

const App = () => {
 
const store = createStore(reducers)
return (
  <Provider store={store}> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)
};

export default App;

/*
return (
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Detail' component={DetailScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
*/