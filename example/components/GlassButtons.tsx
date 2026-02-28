import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import {
  GlassView,
  GlassCard,
} from "@k-workspace/react-native-liquidglass-view";

export default function GlassButtons() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Buttons</Text>

      {/* Primary button with press animation */}
      <GlassView
        style={styles.buttonPrimary}
        effect="regular"
        cornerRadius={14}
        enablePressAnimation
        tintColor="rgba(0, 122, 255, 0.2)"
        shadowIntensity={0.2}
      >
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => Alert.alert("Primary tapped")}
          activeOpacity={1}
        >
          <Text style={styles.buttonTextPrimary}>Primary Action</Text>
        </TouchableOpacity>
      </GlassView>

      {/* Secondary / clear button */}
      <GlassView
        style={styles.buttonSecondary}
        effect="clear"
        cornerRadius={14}
        enablePressAnimation
        shadowIntensity={0.1}
      >
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => Alert.alert("Secondary tapped")}
          activeOpacity={1}
        >
          <Text style={styles.buttonTextSecondary}>Secondary</Text>
        </TouchableOpacity>
      </GlassView>

      {/* Destructive / red tint */}
      <GlassView
        style={styles.buttonDestructive}
        effect="regular"
        cornerRadius={14}
        enablePressAnimation
        tintColor="rgba(255, 59, 48, 0.2)"
        shadowIntensity={0.15}
      >
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => Alert.alert("Delete tapped")}
          activeOpacity={1}
        >
          <Text style={styles.buttonTextDestructive}>Delete</Text>
        </TouchableOpacity>
      </GlassView>

      {/* Pill button */}
      <GlassView
        style={styles.buttonPill}
        effect="clear"
        cornerRadius={24}
        enablePressAnimation
        tintColor="rgba(52, 199, 89, 0.15)"
        shadowIntensity={0.12}
      >
        <TouchableOpacity
          style={styles.buttonInner}
          onPress={() => Alert.alert("Pill tapped")}
          activeOpacity={1}
        >
          <Text style={styles.buttonTextPill}>+ Add Item</Text>
        </TouchableOpacity>
      </GlassView>

      {/* Icon button row */}
      <View style={styles.iconButtonRow}>
        {["heart", "star", "bell"].map((icon) => (
          <GlassView
            key={icon}
            style={styles.iconButton}
            effect="clear"
            cornerRadius={22}
            enablePressAnimation
            shadowIntensity={0.1}
          >
            <TouchableOpacity
              style={styles.iconButtonInner}
              onPress={() => Alert.alert(`${icon} tapped`)}
              activeOpacity={1}
            >
              <Text style={styles.iconText}>
                {icon === "heart"
                  ? "\u2665"
                  : icon === "star"
                    ? "\u2605"
                    : "\u266A"}
              </Text>
            </TouchableOpacity>
          </GlassView>
        ))}
      </View>

      {/* Full-width button with entrance animation */}
      <GlassCard
        cornerRadius={16}
        enablePressAnimation
        enableEntrance
        effect="regular"
        shadowIntensity={0.18}
      >
        <TouchableOpacity
          style={styles.fullWidthButton}
          onPress={() => Alert.alert("Continue tapped")}
          activeOpacity={1}
        >
          <Text style={styles.fullWidthText}>Continue</Text>
          <Text style={styles.arrowText}>{"\u2192"}</Text>
        </TouchableOpacity>
      </GlassCard>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },
  buttonPrimary: {
    height: 50,
  },
  buttonSecondary: {
    height: 50,
  },
  buttonDestructive: {
    height: 50,
  },
  buttonPill: {
    height: 44,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
  },
  buttonInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextPrimary: {
    fontSize: 17,
    fontWeight: "600",
    color: "#007AFF",
  },
  buttonTextSecondary: {
    fontSize: 17,
    fontWeight: "600",
    color: "#fff",
  },
  buttonTextDestructive: {
    fontSize: 17,
    fontWeight: "600",
    color: "#FF3B30",
  },
  buttonTextPill: {
    fontSize: 15,
    fontWeight: "600",
    color: "#34C759",
    paddingHorizontal: 16,
  },
  iconButtonRow: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
  },
  iconButtonInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 20,
    color: "#fff",
  },
  fullWidthButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 8,
  },
  fullWidthText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#fff",
  },
  arrowText: {
    fontSize: 18,
    color: "#fff",
  },
});
