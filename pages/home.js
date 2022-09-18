import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import { globalStyles } from '../style';

import { auth } from '../firebase'


export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.push('Plant');
  }

  const handleSignOut = () => {
    auth.signOut()
    .then(() => {
        navigation.replace("Login")
    })
    .catch(error => alert(error.message))
}


  const [plants, setPlants] = useState([
    { id: 1, name: 'Bobbert', image: '../assets/plant1.png' },
    { id: 2, name: 'Doichland', image: '../assets/plant2.png' },
    { id: 3, name: 'Gloglo', image: '../assets/plant3.png' },
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
              <Text style={globalStyles.titleText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Out: </Text>
        </TouchableOpacity>
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

  button: {
    backgroundColor: '#2A7E19',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alightItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
