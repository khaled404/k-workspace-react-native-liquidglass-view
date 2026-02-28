import UIKit

@objcMembers
@objc(BNGlassContainerView)
public class BNGlassContainerView: UIView {

    private var containerEffectView: UIVisualEffectView?

    // MARK: - React Native Props

    @objc public var spacing: CGFloat = 0 {
        didSet { rebuildEffect() }
    }

    // MARK: - Init

    public override init(frame: CGRect) {
        super.init(frame: frame)
        commonInit()
    }

    public required init?(coder: NSCoder) {
        super.init(coder: coder)
        commonInit()
    }

    private func commonInit() {
        backgroundColor = .clear
        clipsToBounds = false
        buildEffect()
    }

    // MARK: - Container Effect

    private func buildEffect() {
        let reactChildren: [UIView] = subviews
            .filter { $0 !== containerEffectView }

        containerEffectView?.removeFromSuperview()
        containerEffectView = nil

    #if compiler(>=6.2)
        if #available(iOS 26.0, *) {
            guard NSClassFromString("UIGlassContainerEffect") != nil else { return }

            let containerEffect = UIGlassContainerEffect()
            containerEffect.spacing = spacing

            let ev = UIVisualEffectView(effect: containerEffect)
            ev.autoresizingMask = [.flexibleWidth, .flexibleHeight]
            ev.frame = bounds
            insertSubview(ev, at: 0)
            containerEffectView = ev

            for child in reactChildren {
                insertSubview(child, aboveSubview: ev)
            }
        }
    #endif
    }

    private func rebuildEffect() {
        buildEffect()
    }

    // MARK: - Layout

    public override func layoutSubviews() {
        super.layoutSubviews()
        containerEffectView?.frame = bounds
        if let ev = containerEffectView {
            sendSubviewToBack(ev)
        }
    }

    // MARK: - React Native Subview Management

    @objc public func insertReactSubview(_ subview: UIView!, at atIndex: Int) {
        if let ev = containerEffectView {
            insertSubview(subview, aboveSubview: ev)
        } else {
            insertSubview(subview, at: atIndex)
        }
    }

    @objc public func removeReactSubview(_ subview: UIView!) {
        subview?.removeFromSuperview()
    }
}
