import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PlantCamera from './components/Camera';
import NavBar from './components/NavBar';

import { Pixelify } from "react-pixelify";

export default function App() {
  return (
    <View style={styles.container}>
      <Pixelify
        src={'moneytree.jpg'}
        pixelSize={20}
      />
      <Text>Bye Amrit</Text>
      <NavBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
