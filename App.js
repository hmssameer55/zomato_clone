import { StatusBar } from 'expo-status-bar'
import 'react-native-url-polyfill/auto'
import { AppRegistry } from 'react-native'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import BasketScreen from './screens/BasketScreen'
import PreparationScreen from './screens/Preparation'
import DeliveryScreen from './screens/DeliveryScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import store from './store/redux/store'

export default function App () {
  const Stack = createNativeStackNavigator()

  return (
    <View style={{ flex: 1, paddingBottom: 2 }}>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name='Home'
              component={HomeScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name='Restaurant'
              component={RestaurantScreen}
            />
            <Stack.Screen
              options={{ presentation: 'modal', headerShown: false }}
              name='Basket'
              component={BasketScreen}
            />
            <Stack.Screen
              options={{ presentation: 'fullScreenModal', headerShown: false }}
              name='Preparation'
              component={PreparationScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name='Delivery'
              component={DeliveryScreen}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </View>
  )
}
