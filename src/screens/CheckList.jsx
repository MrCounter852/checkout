import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AddButton from "../common/AddButton";

export default function CheckListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>checklist Screen</Text>
      <View style={styles.buttonContainer}>
        <AddButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
