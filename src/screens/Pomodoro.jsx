import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import PlayButton from "../common/PlayButton"; // Asegúrate de que la ruta sea correcta
import NextButton from "../common/NextButton";
import PrevButton from "../common/PrevButton";

export default function PomodoroScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [session, setSession] = useState(1); // Sesión de trabajo, empieza en 1
  const [seconds, setSeconds] = useState(1500); // 25 minutos en segundos (para trabajo)
  const [isWorking, setIsWorking] = useState(true); // Si es tiempo de trabajo o descanso

  // Alterna entre trabajo y descanso
  const toggleTimer = () => {
    setIsPlaying(!isPlaying);
  };

  // Configura el tiempo de la siguiente sesión
  const nextSession = () => {
    if (session < 4 && isWorking == true) {
      setIsWorking(false);
      setSeconds(300); // 25 minutos de trabajo
    }else if (session < 4 && isWorking == false) {
        setSession(session + 1);
        setIsWorking(true);
        setSeconds(1500); // 25 minutos de trabajo
    }else if (session == 4 && isWorking == true){
      setIsWorking(false);
      setSeconds(900)
    }else {
      setSession(1);
      setIsWorking(true);
      setSeconds(1500)
    }
  };

  const prevSession = () => {
    if (session > 1) {
      setSession(session - 1);
      setIsWorking(true);
      setSeconds(1500); // 25 minutos de trabajo
    }
  };

  useEffect(() => {
    let timer;

    // Cambiar el tiempo de descanso después de las sesiones de trabajo
    if (isPlaying && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      if (isWorking) {
        // Si es tiempo de trabajo, cambiar a descanso
        setIsWorking(false);
        // Establecer el tiempo de descanso según la sesión
        if (session < 4) {
          setSeconds(300); // 5 minutos de descanso
        } else {
          setSeconds(900); // 15 minutos de descanso en la cuarta sesión
        }
      } else {
        // Si es tiempo de descanso, cambiar a la siguiente sesión de trabajo
        nextSession();
      }
      setIsPlaying(false); // Detener el temporizador cuando llega a cero
    }

    return () => clearInterval(timer); // Limpiar el intervalo cuando cambia isPlaying o se desmonta el componente
  }, [isPlaying, seconds, isWorking, session]);

  // Función para formatear el tiempo en minutos:segundos
  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sesionNumber}>Session #{session}</Text>
      <View style={styles.buttonRow}>
        <PrevButton onPress={prevSession} />
        <PlayButton onPress={toggleTimer} isPlaying={isPlaying} />
        <NextButton onPress={nextSession} />
      </View>
      <Text style={styles.timerText}>{formatTime()}</Text>
      <Text style={styles.sessionType}>
        {isWorking ? "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself." : "Rest."}
      </Text>
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
  sesionNumber: {
    fontSize: 18,
    color: "gray",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row", // Coloca los botones en una fila horizontal
    justifyContent: "space-around", // Espacio entre los botones
    alignItems: "center", // Centra verticalmente
    width: "95%", // Ajusta el ancho del contenedor para organizar mejor los botones
    marginTop: 20,
  },
  sessionType: {
    fontStyle:"italic",
    fontSize: 18,
    color: "gray",
    textAlign:"center",
    width:"80%",
    position:"absolute",
    bottom:20,
  },
});
