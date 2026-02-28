import UIKit

// MARK: - Effect Style Enum

@objc public enum BNGlassEffectStyle: Int {
    case regular
    case clear

#if compiler(>=6.2)
    @available(iOS 26.0, *)
    var uiGlassStyle: UIGlassEffect.Style {
        switch self {
        case .regular: return .regular
        case .clear:   return .clear
        }
    }
#endif
}

// MARK: - BNGlassView

@objcMembers
@objc(BNGlassView)
public class BNGlassView: UIView {

    // MARK: - Sublayers & Subviews

    private var glassEffectView: UIVisualEffectView?
    private var contactShadowLayer: CALayer?
    private var elevationShadowLayer: CALayer?
    private var specularLayer: CAGradientLayer?
    private lazy var feedbackGenerator = UIImpactFeedbackGenerator(style: .light)

    // MARK: - React Native Props

    @objc public var cornerRadius: CGFloat = 16 {
        didSet { applyCornerRadius() }
    }

    @objc public var glassTintColor: UIColor? {
        didSet { rebuildEffect() }
    }

    @objc public var effect: NSString = "regular" {
        didSet { rebuildEffect() }
    }

    @objc public var interactive: Bool = true {
        didSet { rebuildEffect() }
    }

    @objc public var colorScheme: NSString? {
        didSet { applyColorScheme() }
    }

    @objc public var shadowIntensity: CGFloat = 0.15 {
        didSet { updateShadows() }
    }

    @objc public var enablePressAnimation: Bool = false

    @objc public var enableEntrance: Bool = false

    // MARK: - Private State

