import React from "react";
import { StyleSheet, View, StyleProp, ViewStyle } from "react-native";
import {
  isLiquidGlassSupported,
  NativeLiquidGlassView,
  NativeLiquidGlassContainerView,
} from "./NativeLiquidGlass";
import type {
  LiquidGlassProps,
  LiquidGlassContainerProps,
} from "./NativeLiquidGlass";

export type { LiquidGlassProps, LiquidGlassContainerProps };
export { isLiquidGlassSupported };

// GlassCard — opinionated card wrapper with sensible defaults

export interface GlassCardProps extends Pick<
  LiquidGlassProps,
  | "tintColor"
  | "colorScheme"
  | "effect"
  | "cornerRadius"
  | "shadowIntensity"
  | "enablePressAnimation"
  | "enableEntrance"
> {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  style,
  tintColor,
  colorScheme,
  effect = "clear",
  cornerRadius = 16,
  shadowIntensity,
  enablePressAnimation,
  enableEntrance,
}) => {
  if (!isLiquidGlassSupported || !NativeLiquidGlassView) {
    return (
      <View style={[styles.fallback, { borderRadius: cornerRadius }, style]}>
        {children}
      </View>
    );
  }

  return (
    <NativeLiquidGlassView
      style={style}
      tintColor={tintColor}
      colorScheme={colorScheme}
      effect={effect}
      cornerRadius={cornerRadius}
      shadowIntensity={shadowIntensity}
      enablePressAnimation={enablePressAnimation}
      enableEntrance={enableEntrance}
    >
      {children}
    </NativeLiquidGlassView>
  );
};

// GlassView — lower-level view exposing all native props

export interface GlassViewProps extends LiquidGlassProps {
  children: React.ReactNode;
}

export const GlassView: React.FC<GlassViewProps> = ({
  children,
  style,
  tintColor,
  interactive,
  colorScheme,
  effect = "clear",
  cornerRadius = 16,
  shadowIntensity,
  enablePressAnimation,
  enableEntrance,
}) => {
  if (!isLiquidGlassSupported || !NativeLiquidGlassView) {
    return (
      <View style={[styles.fallback, { borderRadius: cornerRadius }, style]}>
        {children}
      </View>
    );
  }

  return (
    <NativeLiquidGlassView
      style={[{ borderRadius: cornerRadius }, style]}
      tintColor={tintColor}
      colorScheme={colorScheme}
      interactive={interactive}
      effect={effect}
      cornerRadius={cornerRadius}
      shadowIntensity={shadowIntensity}
      enablePressAnimation={enablePressAnimation}
      enableEntrance={enableEntrance}
    >
      {children}
    </NativeLiquidGlassView>
  );
};

// GlassContainer — groups child glass views so they merge together

export interface GlassContainerProps extends LiquidGlassContainerProps {
  children: React.ReactNode;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  style,
  spacing = 0,
}) => {
  if (!isLiquidGlassSupported || !NativeLiquidGlassContainerView) {
    return <View style={style}>{children}</View>;
  }

  return (
    <NativeLiquidGlassContainerView style={style} spacing={spacing}>
      {children}
    </NativeLiquidGlassContainerView>
  );
};

const styles = StyleSheet.create({
  fallback: {
    backgroundColor: "rgba(225, 234, 240, 0.45)",
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.4)",
    shadowColor: "#000D2E",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 18,
  },
});

export default GlassCard;
