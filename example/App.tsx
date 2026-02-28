import React, { useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
import {
  GlassView,
  isLiquidGlassSupported,
} from "@k-workspace/react-native-liquidglass-view";

import GlassButtons from "./components/GlassButtons";
import GlassSwitches from "./components/GlassSwitches";
import GlassBoxes from "./components/GlassBoxes";
import GlassContainers from "./components/GlassContainers";
import GlassNavBar from "./components/GlassNavBar";
import GlassInputs from "./components/GlassInputs";
import GlassBadges from "./components/GlassBadges";

const { width } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      {/*
        Use any vibrant background image so the glass effect is visible.
        Replace the uri below with a local asset or your own image.
      */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        }}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Dark overlay for better text contrast */}
        <View style={styles.overlay} />

        <SafeAreaView style={styles.safe}>
          {/* Header */}
          <GlassView
            style={styles.header}
            effect="regular"
            cornerRadius={20}
            shadowIntensity={0.2}
            enableEntrance
          >
            <View style={styles.headerInner}>
              <Text style={styles.headerTitle}>Liquid Glass Showcase</Text>
              <Text style={styles.headerSubtitle}>
                {isLiquidGlassSupported
                  ? "Running native UIGlassEffect (iOS 26+)"
                  : "Fallback mode — glass requires iOS 26+"}
              </Text>
            </View>
          </GlassView>

          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <GlassButtons />
            <Divider />
            <GlassSwitches />
            <Divider />
            <GlassBoxes />
            <Divider />
            <GlassContainers />
            <Divider />
            <GlassNavBar />
            <Divider />
            <GlassInputs />
            <Divider />
            <GlassBadges />

            {/* Footer spacer */}
            <View style={{ height: 60 }} />
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    flex: 1,
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
  },
  safe: {
    flex: 1,
  },
  header: {
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  headerInner: {
    padding: 20,
    gap: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: "500",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    marginVertical: 28,
  },
});
