import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import PlayButton from "../common/PlayButton"; // Asegúrate de que la ruta sea correcta
import NextButton  from "../common/NextButton";
import PrevButton from "../common/PrevButton";
export default function PomodoroScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sesion, setSesion] = useState(1);
  const [seconds, setSeconds] = useState(60); // 25 minutos en segundos

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
      <Text style={styles.sesionNumber}>#1</Text>
      <View style={styles.buttonRow}>
      <PrevButton/>
      <PlayButton onPress={toggleTimer} isPlaying={isPlaying} />
      <NextButton/>
      </View>
      <Text style={styles.timerText}>{formatTime()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
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
  sesionNumber:{
    fontSize:18,
    color:"gray",
    marginBottom:20,
  },
  buttonRow: {
    flexDirection: "row", // Coloca los botones en una fila horizontal
    justifyContent: "space-around", // Espacio entre los botones
    alignItems: "center", // Centra verticalmente
    width: "60%", // Ajusta el ancho del contenedor para organizar mejor los botones
    marginTop: 20,
  },
});
