import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import { globalStyles } from '../style';

export default function Home({ navigation }) {
  
  const pressHandler = () => {
    navigation.push('Plant');
  }
  

  const [plants, setPlants] = useState([
    { id: 1, name: 'Bobbert', image: '../assets/plant1.png'},
    { id: 2, name: 'Doichland', image: '../assets/plant2.png'},
    { id: 3, name: 'Gloglo', image: '../assets/plant3.png'},
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>home page</Text>
      <Button title='plant Bob' onPress={pressHandler} />

      <View style={globalStyles.container}>
          <FlatList
            data={plants}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Plant', item)}>
                <Text style={globalStyles.titleText}>{ item.name }</Text>
              </TouchableOpacity>
            )}
          />
      </View>

      <StatusBar style="auto" />
      <NavBar />
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
