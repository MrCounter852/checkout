import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Iconos de Ionicons
import PomodoroScreen from "./src/screens/Pomodoro";
import CheckListScreen from "./src/screens/CheckList";
import CalendarScreen from "./src/screens/Calendar";

// Crear el navegador de pestañas
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Asignar un icono según el nombre de la pantalla
            if (route.name === "Pomodoro") {
              iconName = focused ? "timer" : "timer-outline";
            } else if (route.name === "CheckList") {
              iconName = focused ? "checkbox" : "checkbox-outline";
            } else if (route.name === "Calendar") {
              iconName = focused ? "calendar" : "calendar-outline";
            }

            // Devolver el icono
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#fd6f01", // Color activo
          tabBarInactiveTintColor: "gray", // Color inactivo
          tabBarLabelStyle: { fontSize: 12 }, // Estilo de la etiqueta
          tabBarStyle: { backgroundColor: "#1E1E1E" },
        })}
      >
        <Tab.Screen
          name="Pomodoro"
          component={PomodoroScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="CheckList"
          component={CheckListScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
