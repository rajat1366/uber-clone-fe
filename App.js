import { createStackNavigator } from '@react-navigation/stack'; 
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import MapScreen from './screens/MapScreen';
import { KeyboardAvoidingView, Platform } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      
        <NavigationContainer>
           <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding" :"height"}>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false}}/>
                <Stack.Screen name="MapScreen" component={MapScreen}  options={{ presentation: 'modal',headerShown:false}}/>            
              </Stack.Navigator>
           </KeyboardAvoidingView>
            
        </NavigationContainer>
      
    </Provider>
    
  );
}
