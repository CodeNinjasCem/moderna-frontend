import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from "react-native";
import colors from "../constants/colors";
import React, { useEffect, useState } from "react";
import TrophyImage from "../assets/Trophy.png";
import StarsImage from "../assets/Stars.png";
import ImageRow from "../components/ImageRow";
import ColumnRows from "../components/ColumnRows";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPopularRecepies, getPopularProducts } from "../services";
import Codito from "../assets/codito.jpg";


const Inicio = (props) => {
  const [user, setUser] = useState({});

  const [ recepies, setRecepies ] = useState([]);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getPopularRecepies().then((res) => {
      setRecepies(res);
    });

    getPopularProducts().then((res) => {
      setProducts(res);
    });

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('my-user');
        if (jsonValue != null) {
          setUser(JSON.parse(jsonValue));
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.mainContainer}>
        <Pressable 
        onPress={() => props.navigation.navigate("Account")}
         style={styles.profileInfoContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={Codito}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileWelcome}>¡Hola!</Text>
            <Text style={styles.profileName}>{user.first_name + " " + user.last_name}</Text>
          </View>
        </Pressable>
        <View style={styles.promoContainer}>
          <Image style={styles.trophyImage} source={TrophyImage} />
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoHeaderText}>
              Gana puntos al escanear productos MODERNA
            </Text>
            <Text style={styles.promoBodyText}>
              Al escanear productos se te bonificaran puntos que podrás canjear
              por recompensas.
            </Text>
          </View>
          <Image style={styles.starsImage} source={StarsImage} />
        </View>
        <View style={styles.productsContainer}>
          <Text style={styles.header}>Productos Recomendados</Text>
          <ImageRow data={products}/>
        </View>
        <View style={styles.recipeContainer}>
          <Text style={styles.header}>Recetas Recomendadas</Text>
          <ColumnRows data={recepies} navigation={props.navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    paddingHorizontal: 24,
    gap: 12,
  },
  profileInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    gap: 8,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,

  },
  profileInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  profileWelcome: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.PRIMARY,
  },
  profileName: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.SECONDARY,
  },
  promoContainer: {
    width: "100%",
    backgroundColor: colors.PRIMARY,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  trophyImage: {
    width: 30,
    resizeMode: "contain",
  },
  starsImage: {
    zIndex: -1,
    width: 50,
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    top: -5,
    transform: [{ scaleY: -1 }],
  },
  promoTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    width: "90%",
    gap: 8,
  },
  promoHeaderText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.SECONDARY,
  },
  promoBodyText: {
    fontSize: 10,
    color: colors.LIGHT_GRAY,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.SECONDARY,
  },
  productsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    gap: 12,
  },
  recipeContainer: {
    gap: 12,
    paddingVertical: 12,
  }
});
