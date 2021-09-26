// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';
import { RootStackParamList } from './screens/RootStackParamList';

const App = () => {
  const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Navigator>
            <Screen
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Screen
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Screen
              name='EatsScreen'
              component={EatsScreen}
              options={{
                headerShown: false,
              }}
            />
          </Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'orange',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
