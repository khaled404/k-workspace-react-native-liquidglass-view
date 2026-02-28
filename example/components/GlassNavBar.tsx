import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  GlassView,
  GlassContainer,
} from "@k-workspace/react-native-liquidglass-view";

const tabs = [
  { key: "home", label: "Home", icon: "\u2302" },
  { key: "search", label: "Search", icon: "\u2315" },
  { key: "favorites", label: "Favorites", icon: "\u2665" },
  { key: "profile", label: "Profile", icon: "\u263A" },
];

function GlassTabBar() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <GlassView
      style={styles.tabBar}
      effect="regular"
      cornerRadius={24}
      shadowIntensity={0.2}
    >
      <View style={styles.tabBarInner}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab.key)}
              activeOpacity={0.7}
            >
              <Text style={[styles.tabIcon, isActive && styles.tabIconActive]}>
                {tab.icon}
              </Text>
              <Text
                style={[styles.tabLabel, isActive && styles.tabLabelActive]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </GlassView>
  );
}

function GlassToolbar() {
  return (
    <GlassView
      style={styles.toolbar}
      effect="clear"
      cornerRadius={16}
      shadowIntensity={0.15}
    >
      <View style={styles.toolbarInner}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.toolbarButton}>{"\u2190"} Back</Text>
        </TouchableOpacity>
        <Text style={styles.toolbarTitle}>Settings</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.toolbarButton}>Done</Text>
        </TouchableOpacity>
      </View>
    </GlassView>
  );
}

function GlassPillNav() {
  const [selected, setSelected] = useState(0);
  const pills = ["All", "Active", "Completed"];

  return (
    <GlassContainer style={styles.pillNav} spacing={2}>
      {pills.map((pill, index) => (
        <GlassView
          key={pill}
          style={styles.pillItem}
          effect={selected === index ? "regular" : "clear"}
          cornerRadius={20}
          tintColor={selected === index ? "rgba(0, 122, 255, 0.2)" : undefined}
          enablePressAnimation
          shadowIntensity={selected === index ? 0.12 : 0.05}
        >
          <TouchableOpacity
            style={styles.pillInner}
            onPress={() => setSelected(index)}
            activeOpacity={1}
          >
            <Text
              style={[
                styles.pillText,
                selected === index && styles.pillTextActive,
              ]}
            >
              {pill}
            </Text>
          </TouchableOpacity>
        </GlassView>
      ))}
    </GlassContainer>
  );
}

export default function GlassNavBars() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Navigation & Bars</Text>

      <Text style={styles.subtitle}>Toolbar</Text>
      <GlassToolbar />

      <Text style={styles.subtitle}>Tab Bar</Text>
      <GlassTabBar />

      <Text style={styles.subtitle}>Pill Navigation</Text>
      <GlassPillNav />
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
  // Toolbar
  toolbar: {
    height: 52,
  },
  toolbarInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  toolbarTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#fff",
  },
  toolbarButton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
  },
  // Tab Bar
  tabBar: {
    height: 64,
  },
  tabBarInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabItem: {
    alignItems: "center",
    gap: 2,
  },
  tabIcon: {
    fontSize: 22,
    color: "rgba(255, 255, 255, 0.45)",
  },
  tabIconActive: {
    color: "#007AFF",
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.45)",
  },
  tabLabelActive: {
    color: "#007AFF",
  },
  // Pill Nav
  pillNav: {
    flexDirection: "row",
    gap: 2,
    alignSelf: "flex-start",
  },
  pillItem: {
    height: 38,
    paddingHorizontal: 4,
  },
  pillInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  pillText: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.6)",
  },
  pillTextActive: {
    color: "#fff",
  },
});
