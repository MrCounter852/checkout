import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import PlayButton from "../common/PlayButton"; // Asegúrate de que la ruta sea correcta

export default function PomodoroScreen() {
  const [playtime, setPlaytime] = useState(false);

  function Controller() {
    setPlaytime(!playtime);
  }

  return (
    <View style={styles.container}>
      <PlayButton onPress={Controller} isPlaying={playtime} />
      <Text style={styles.title}>Pomodoro Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6347",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
});
