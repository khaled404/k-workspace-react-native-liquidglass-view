import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GlassView } from "@k-workspace/react-native-liquidglass-view";

function GlassToggle({
  label,
  value,
  onToggle,
}: {
  label: string;
  value: boolean;
  onToggle: () => void;
}) {
  return (
    <GlassView
      style={styles.toggleRow}
      effect="clear"
      cornerRadius={14}
      shadowIntensity={0.1}
    >
      <View style={styles.toggleContent}>
        <Text style={styles.toggleLabel}>{label}</Text>
        <TouchableOpacity onPress={onToggle} activeOpacity={0.8}>
          <GlassView
            style={[styles.track, value && styles.trackActive]}
            effect={value ? "regular" : "clear"}
            cornerRadius={16}
            tintColor={
              value ? "rgba(52, 199, 89, 0.35)" : "rgba(120, 120, 128, 0.2)"
            }
            shadowIntensity={0.08}
          >
            <View style={[styles.thumb, value && styles.thumbActive]} />
          </GlassView>
        </TouchableOpacity>
      </View>
    </GlassView>
  );
}

function GlassRadioGroup({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <GlassView
      style={styles.radioGroup}
      effect="clear"
      cornerRadius={14}
      shadowIntensity={0.1}
    >
      <View style={styles.radioContent}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.radioOption}
            onPress={() => onSelect(option)}
            activeOpacity={0.7}
          >
            <View style={styles.radioOuter}>
              {selected === option && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </GlassView>
  );
}

function GlassSegmentedControl({
  segments,
  selected,
  onSelect,
}: {
  segments: string[];
  selected: number;
  onSelect: (index: number) => void;
}) {
  return (
    <GlassView
      style={styles.segmentedControl}
      effect="clear"
      cornerRadius={12}
      shadowIntensity={0.08}
    >
      <View style={styles.segmentedInner}>
        {segments.map((segment, index) => (
          <TouchableOpacity
            key={segment}
            style={styles.segmentTouchable}
            onPress={() => onSelect(index)}
            activeOpacity={0.7}
          >
            {selected === index ? (
              <GlassView
                style={styles.segmentActive}
                effect="regular"
                cornerRadius={9}
                tintColor="rgba(255, 255, 255, 0.15)"
                shadowIntensity={0.12}
              >
                <Text style={[styles.segmentText, styles.segmentTextActive]}>
                  {segment}
                </Text>
              </GlassView>
            ) : (
              <View style={styles.segmentInactive}>
                <Text style={styles.segmentText}>{segment}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </GlassView>
  );
}

export default function GlassSwitches() {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState("Option A");
  const [selectedSegment, setSelectedSegment] = useState(0);

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Switches & Controls</Text>

      <GlassToggle
        label="Wi-Fi"
        value={wifi}
        onToggle={() => setWifi((v) => !v)}
      />
      <GlassToggle
        label="Bluetooth"
        value={bluetooth}
        onToggle={() => setBluetooth((v) => !v)}
      />
      <GlassToggle
        label="Dark Mode"
        value={darkMode}
        onToggle={() => setDarkMode((v) => !v)}
      />

      <Text style={styles.subtitle}>Radio Group</Text>
      <GlassRadioGroup
        options={["Option A", "Option B", "Option C"]}
        selected={selectedRadio}
        onSelect={setSelectedRadio}
      />

      <Text style={styles.subtitle}>Segmented Control</Text>
      <GlassSegmentedControl
        segments={["Daily", "Weekly", "Monthly"]}
        selected={selectedSegment}
        onSelect={setSelectedSegment}
      />
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
  toggleRow: {
    height: 56,
  },
  toggleContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  toggleLabel: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "500",
  },
  track: {
    width: 51,
    height: 31,
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  trackActive: {},
  thumb: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  thumbActive: {
    alignSelf: "flex-end",
  },
  radioGroup: {
    paddingVertical: 4,
  },
  radioContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 16,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#007AFF",
  },
  radioLabel: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  segmentedControl: {
    height: 44,
  },
  segmentedInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 3,
    gap: 2,
  },
  segmentTouchable: {
    flex: 1,
    height: 36,
  },
  segmentActive: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  segmentInactive: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  segmentText: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.6)",
  },
  segmentTextActive: {
    color: "#fff",
  },
});
