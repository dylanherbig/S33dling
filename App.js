import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import NavBar from './components/NavBar';

import { useState, useEffect } from "react";

import picture from './assets/plant-icon.png';

// firebase
import { uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref as storageRef } from 'firebase/storage'; 
import { storage } from "./firebase";

import { v4 } from "uuid";

export default function App() {

  // const pressHandler = () => {
  //   navigation.push('Plant');
  // }
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [plantImage, setPlantImage] = useState();

  // const imagesListRef = ref(storage, "images/"); // images from firebase
  const uploadFile = () => {
    // if (imageUpload == null) return;
    const imageRef = storageRef(storage, `images/plant-icon.png`);
    const uploadResumeToDB = uploadBytesResumable(imageRef, picture);

    console.log('bye');

    uploadResumeToDB.on("state_changed", (snapshot) => {
      // setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      // setUploadResume(uploadResumeToDB);
      console.log(snapshot.bytesTransferred);
    });

    // setPlantImage(picture.name);
    // uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     setImageUrls((prev) => [...prev, url]);
    //   });
    // });
  };

  //gets images from firebase bucket
  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => { //download url for each item
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <Text>home page</Text>
      {/* <Button title='plant Bob' onPress={pressHandler} /> */}

      {/* <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      /> */}
      <Button title='Upload' onPress={() => uploadFile()} />
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}

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
