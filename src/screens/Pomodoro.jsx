import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import PlayButton from "../common/PlayButton"; // Asegúrate de que la ruta sea correcta

export default function PomodoroScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(1500); // 25 minutos en segundos

  function toggleTimer() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    let timer;
    if (isPlaying && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsPlaying(false); // Detener el temporizador cuando llega a cero
      setSeconds(1500); // Reiniciar a 25 minutos para la siguiente sesión
    }

    return () => clearInterval(timer); // Limpiar el intervalo cuando cambia isPlaying o se desmonta el componente
  }, [isPlaying, seconds]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <View style={styles.container}>
      <PlayButton onPress={toggleTimer} isPlaying={isPlaying} />
      <Text style={styles.timerText}>{formatTime()}</Text>
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
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
});
