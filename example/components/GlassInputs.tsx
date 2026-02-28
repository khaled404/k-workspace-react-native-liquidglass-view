import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  GlassView,
  GlassCard,
} from "@k-workspace/react-native-liquidglass-view";

function GlassTextField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
}) {
  return (
    <View style={styles.fieldWrapper}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <GlassView
        style={styles.inputContainer}
        effect="clear"
        cornerRadius={12}
        shadowIntensity={0.08}
      >
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="rgba(255, 255, 255, 0.35)"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />
      </GlassView>
    </View>
  );
}

function GlassSearchBar() {
  const [query, setQuery] = useState("");

  return (
    <GlassView
      style={styles.searchBar}
      effect="clear"
      cornerRadius={14}
      shadowIntensity={0.1}
    >
      <View style={styles.searchInner}>
        <Text style={styles.searchIcon}>{"\u2315"}</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="rgba(255, 255, 255, 0.35)"
          value={query}
          onChangeText={setQuery}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery("")}>
            <Text style={styles.clearButton}>{"\u2715"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </GlassView>
  );
}

export default function GlassInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Inputs & Forms</Text>

      <GlassSearchBar />

      {/* Login form */}
      <GlassCard cornerRadius={20} effect="regular" shadowIntensity={0.15}>
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Sign In</Text>

          <GlassTextField
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <GlassTextField
            label="Password"
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <GlassView
            style={styles.submitButton}
            effect="regular"
            cornerRadius={12}
            enablePressAnimation
            tintColor="rgba(0, 122, 255, 0.25)"
            shadowIntensity={0.12}
          >
            <TouchableOpacity style={styles.submitInner} activeOpacity={1}>
              <Text style={styles.submitText}>Sign In</Text>
            </TouchableOpacity>
          </GlassView>
        </View>
      </GlassCard>

      {/* Text area */}
      <Text style={styles.subtitle}>Multi-line Input</Text>
      <GlassView
        style={styles.textArea}
        effect="clear"
        cornerRadius={16}
        shadowIntensity={0.1}
      >
        <TextInput
          style={styles.textAreaInput}
          placeholder="Type your message..."
          placeholderTextColor="rgba(255, 255, 255, 0.35)"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </GlassView>
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
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: 8,
  },
  // Search bar
  searchBar: {
    height: 48,
  },
  searchInner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 8,
  },
  searchIcon: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.5)",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
  },
  clearButton: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.5)",
    padding: 4,
  },
  // Form
  formCard: {
    padding: 20,
    gap: 16,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  fieldWrapper: {
    gap: 6,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.7)",
  },
  inputContainer: {
    height: 48,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 14,
    fontSize: 16,
    color: "#fff",
  },
  submitButton: {
    height: 48,
    marginTop: 4,
  },
  submitInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#007AFF",
  },
  // Text area
  textArea: {
    minHeight: 120,
  },
  textAreaInput: {
    flex: 1,
    padding: 14,
    fontSize: 16,
    color: "#fff",
    lineHeight: 22,
  },
});
