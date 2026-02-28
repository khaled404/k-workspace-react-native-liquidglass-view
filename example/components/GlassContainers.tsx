import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import {
  GlassContainer,
  GlassView,
} from "@k-workspace/react-native-liquidglass-view";

export default function GlassContainers() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Glass Containers</Text>
      <Text style={styles.description}>
        Containers merge child glass edges together using
        UIGlassContainerEffect.
      </Text>

      {/* Two-column merged */}
      <Text style={styles.subtitle}>Merged Columns (spacing: 4)</Text>
      <GlassContainer style={styles.twoColumn} spacing={4}>
        <GlassView style={styles.colItem} effect="clear" cornerRadius={16}>
          <View style={styles.colContent}>
            <Text style={styles.colEmoji}>{"\u2600"}</Text>
            <Text style={styles.colLabel}>Sunny</Text>
            <Text style={styles.colValue}>28{"\u00B0"}</Text>
          </View>
        </GlassView>
        <GlassView style={styles.colItem} effect="clear" cornerRadius={16}>
          <View style={styles.colContent}>
            <Text style={styles.colEmoji}>{"\u263E"}</Text>
            <Text style={styles.colLabel}>Tonight</Text>
            <Text style={styles.colValue}>18{"\u00B0"}</Text>
          </View>
        </GlassView>
      </GlassContainer>

      {/* Three-column merged */}
      <Text style={styles.subtitle}>Three Columns (spacing: 2)</Text>
      <GlassContainer style={styles.threeColumn} spacing={2}>
        <GlassView style={styles.threeColItem} effect="clear" cornerRadius={14}>
          <View style={styles.threeColContent}>
            <Text style={styles.threeColValue}>142</Text>
            <Text style={styles.threeColLabel}>Posts</Text>
          </View>
        </GlassView>
        <GlassView style={styles.threeColItem} effect="clear" cornerRadius={14}>
          <View style={styles.threeColContent}>
            <Text style={styles.threeColValue}>9.8K</Text>
            <Text style={styles.threeColLabel}>Followers</Text>
          </View>
        </GlassView>
        <GlassView style={styles.threeColItem} effect="clear" cornerRadius={14}>
          <View style={styles.threeColContent}>
            <Text style={styles.threeColValue}>521</Text>
            <Text style={styles.threeColLabel}>Following</Text>
          </View>
        </GlassView>
      </GlassContainer>

      {/* Action bar merged buttons */}
      <Text style={styles.subtitle}>Merged Action Bar (spacing: 0)</Text>
      <GlassContainer style={styles.actionBar} spacing={0}>
        {["Share", "Save", "Copy", "More"].map((action) => (
          <GlassView
            key={action}
            style={styles.actionItem}
            effect="clear"
            cornerRadius={12}
            enablePressAnimation
          >
            <TouchableOpacity
              style={styles.actionInner}
              onPress={() => Alert.alert(`${action} tapped`)}
              activeOpacity={1}
            >
              <Text style={styles.actionLabel}>{action}</Text>
            </TouchableOpacity>
          </GlassView>
        ))}
      </GlassContainer>

      {/* Vertical list merged */}
      <Text style={styles.subtitle}>Merged List (spacing: 1)</Text>
      <GlassContainer style={styles.verticalList} spacing={1}>
        {[
          { label: "General", detail: "App settings" },
          { label: "Privacy", detail: "Data & permissions" },
          { label: "Notifications", detail: "Alerts & sounds" },
          { label: "About", detail: "Version 1.0.0" },
        ].map((item) => (
          <GlassView
            key={item.label}
            style={styles.listRow}
            effect="clear"
            cornerRadius={14}
          >
            <TouchableOpacity
              style={styles.listRowInner}
              onPress={() => Alert.alert(item.label)}
              activeOpacity={0.7}
            >
              <View>
                <Text style={styles.listLabel}>{item.label}</Text>
                <Text style={styles.listDetail}>{item.detail}</Text>
              </View>
              <Text style={styles.chevron}>{"\u203A"}</Text>
            </TouchableOpacity>
          </GlassView>
        ))}
      </GlassContainer>

      {/* Large spacing to show separation */}
      <Text style={styles.subtitle}>Larger Spacing (spacing: 12)</Text>
      <GlassContainer style={styles.twoColumn} spacing={12}>
        <GlassView
          style={styles.colItem}
          effect="regular"
          cornerRadius={16}
          tintColor="rgba(175, 82, 222, 0.15)"
        >
          <View style={styles.colContent}>
            <Text style={styles.colEmoji}>{"\u266B"}</Text>
            <Text style={styles.colLabel}>Music</Text>
          </View>
        </GlassView>
        <GlassView
          style={styles.colItem}
          effect="regular"
          cornerRadius={16}
          tintColor="rgba(255, 149, 0, 0.15)"
        >
          <View style={styles.colContent}>
            <Text style={styles.colEmoji}>{"\u25B6"}</Text>
            <Text style={styles.colLabel}>Podcasts</Text>
          </View>
        </GlassView>
      </GlassContainer>
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
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.5)",
    marginBottom: 4,
  },
  twoColumn: {
    flexDirection: "row",
    gap: 4,
  },
  colItem: {
    flex: 1,
    minHeight: 100,
  },
  colContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 4,
  },
  colEmoji: {
    fontSize: 32,
  },
  colLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
  colValue: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff",
  },
  threeColumn: {
    flexDirection: "row",
    gap: 2,
  },
  threeColItem: {
    flex: 1,
    height: 80,
  },
  threeColContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  threeColValue: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
  },
  threeColLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: "600",
  },
  actionBar: {
    flexDirection: "row",
    gap: 0,
  },
  actionItem: {
    flex: 1,
    height: 48,
  },
  actionInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  verticalList: {
    gap: 1,
  },
  listRow: {
    height: 60,
  },
  listRowInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  listLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  listDetail: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 2,
  },
  chevron: {
    fontSize: 24,
    color: "rgba(255, 255, 255, 0.4)",
    fontWeight: "300",
  },
});
