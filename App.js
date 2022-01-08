import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <View style={tailwind('h-full flex')}>
      <Text style={tailwind('bg-pink-200 text-red-500 font-bold')}>
        Hello World
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
