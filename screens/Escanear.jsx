import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { Icon } from "@rneui/base";

export default function Escanear(props) {
  const [hasPermission, setHasPermission] = useState();
  const [photo, setPhoto] = useState();

  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePic = async () => {
    try {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      props.navigation.navigate("ListaReceta", {
        params: { image: newPhoto.uri },
      });
      setPhoto(newPhoto);
    } catch (error) {
      console.error("Error al tomar la foto", error.message);
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
      <Pressable onPress={()=>setPhoto(null)} style={styles.buttonPressableContainer}>
        <View style={styles.ButtonContainer}>
          <Icon name="reload" type="material-community" size={40} />
        </View>
      </Pressable>
    </View>
  ) : (
    <Camera style={styles.cameraContainer} ref={cameraRef}>
      <Pressable onPress={takePic} >
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
  buttonPressableContainer:{
    position: "absolute",
    bottom: 15,
  }
});
