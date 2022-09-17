import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Plant() {
  return (
    <View style={styles.container}>
        <Image
            source={require('../assets/plant-icon.png')}
            style={{ width: 150, height: 150 }}
        />
      <Text>Plant</Text>
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