    private var isPressed = false
    private var hasAnimatedEntrance = false
    private var currentEffectStyle: BNGlassEffectStyle = .regular

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
        layer.cornerCurve = .continuous
        setupShadowLayers()
        buildEffect()
    }

    // MARK: - Glass Effect

    private func buildEffect() {
        currentEffectStyle = (effect as String) == "clear" ? .clear : .regular

        let reactChildren: [UIView] = subviews
            .filter { $0 !== glassEffectView }

        specularLayer?.removeFromSuperlayer()
        specularLayer = nil
        glassEffectView?.removeFromSuperview()
        glassEffectView = nil

    #if compiler(>=6.2)
        if #available(iOS 26.0, *) {
            guard let glassEffectClass = NSClassFromString("UIGlassEffect") as? NSObject.Type else { return }
            guard glassEffectClass.responds(to: Selector(("effectWithStyle:"))) else { return }

            let glass = UIGlassEffect(style: currentEffectStyle.uiGlassStyle)
            glass.isInteractive = interactive

            if let tint = glassTintColor {
                glass.tintColor = tint
            }

            let ev = UIVisualEffectView(effect: glass)
            ev.autoresizingMask = [.flexibleWidth, .flexibleHeight]
            ev.frame = bounds
            ev.clipsToBounds = true
            ev.layer.cornerRadius = cornerRadius
            ev.layer.cornerCurve = .continuous

            ev.layer.borderWidth = 0.5
            ev.layer.borderColor = UIColor.white.withAlphaComponent(0.3).cgColor

            insertSubview(ev, at: 0)
            glassEffectView = ev

            let specular = CAGradientLayer()
            specular.colors = [
                UIColor.white.withAlphaComponent(0.15).cgColor,
                UIColor.white.withAlphaComponent(0.0).cgColor,
            ]
            specular.startPoint = CGPoint(x: 0.5, y: 0)
            specular.endPoint = CGPoint(x: 0.5, y: 1)
            specular.frame = CGRect(x: 0, y: 0, width: bounds.width, height: 6)
            specular.cornerRadius = cornerRadius
            specular.maskedCorners = [.layerMinXMinYCorner, .layerMaxXMinYCorner]
            ev.contentView.layer.addSublayer(specular)
            specularLayer = specular

            for child in reactChildren {
                insertSubview(child, aboveSubview: ev)
            }

            applyCornerRadius()
        }
    #endif
    }

    private func rebuildEffect() {
        buildEffect()
        updateShadows()
    }

    // MARK: - Shadow System

    private func setupShadowLayers() {
        let contact = CALayer()
        contact.shadowColor = UIColor.black.cgColor
        contact.shadowOffset = CGSize(width: 0, height: 2)
        contact.shadowRadius = 4
        contact.shadowOpacity = 0.08
        layer.insertSublayer(contact, at: 0)
        contactShadowLayer = contact

        let elevation = CALayer()
        elevation.shadowColor = UIColor.black.cgColor
        elevation.shadowOffset = CGSize(width: 0, height: 12)
        elevation.shadowRadius = 24
        elevation.shadowOpacity = Float(shadowIntensity)
        layer.insertSublayer(elevation, at: 0)
        elevationShadowLayer = elevation
    }

    private func updateShadows() {
        guard bounds.width > 0, bounds.height > 0 else { return }

        let shadowPath = UIBezierPath(
            roundedRect: bounds,
            cornerRadius: cornerRadius
        ).cgPath

        contactShadowLayer?.shadowPath = shadowPath
        contactShadowLayer?.frame = bounds

        elevationShadowLayer?.shadowPath = shadowPath
        elevationShadowLayer?.frame = bounds
        elevationShadowLayer?.shadowOpacity = Float(shadowIntensity)
    }

    // MARK: - Corner Radius

    private func applyCornerRadius() {
        layer.cornerRadius = cornerRadius
        glassEffectView?.layer.cornerRadius = cornerRadius
        specularLayer?.cornerRadius = cornerRadius
        updateShadows()
    }

    // MARK: - Color Scheme

    private func applyColorScheme() {
        guard let scheme = colorScheme as String? else {
            overrideUserInterfaceStyle = .unspecified
            return
        }
        switch scheme {
        case "dark":  overrideUserInterfaceStyle = .dark
        case "light": overrideUserInterfaceStyle = .light
        default:      overrideUserInterfaceStyle = .unspecified
        }
    }

    // MARK: - Touch Animation

    public override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        super.touchesBegan(touches, with: event)
        guard enablePressAnimation, !isPressed else { return }
        isPressed = true
        feedbackGenerator.impactOccurred()
        animatePress(pressed: true)
    }

    public override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
        super.touchesEnded(touches, with: event)
        guard enablePressAnimation, isPressed else { return }
        isPressed = false
        animatePress(pressed: false)
    }

    public override func touchesCancelled(_ touches: Set<UITouch>, with event: UIEvent?) {
        super.touchesCancelled(touches, with: event)
        guard enablePressAnimation, isPressed else { return }
        isPressed = false
        animatePress(pressed: false)
    }

    private func animatePress(pressed: Bool) {
        let scale: CGFloat = pressed ? 0.97 : 1.0
        let elevationOpacity: Float = pressed
            ? Float(shadowIntensity * 0.4)
            : Float(shadowIntensity)
        let contactOpacity: Float = pressed ? 0.12 : 0.08

        UIView.animate(
            withDuration: 0.4,
            delay: 0,
            usingSpringWithDamping: pressed ? 0.65 : 0.5,
            initialSpringVelocity: pressed ? 0 : 0.8,
            options: [.allowUserInteraction, .beginFromCurrentState]
        ) {
            self.transform = CGAffineTransform(scaleX: scale, y: scale)
        }

        let shadowAnim = CABasicAnimation(keyPath: "shadowOpacity")
        shadowAnim.toValue = elevationOpacity
        shadowAnim.duration = 0.3
        shadowAnim.fillMode = .forwards
        shadowAnim.isRemovedOnCompletion = false
        elevationShadowLayer?.add(shadowAnim, forKey: "shadowOpacity")

        let contactAnim = CABasicAnimation(keyPath: "shadowOpacity")
        contactAnim.toValue = contactOpacity
        contactAnim.duration = 0.3
        contactAnim.fillMode = .forwards
        contactAnim.isRemovedOnCompletion = false
        contactShadowLayer?.add(contactAnim, forKey: "shadowOpacity")
    }

    // MARK: - Entrance Animation

    public override func didMoveToWindow() {
        super.didMoveToWindow()
        guard enableEntrance, !hasAnimatedEntrance, window != nil else { return }
        hasAnimatedEntrance = true

        alpha = 0
        transform = CGAffineTransform(translationX: 0, y: 8)

        UIView.animate(
            withDuration: 0.6,
            delay: 0,
            usingSpringWithDamping: 0.7,
            initialSpringVelocity: 0,
            options: [.allowUserInteraction]
        ) {
            self.alpha = 1
            self.transform = .identity
        }
    }

    // MARK: - Layout

    public override func layoutSubviews() {
        super.layoutSubviews()
        glassEffectView?.frame = bounds
        specularLayer?.frame = CGRect(x: 0, y: 0, width: bounds.width, height: 6)

        if let ev = glassEffectView {
            sendSubviewToBack(ev)
        }

        updateShadows()
    }

    // MARK: - React Native Subview Management

    @objc public func insertReactSubview(_ subview: UIView!, at atIndex: Int) {
        if let ev = glassEffectView {
            insertSubview(subview, aboveSubview: ev)
        } else {
            insertSubview(subview, at: atIndex)
        }
    }

    @objc public func removeReactSubview(_ subview: UIView!) {
        subview?.removeFromSuperview()
    }
}
