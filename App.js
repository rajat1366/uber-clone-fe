import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
export default function App() {
  return (
    <Provider store={store}>
        <View className="flex-1 items-center justify-center bg-white">
          <Text>Open up App.js to HELL </Text>
          <StatusBar style="auto" />
        </View>
    </Provider>
    
  );
}
