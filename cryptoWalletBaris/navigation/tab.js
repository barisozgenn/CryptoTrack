import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//#region Import Screens
import HomeScreen from '../src/screens/HomeScreen';
import CurrenciesScreen from '../src/screens/CurrenciesScreen';
import WalletScreen from '../src/screens/WalletScreen';

//#endregion

const Tab = createBottomTabNavigator();

function TabsFooter() {
  return (
    <Tab.Navigator
    tabBarOptions={{
        showLabel:true,
style:{
    position:'absolute',
    bottom:25,left:25,right:25,
    height:90,borderRadius:4,
    backgroundColor:'#000'
}
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Currencies" component={CurrenciesScreen} />
      <Tab.Screen name="Profile" component={WalletScreen} />
    </Tab.Navigator>
  );
}