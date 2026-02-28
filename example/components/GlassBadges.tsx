import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  GlassView,
  GlassContainer,
  GlassCard,
} from "@k-workspace/react-native-liquidglass-view";

function Badge({ label, tintColor }: { label: string; tintColor?: string }) {
  return (
    <GlassView
      style={styles.badge}
      effect="clear"
      cornerRadius={12}
      tintColor={tintColor}
      shadowIntensity={0.08}
    >
      <Text style={styles.badgeText}>{label}</Text>
    </GlassView>
  );
}

function StatusChip({ label, color }: { label: string; color: string }) {
  return (
    <GlassView
      style={styles.chip}
      effect="clear"
      cornerRadius={20}
      tintColor={color}
      enablePressAnimation
      shadowIntensity={0.06}
    >
      <View style={styles.chipInner}>
        <View style={[styles.chipDot, { backgroundColor: color }]} />
        <Text style={styles.chipText}>{label}</Text>
      </View>
    </GlassView>
  );
}

export default function GlassBadges() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Badges & Chips</Text>

      {/* Inline badges */}
      <Text style={styles.subtitle}>Badges</Text>
      <View style={styles.badgeRow}>
        <Badge label="New" tintColor="rgba(0, 122, 255, 0.2)" />
        <Badge label="Featured" tintColor="rgba(175, 82, 222, 0.2)" />
        <Badge label="Sale" tintColor="rgba(255, 59, 48, 0.2)" />
        <Badge label="iOS 26" tintColor="rgba(52, 199, 89, 0.2)" />
      </View>

      {/* Status chips */}
      <Text style={styles.subtitle}>Status Chips</Text>
      <View style={styles.chipRow}>
        <StatusChip label="Active" color="rgba(52, 199, 89, 0.3)" />
        <StatusChip label="Pending" color="rgba(255, 204, 0, 0.3)" />
        <StatusChip label="Offline" color="rgba(255, 59, 48, 0.3)" />
      </View>

      {/* Number badges on icons */}
      <Text style={styles.subtitle}>Icon with Badge Count</Text>
      <View style={styles.iconRow}>
        {[
          { icon: "\u2709", count: 3 },
          { icon: "\u266A", count: 12 },
          { icon: "\u2665", count: 99 },
        ].map((item) => (
          <View key={item.icon} style={styles.iconWrapper}>
            <GlassView
              style={styles.iconBox}
              effect="clear"
              cornerRadius={16}
              shadowIntensity={0.1}
            >
              <Text style={styles.iconText}>{item.icon}</Text>
            </GlassView>
            <GlassView
              style={styles.countBadge}
              effect="regular"
              cornerRadius={10}
              tintColor="rgba(255, 59, 48, 0.4)"
              shadowIntensity={0.15}
            >
              <Text style={styles.countText}>{item.count}</Text>
            </GlassView>
          </View>
        ))}
      </View>

      {/* Tags */}
      <Text style={styles.subtitle}>Tags</Text>
      <GlassCard cornerRadius={16} effect="clear" shadowIntensity={0.1}>
        <View style={styles.tagCard}>
          <Text style={styles.tagTitle}>Related Topics</Text>
          <View style={styles.tagRow}>
            {[
              "React Native",
              "iOS 26",
              "Liquid Glass",
              "SwiftUI",
              "UIKit",
              "Apple Design",
            ].map((tag) => (
              <GlassView
                key={tag}
                style={styles.tag}
                effect="clear"
                cornerRadius={8}
                tintColor="rgba(255, 255, 255, 0.08)"
                shadowIntensity={0.04}
              >
                <Text style={styles.tagText}>{tag}</Text>
              </GlassView>
            ))}
          </View>
        </View>
      </GlassCard>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: 8,
  },
  // Badges
  badgeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#fff",
  },
  // Chips
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    height: 34,
    paddingHorizontal: 4,
  },
  chipInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 6,
  },
  chipDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  chipText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  // Icon badges
  iconRow: {
    flexDirection: "row",
    gap: 20,
  },
  iconWrapper: {
    position: "relative",
  },
  iconBox: {
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 24,
  },
  countBadge: {
    position: "absolute",
    top: -6,
    right: -6,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  countText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#fff",
  },
  // Tags
  tagCard: {
    padding: 16,
    gap: 12,
  },
  tagTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagText: {
    fontSize: 13,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.8)",
  },
});
