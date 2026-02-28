import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  GlassCard,
  GlassView,
} from "@k-workspace/react-native-liquidglass-view";

function InfoCard({
  title,
  subtitle,
  value,
  tintColor,
}: {
  title: string;
  subtitle: string;
  value: string;
  tintColor?: string;
}) {
  return (
    <GlassCard
      cornerRadius={20}
      effect="clear"
      enableEntrance
      shadowIntensity={0.15}
      tintColor={tintColor}
    >
      <View style={styles.infoCardContent}>
        <Text style={styles.infoValue}>{value}</Text>
        <Text style={styles.infoTitle}>{title}</Text>
        <Text style={styles.infoSubtitle}>{subtitle}</Text>
      </View>
    </GlassCard>
  );
}

export default function GlassBoxes() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Cards & Boxes</Text>

      {/* Basic card */}
      <GlassCard cornerRadius={20} effect="regular" shadowIntensity={0.18}>
        <View style={styles.basicCard}>
          <Text style={styles.cardTitle}>Regular Glass Card</Text>
          <Text style={styles.cardBody}>
            This card uses the "regular" effect with higher opacity glass
            material for a prominent surface.
          </Text>
        </View>
      </GlassCard>

      {/* Clear card */}
      <GlassCard cornerRadius={20} effect="clear" shadowIntensity={0.1}>
        <View style={styles.basicCard}>
          <Text style={styles.cardTitle}>Clear Glass Card</Text>
          <Text style={styles.cardBody}>
            The "clear" effect creates a lighter, more transparent glass
            suitable for secondary surfaces.
          </Text>
        </View>
      </GlassCard>

      {/* Stat cards row */}
      <View style={styles.statRow}>
        <View style={styles.statItem}>
          <InfoCard
            title="Steps"
            subtitle="Today"
            value="8,421"
            tintColor="rgba(52, 199, 89, 0.15)"
          />
        </View>
        <View style={styles.statItem}>
          <InfoCard
            title="Heart Rate"
            subtitle="Current"
            value="72 bpm"
            tintColor="rgba(255, 59, 48, 0.15)"
          />
        </View>
      </View>

      {/* Profile card */}
      <GlassView
        style={styles.profileCard}
        effect="regular"
        cornerRadius={24}
        enableEntrance
        shadowIntensity={0.2}
      >
        <View style={styles.profileContent}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Jane Doe</Text>
            <Text style={styles.profileRole}>iOS Developer</Text>
          </View>
        </View>
      </GlassView>

      {/* Dark-scheme card */}
      <GlassView
        style={styles.darkCard}
        effect="regular"
        cornerRadius={20}
        colorScheme="dark"
        shadowIntensity={0.25}
        enableEntrance
      >
        <View style={styles.basicCard}>
          <Text style={styles.cardTitle}>Dark Scheme Override</Text>
          <Text style={styles.cardBody}>
            This card forces the dark color scheme regardless of system setting.
          </Text>
        </View>
      </GlassView>

      {/* Light-scheme card */}
      <GlassView
        style={styles.lightCard}
        effect="regular"
        cornerRadius={20}
        colorScheme="light"
        shadowIntensity={0.12}
        enableEntrance
      >
        <View style={styles.basicCard}>
          <Text style={[styles.cardTitle, { color: "#1c1c1e" }]}>
            Light Scheme Override
          </Text>
          <Text style={[styles.cardBody, { color: "rgba(0, 0, 0, 0.6)" }]}>
            Forced into light mode — edges and material adapt to a lighter
            palette.
          </Text>
        </View>
      </GlassView>

      {/* Notification card */}
      <GlassCard
        cornerRadius={16}
        effect="clear"
        enablePressAnimation
        tintColor="rgba(0, 122, 255, 0.12)"
        shadowIntensity={0.1}
      >
        <View style={styles.notificationCard}>
          <View style={styles.notifDot} />
          <View style={{ flex: 1 }}>
            <Text style={styles.notifTitle}>New Update Available</Text>
            <Text style={styles.notifBody}>
              Version 2.0 includes performance improvements and new features.
            </Text>
          </View>
        </View>
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
  basicCard: {
    padding: 20,
    gap: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  cardBody: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: 22,
  },
  statRow: {
    flexDirection: "row",
    gap: 12,
  },
  statItem: {
    flex: 1,
  },
  infoCardContent: {
    padding: 16,
    gap: 2,
  },
  infoValue: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
    marginTop: 4,
  },
  infoSubtitle: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.5)",
  },
  profileCard: {
    minHeight: 80,
  },
  profileContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 14,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0, 122, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  profileInfo: {
    gap: 2,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  profileRole: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
  darkCard: {},
  lightCard: {},
  notificationCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  notifDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#007AFF",
  },
  notifTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  notifBody: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
    marginTop: 2,
  },
});
