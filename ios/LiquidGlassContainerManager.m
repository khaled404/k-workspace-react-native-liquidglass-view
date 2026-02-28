#import <React/RCTViewManager.h>
#import "react_native_liquidGlass_view-Swift.h"

@interface LiquidGlassContainerManager : RCTViewManager
@end

@implementation LiquidGlassContainerManager

RCT_EXPORT_MODULE(RNLiquidGlassContainer)

- (UIView *)view {
    return [[BNGlassContainerView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(spacing, CGFloat)

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

@end
