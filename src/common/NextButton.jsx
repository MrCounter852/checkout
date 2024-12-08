import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function NextButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="arrow-right" size={20} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60, // Tamaño del botón
    height: 60,
    borderRadius: 100, // Hace que el botón sea circular
    backgroundColor: "white", // Color verde para diferenciarlo del PlayButton
    justifyContent: "center", // Centra el contenido
    alignItems: "center", // Centra el contenido
    elevation: 5, // Sombra en Android
    shadowColor: "#000", // Sombra en iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
