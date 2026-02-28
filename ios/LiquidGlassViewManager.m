#import <React/RCTViewManager.h>
#import <React/RCTConvert.h>
#import "react_native_liquidGlass_view-Swift.h"

@interface LiquidGlassViewManager : RCTViewManager
@end

@implementation LiquidGlassViewManager

RCT_EXPORT_MODULE(RNLiquidGlass)

- (UIView *)view {
  return [[BNGlassView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(cornerRadius, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(effect, NSString)
RCT_EXPORT_VIEW_PROPERTY(interactive, BOOL)
RCT_EXPORT_VIEW_PROPERTY(colorScheme, NSString)

// Map JS "tintColor" to the native "glassTintColor" property
// to avoid conflicting with UIView's built-in tintColor.
RCT_CUSTOM_VIEW_PROPERTY(tintColor, UIColor, BNGlassView)
{
  view.glassTintColor = json ? [RCTConvert UIColor:json] : nil;
}

RCT_EXPORT_VIEW_PROPERTY(shadowIntensity, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(enablePressAnimation, BOOL)
RCT_EXPORT_VIEW_PROPERTY(enableEntrance, BOOL)

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

@end
