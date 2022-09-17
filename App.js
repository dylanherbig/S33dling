import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PlantCamera from './components/Camera';

// npm i react-pixelify --legacy-peer-deps
import { Pixelify } from "react-pixelify";
// import src from "./assets/image.jpg"
// const src = require("./assets/image.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <Pixelify
        src={"./assets/image.jpg"}
        pixelSize={20}
      />
      <PlantCamera />
      <Text>Bye Amrit</Text>
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
