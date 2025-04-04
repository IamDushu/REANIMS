import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function index() {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/bounce")}
      >
        <Text style={styles.txt}>Go to 1. Bounce</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "cyan",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    margin: 10,
  },
  txt: { textAlign: "center" },
});
