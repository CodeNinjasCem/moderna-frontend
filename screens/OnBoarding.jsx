import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Animated,
  useWindowDimensions,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OnBoarding(props) {
  const { width, height } = useWindowDimensions();
  const scrollViewRef = useRef(null);

  const onBoardingSteps = [
    {
      header: "Obtén recetas al instante.",
      description:
        "Con la ayuda de ésta aplicación puedes obtener recetas para tu día a día usando productos La Moderna.",
      image: require("../assets/1927.jpg"),
    },
    {
      header: "Calcula el valor nutrimental de tus recetas.",
      description:
        "Cada que obtengas una nueva receta en tu inventario, podrás ver el valor nutrimental de la misma.",
      image: require("../assets/menu-recetas-temporada.jpg"),
    },
    {
      header: "Explora combinaciones de productos.",
      description:
        "Puedes explorar combinaciones de productos La Moderna para obtener recetas más variadas.",
      image: require("../assets/1987.jpg"),
    },
  ];

  const scrollX = new Animated.Value(0);

  const handleButtonNext = (index) => {
    if (index < onBoardingSteps.length - 1) {
      scrollViewRef.current.scrollTo({
        x: width * (index + 1),
        y: 0,
        animated: true,
      });
    } else if (index === onBoardingSteps.length - 1) {
      return props.navigation.navigate("Login");
    }
  };

  const renderContent = () => {
    return (
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
      >
        {onBoardingSteps.map((step, index) => {
          return (
            <View key={`main-container-${index}`}>
              <View
                style={[
                  OnBoardingStyles.imageContainer,
                  {
                    width: width,
                    maxHeight: height * 0.35,
                    height: height * 0.35,
                  },
                ]}
                key={`image-container-${index}`}
              >
                <Image
                  key={`image-${index}`}
                  source={step.image}
                  style={[
                    OnBoardingStyles.image,
                    { height: height * 0.35, width: width },
                  ]}
                />
              </View>
              <View
                style={[
                  OnBoardingStyles.footer,
                  { width: width, height: height * 0.75 },
                ]}
                key={`footer-container-${index}`}
              >
                <View
                  style={[
                    OnBoardingStyles.textContainer,
                    { width: width, marginTop: width > 1200 ? 64 : 24 },
                  ]}
                  key={`text-container-${index}`}
                >
                  <Text
                    style={[
                      OnBoardingStyles.header,
                      { fontSize: width > 1200 ? 28 : 16 },
                    ]}
                    key={`text-header-${index}`}
                  >
                    {step.header}
                  </Text>
                  <Text
                    style={[
                      OnBoardingStyles.description,
                      { fontSize: width > 1200 ? 18 : 14 },
                    ]}
                    key={`text-description-${index}`}
                  >
                    {step.description}
                  </Text>
                </View>
                <View
                  style={[OnBoardingStyles.buttonContainer, { width: width }]}
                  key={`button-container-${index}`}
                >
                  <Pressable
                    onPress={() => {
                      handleButtonNext(index);
                    }}
                    key={`pressable-button-${index}`}
                  >
                    <LinearGradient
                      key={`linear-gradient-button-${index}`}
                      colors={[colors.PRIMARY, colors.PRIMARY]}
                      start={[0, 0]}
                      end={[1, 1]}
                      location={[0.25, 1]}
                      style={[
                        OnBoardingStyles.button,
                        { width: width - 48, height: width > 1200 ? 48 : 40 },
                      ]}
                    >
                      <Text
                        style={OnBoardingStyles.buttonText}
                        key={`button-text-${index}`}
                      >
                        {index === onBoardingSteps.length - 1
                          ? "Comenzar"
                          : "Siguiente"}
                      </Text>
                    </LinearGradient>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
    );
  };

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, width);

    return (
      <View style={OnBoardingStyles.dotContainer}>
        {onBoardingSteps.map((step, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange:
              width > 1200
                ? [12, 24, 12]
                : width < 800
                ? [8, 12, 8]
                : [8, 16, 8],
            extrapolate: "clamp",
          });

          // Añadir que el color del punto cambie cuando se cambie de pantalla
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [colors.SECONDARY, colors.PRIMARY, colors.SECONDARY],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              style={[
                OnBoardingStyles.dot,
                {
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                  marginHorizontal: width > 1200 ? 12 : 6,
                  borderRadius: 24,
                },
              ]}
              opacity={opacity}
            ></Animated.View>
          );
        })}
      </View>
    );
  };

  return (
    <View>
      <View>{renderContent()}</View>
      <View
        style={[
          OnBoardingStyles.dotRootContainer,
          { bottom: height > 800 ? "60%" : width > 800 ? "60%" : "60%" },
        ]}
      >
        {renderDots()}
      </View>
    </View>
  );
}

const OnBoardingStyles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "black",
  },
  image: {
    opacity: 0.5,
    resizeMode: "cover",
  },
  footer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 120,
    paddingTop: 24,
  },
  textContainer: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  header: {
    fontWeight: "800",
    color: "black",
  },
  description: {
    fontWeight: "300",
    color: "black",
  },
  buttonContainer: {
    padding: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.SECONDARY,
    textAlign: "center",
  },
  dotRootContainer: {
    position: "absolute",
    left: "40%",
  },
  dotContainer: {
    flexDirection: "row",
    height: 24,
  },
});
