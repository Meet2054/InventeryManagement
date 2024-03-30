import InStockScreen from './screens/InstockScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import HomePage from './screens/Home';
import Stock from './screens/Stock';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUp /> */}
      <Login />
      {/* <HomePage /> */}
      {/* <InStockScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
