import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from '../style';

export default function Plant({ navigation }) {
  return (
    <View style={globalStyles.container}>
        <Text>{ navigation.getParam('name')}</Text>
        <Image style={globalStyles.image}
            source={require('../assets/plant1.png')}
        />
        <StatusBar style="auto" />
    </View>
  );
}