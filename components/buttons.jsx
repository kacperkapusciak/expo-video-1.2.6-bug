import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function PlayButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <>
        <Ionicons name="play" size={32} color="#1e293b" />
        <Text style={styles.label}>Play</Text>
      </>
    </TouchableOpacity>
  );
}

export function PauseButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <>
        <Ionicons name="pause" size={32} color="#1e293b" />
        <Text style={styles.label}>Pause</Text>
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e2e8f0",
    borderRadius: 8,
  },
  label: {
    color: "#1e293b",
    fontSize: 16,
    marginLeft: 8,
    textTransform: "uppercase",
    fontWeight: "bold",
    width: 60,
  },
});
