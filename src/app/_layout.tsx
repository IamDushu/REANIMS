import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="(bounce)/bounce"
        options={{ headerTitle: "1. Bounce" }}
      />
    </Stack>
  );
}
