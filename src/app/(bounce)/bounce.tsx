import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const squareSize = 120;

export default function App() {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      // always translate first then scale and rotate
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
        { rotate: `${rotate.value}deg` },
      ],
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.View
        style={[styles.box, rStyle]}
        onTouchStart={() => {
          scale.value = withTiming(1.2);
        }}
        onTouchEnd={() => {
          scale.value = withTiming(1);
          rotate.value = withRepeat(withTiming(rotate.value + 90), 4, false);
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const MaxTranslationAmount = 100;
          const tX =
            Math.random() * MaxTranslationAmount * 2 - MaxTranslationAmount;
          const tY =
            Math.random() * MaxTranslationAmount * 2 - MaxTranslationAmount;
          translateX.value = withSpring(tX);
          translateY.value = withSpring(tY);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: squareSize,
    height: squareSize,
    backgroundColor: "rgb(85, 225, 220)",
    borderRadius: 26,
    borderCurve: "continuous",
  },
  button: {
    height: 64,
    width: 64,
    backgroundColor: "#111",
    borderRadius: 32,
    position: "absolute",
    bottom: 40,
    right: 32,
  },
});
