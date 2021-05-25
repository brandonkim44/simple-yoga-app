/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
 import HomeScreen from './src/screens/HomeScreen/home';
 import { Colors } from 'react-native/Libraries/NewAppScreen';
 import 'react-native-gesture-handler';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';

 const Stack = createStackNavigator();

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };

   return (
     <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{}}
              />
            </Stack.Navigator>
            
        </SafeAreaView>
     </NavigationContainer>
   );
 };

//  const AppContainer = createAppContainer(bottomNavBar);

 export default App;
