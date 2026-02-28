import React from "react";
import {
  Platform,
  requireNativeComponent,
  StyleProp,
  ViewStyle,
} from "react-native";

export interface LiquidGlassProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  /**
   * Blends a semi-transparent color over the glass surface.
   * Accepts any React Native color string (e.g. "rgba(255,0,0,0.2)").
   */
  tintColor?: string;
  /**
   * When false, touch events pass through the glass to views below.
   * @default true
   */
  interactive?: boolean;
  /**
   * Force the glass material to render in a specific colour scheme
   * regardless of the system setting.
   */
  colorScheme?: "light" | "dark";
  /**
   * Visual weight of the glass material.
   * - "regular" — full glass (default)
   * - "clear"   — lighter, more transparent glass
   * @default "regular"
   */
  effect?: "regular" | "clear";
  /**
   * Corner radius applied to the glass surface.
   * Uses continuous corner curve for Apple-style rounded corners.
   * @default 16
   */
  cornerRadius?: number;
  /**
   * Controls the opacity of the main elevation shadow.
   * Range: 0 (no shadow) to 1 (fully opaque shadow).
   * @default 0.15
   */
  shadowIntensity?: number;
  /**
   * Enables a spring press-in/release scale animation with haptic feedback.
   * @default false
   */
  enablePressAnimation?: boolean;
  /**
   * Enables a fade+translate entrance animation when the view first appears.
   * @default false
   */
  enableEntrance?: boolean;
}

export interface LiquidGlassContainerProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  /**
   * The distance between child glass elements at which they begin to merge.
   * @default 0
   */
  spacing?: number;
}

export const isLiquidGlassSupported =
  Platform.OS === "ios" && parseInt(Platform.Version as string, 10) >= 26;

export const NativeLiquidGlassView = isLiquidGlassSupported
  ? requireNativeComponent<LiquidGlassProps>("RNLiquidGlass")
  : null;

export const NativeLiquidGlassContainerView = isLiquidGlassSupported
  ? requireNativeComponent<LiquidGlassContainerProps>("RNLiquidGlassContainer")
  : null;
