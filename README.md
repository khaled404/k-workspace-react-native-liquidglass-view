# @k-workspace/react-native-liquidglass-view

iOS 26 Liquid Glass effect for React Native. Wraps Apple's native `UIGlassEffect` with configurable styles, shadows, press animations, entrance transitions, and glass container merging.

> **iOS 26+ only.** On older iOS versions and Android, a translucent fallback view is rendered automatically.

## Demo

<video src="https://github.com/khaled404/k-workspace-react-native-liquidglass-view/releases/download/v0.0.1/exampls.mp4" controls muted playsinline></video>

## Installation

```bash
npm install @k-workspace/react-native-liquidglass-view
```

Then install the native iOS dependency:

```bash
cd ios && pod install
```

## Requirements

| Requirement    | Version                 |
| -------------- | ----------------------- |
| React Native   | >= 0.73                 |
| iOS Deployment | >= 15.1                 |
| Xcode          | 26+ (for UIGlassEffect) |
| Swift          | 5.0+                    |

## Usage

### GlassCard

An opinionated card component with sensible defaults — the easiest way to add glass surfaces.

```tsx
import { GlassCard } from "@k-workspace/react-native-liquidglass-view";

<GlassCard cornerRadius={20} effect="clear">
  <Text>Hello, Glass</Text>
</GlassCard>;
```

### GlassView

A lower-level component exposing every native prop for full control.

```tsx
import { GlassView } from "@k-workspace/react-native-liquidglass-view";

<GlassView
  style={{ width: 300, height: 200 }}
  effect="regular"
  cornerRadius={24}
  tintColor="rgba(100, 120, 255, 0.15)"
  colorScheme="dark"
  interactive={true}
  shadowIntensity={0.2}
  enablePressAnimation
  enableEntrance
>
  <Text>Full control</Text>
</GlassView>;
```

### GlassContainer

Groups child glass views so their edges merge together (uses `UIGlassContainerEffect`).

```tsx
import {
  GlassContainer,
  GlassView,
} from "@k-workspace/react-native-liquidglass-view";

<GlassContainer spacing={4}>
  <GlassView style={{ flex: 1 }}>
    <Text>Left</Text>
  </GlassView>
  <GlassView style={{ flex: 1 }}>
    <Text>Right</Text>
  </GlassView>
</GlassContainer>;
```

## Props

### LiquidGlassProps (GlassCard & GlassView)

| Prop                   | Type                   | Default     | Description                                        |
| ---------------------- | ---------------------- | ----------- | -------------------------------------------------- |
| `effect`               | `'regular' \| 'clear'` | `'clear'`   | Visual weight of the glass material.               |
| `cornerRadius`         | `number`               | `16`        | Corner radius with continuous (Apple-style) curve. |
| `tintColor`            | `string`               | `undefined` | Semi-transparent color blended over the glass.     |
| `colorScheme`          | `'light' \| 'dark'`    | System      | Override the system color scheme for this view.    |
| `interactive`          | `boolean`              | `true`      | Whether the glass responds to touch.               |
| `shadowIntensity`      | `number`               | `0.15`      | Elevation shadow opacity (0 – 1).                  |
| `enablePressAnimation` | `boolean`              | `false`     | Spring scale animation + haptic on press.          |
| `enableEntrance`       | `boolean`              | `false`     | Fade + translate-up entrance animation.            |

### LiquidGlassContainerProps (GlassContainer)

| Prop      | Type     | Default | Description                                            |
| --------- | -------- | ------- | ------------------------------------------------------ |
| `spacing` | `number` | `0`     | Distance at which child glass elements begin to merge. |

## Platform Support Check

```ts
import { isLiquidGlassSupported } from "@k-workspace/react-native-liquidglass-view";

if (isLiquidGlassSupported) {
  // iOS 26+ — real glass
} else {
  // Fallback rendered automatically
}
```

## Platform Support

| Platform | Status                              |
| -------- | ----------------------------------- |
| iOS 26+  | Full native `UIGlassEffect` support |
| iOS < 26 | Translucent fallback view           |
| Android  | In progress                         |

> Android native support is currently being developed. In the meantime, a translucent `<View>` fallback is rendered automatically so your layout remains intact on all platforms.

## How It Works

- On **iOS 26+**, the native view creates a `UIVisualEffectView` backed by `UIGlassEffect` (or `UIGlassContainerEffect` for the container). It adds:
  - A subtle white edge border for glass definition
  - A specular top-highlight gradient simulating overhead light
  - Dual-layer shadows (contact + elevation) for depth
  - Optional spring press animation with haptic feedback
  - Optional fade-in entrance animation

- On **older iOS** and **Android**, a styled `<View>` with translucent background, border, and shadow is rendered as a fallback.

## License

MIT
