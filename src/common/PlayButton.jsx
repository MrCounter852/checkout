import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function PlayButton({ onPress, isPlaying }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={isPlaying ? "pause" : "play"} size={40} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120, // Tamaño del botón
    height: 120,
    borderRadius: 100, // Hace que el botón sea circular
    backgroundColor: "#fd6f01", // Color del botón
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Sombra en Android
    shadowColor: "#000", // Sombra en iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});