import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack';




// import  Pixelify  from "react-pixelify";
// const src = require("./assets/moneytree.jpg");
// import { ImagePixelated, ElementPixelated } from "react-pixelate"


export default function App() {
  
  
    return (
      <View>
        <Navigator />
        
      </View>

        // <ImagePixelated src={src} width={500} height={300} fillTransparencyColor={"grey"} />
  );
}


/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>app.js</Text>
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
*/
