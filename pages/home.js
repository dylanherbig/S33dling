import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import NavBar from '../components/NavBar';
import { globalStyles, boxContainer } from '../style';
import Logo from '../assets/logo.png';
import { auth } from '../firebase'
import Plant1 from '../assets/plant1.png';
import Plant2 from '../assets/plant2.png';
import Plant3 from '../assets/plant3.jpg';

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
    <>
      <View
        style={styles.container}
        behavior="padding"
      >
        <ScrollView>

          <View style={styles.item}>
            <Image style={{ flex: 1 }}
              resizeMode="contain"
              source={Plant1} />
          </View>

          <View style={styles.item}>
            <Image style={{ flex: 1 }}
              resizeMode="contain"
              source={Plant2} />
          </View>

          <View style={styles.item}>
            <Image style={{ flex: 1 }}
              resizeMode="contain"
              source={Plant3} />
          </View>
          {/* <View style = {styles.item}>
        <Image source={Plant2} />
      </View>
      <View style = {styles.item}>
        <Image source={Plant3} />
      </View> */}



          {/* <Text style={globalStyles.titleText}>home page</Text>
      <Button title='plant Bob' onPress={pressHandler} /> */}

          {/* <View style={globalStyles.container}>
          <FlatList
            data={plants}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Plant', item)}>
                <Text style={globalStyles.titleText}>{ item.name }</Text>
              </TouchableOpacity>
            )}
          />
      </View> */}

        </ScrollView>
        {/* <StatusBar style="auto" /> */}
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Out: </Text>
        </TouchableOpacity>
      </View>
      <NavBar />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  logoutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 30,
    backgroundColor: 'transparent',
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    height: 400,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
  },
  button: {
    backgroundColor: '#2A7E19',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alightItems: 'center',
    marginTop: 40,
    marginBottom: 80,
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
