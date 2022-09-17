import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import NavBar from '../components/NavBar';

export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.push('Plant');
  }

  return (
    <View style={styles.container}>
      <Text>home page</Text>
      <Button title='plant Bob' onPress={pressHandler} />
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
