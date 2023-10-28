import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import colors from "../constants/colors";

export default function Escanear(props) {
  const [hasPermission, setHasPermission] = useState();
  const [hasMediaPermission, setHasMediaPermission] = useState();
  const [photo, setPhoto] = useState();

  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
      setHasMediaPermission(mediaStatus === "granted");
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
      <Image style={styles.cameraPreview} source={{ uri: photo.uri }} />
  ) : (
    <Camera style={styles.cameraContainer} ref={cameraRef}>
      <Pressable 
        onPress = {takePic}
      >
        <View style={styles.ButtonContainer}>
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
  },
});
