import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { Icon } from "@rneui/base";
import { classifyImage, getRecommendedRecepiesByName, addPoints } from "../services";
import * as FileSystem from "expo-file-system";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Escanear(props) {
  const [hasPermission, setHasPermission] = useState();
  const [user, setUser] = useState({});
  const [photo, setPhoto] = useState();

  const cameraRef = useRef();

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-user');
      if (jsonValue != null) {
        setUser(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-user', jsonValue);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    getData();
  }, []);

  useEffect(() => {
    if (photo) {
      scan();
    }
  }, [photo]);

  const takePic = async () => {
    try {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(newPhoto);
    } catch (error) {
      console.error("Error al tomar la foto", error.message);
    }
  };

  const scan = async () => {
    try {
      FileSystem.readAsStringAsync(photo.uri, {
        encoding: "base64",
      }).then((res) => {
        classifyImage(res).then((res) => {
          const { producto } = res;
          getRecommendedRecepiesByName(res.producto).then((res) => {
            const recetas = res;
            addPoints({email: user.email, points: 12}).then((res) => {
              user.points += 12;
              setUser({...user});
              storeData(user).then((res) => {
                props.navigation.navigate("ListaReceta", {
                  params: { image: photo.uri, producto: producto, recetas: recetas },
              });
            });
            });
          });
        });
      });
    } catch (error) {
      console.error("Error al escanear la foto", error.message);
    }
  };

  return !hasPermission ? (
    <Text>
      No se ha otorgado permiso para usar la cámara, por favor otorga el permiso
      desde configuraciones.
    </Text>
  ) : photo ? (
    <View style={styles.cameraContainer}>
      <Image style={styles.cameraPreview} source={{ uri: photo.uri }} />
      <Pressable
        onPress={() => setPhoto(null)}
        style={styles.buttonPressableContainer}
      >
        <View style={styles.ButtonContainer}>
          <Icon name="reload" type="material-community" size={40} />
        </View>
      </Pressable>
    </View>
  ) : (
    <Camera style={styles.cameraContainer} ref={cameraRef}>
      <Pressable onPress={takePic}>
        <View style={styles.ButtonContainer}>
          <Icon name="camera" type="material-community" size={40} />
        </View>
      </Pressable>
    </Camera>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cameraPreview: {
    alignSelf: "stretch",
    flex: 1,
  },
  ButtonContainer: {
    backgroundColor: "white",
    borderRadius: 75,
    height: 75,
    width: 75,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressableContainer: {
    position: "absolute",
    bottom: 15,
  },
});
