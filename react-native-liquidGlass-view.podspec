Pod::Spec.new do |s|
  s.name           = 'react-native-liquidGlass-view'
  s.version        = '0.1.0'
  s.summary        = 'iOS 26 Liquid Glass effect for React Native'
  s.description    = 'Native UIGlassEffect wrapper for React Native with configurable styles, shadows, press animations, entrance transitions, and glass container merging.'
  s.author         = 'khaled404'
  s.homepage       = 'https://github.com/khaled404/k-workspace-react-native-liquidglass-view'
  s.license        = { :type => 'MIT' }
  s.platforms      = { :ios => '15.1' }
  s.source         = { :git => 'https://github.com/khaled404/k-workspace-react-native-liquidglass-view.git', :tag => s.version.to_s }
  s.static_framework = true

  s.dependency 'React-Core'

  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'SWIFT_VERSION' => '5.0',
  }

  s.source_files = 'ios/**/*.{swift,h,m}'
end
