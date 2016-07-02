# Awesome React Native

<img src="https://travis-ci.org/jondot/awesome-react-native.svg?branch=master" alt="Build Status" />

A curated list of awesome articles, tutorials and resources dealing
with React Native.

Inspired by [awesome-go](https://github.com/avelino/awesome-go), which was in turn inspired by [awesome-python](https://github.com/vinta/awesome-python).

Many thanks to everyone on the [contributor list](https://github.com/jondot/awesome-react-native/graphs/contributors) :)

# Content

- [Articles](#articles)
- [Internals](#internals)
- [Components](#components)
- [Utilities](#utilities)
- [Seeds](#seeds)
- [Libraries](#libraries)
- [Examples](#examples)
- [Frameworks](#frameworks)
- [Tutorials](#tutorials)
- [Books](#books)
- [Videos](#videos)
- [Releases](#releases)

## Articles

Content published on the Web.

### Routing

- [Routing and Navigation in React Native](http://blog.paracode.com/2016/01/05/routing-and-navigation-in-react-native/)
- [What's up with NavigatorIOS, Navigator, and ExperimentalNavigator?](https://github.com/facebook/react-native/issues/6184), and [this](https://github.com/ericvicenti/navigation-rfc/blob/master/Docs/NavigationOverview.md), and [this](https://github.com/facebook/react-native/tree/master/Examples/UIExplorer/NavigationExperimental)

### Howtos

- [ListView and Immutable.js](https://medium.com/front-end-hacking/react-native-immutable-listview-example-78662fa64a15)
- [Getting Started with React Native Development on Windows](https://shift.infinite.red/getting-started-with-react-native-development-on-windows-90d85a72ae65#.lygadl38g)
- [Blueprint to becoming a React Native Developer](https://medium.com/@spencer_carli/blueprint-to-becoming-a-react-native-developer-6cad2b894887#.t3uw4j4u8)
- [How to Use the ListView Component](https://medium.com/@spencer_carli/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8#.ur0hyi3h9)

### Assorted

- [Avoiding the Keyboard](https://shift.infinite.red/avoiding-the-keyboard-in-react-native-56d05b9a1e81#.g1lwixck6)
- [React Native: Bringing modern web techniques to mobile](https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/)
- [First impressions using React Native](http://jlongster.com/First-Impressions-using-React-Native)
- [Wrapping Cocoapods for React Native](https://shift.infinite.red/beginner-s-guide-to-using-cocoapods-with-react-native-46cb4d372995#.wzp2qq1hn)
- [60 fps on the mobile web](http://engineering.flipboard.com/2015/02/mobile-web/)
- [Parse and React (incl. Native)](http://blog.parse.com/2015/03/25/parse-and-react-shared-chemistry/)
- [React Native: Initial Thoughts (opinion)](http://unredacted.redalemeden.com/2015/initial-thoughts-about-react-native/)
- [A Dynamic Crazy Native Mobile Future Powered by Javascript](https://medium.com/@clayallsopp/a-dynamic-crazy-native-mobile-future-powered-by-javascript-70f2d56b1987)
- [ReactNative NES & More](http://moduscreate.com/react-native-has-landed/)
- [React Native Installation and Setup](https://github.com/checkraiser/beginning-react-native/blob/master/1.Installation_and_setup.md)
- [Diary of Building an iOS App with React Native](http://herman.asia/building-a-flashcard-app-with-react-native)
- [Reflecting on React Native development](http://habd.as/reflecting-on-react-native-development/)
- [React-Native layout examples](http://browniefed.com/blog/2015/06/07/react-native-layout-examples/)
- [React Native in Production](https://medium.com/@clayallsopp/react-native-in-production-2b3c6e6078ad) - notes from Clay Allsop
- [React Native for Android](https://code.facebook.com/posts/1189117404435352/) and [issues](http://facebook.github.io/react-native/docs/known-issues.html)
- [An iOS Developer on React Native](https://medium.com/ios-os-x-development/an-ios-developer-on-react-native-1f24786c29f0)
- [React Native and WebRTC](https://webrtchacks.com/reacting-to-react-native-for-native-webrtc-apps-alexey-aylarov/)
- [Building 3 React Native Apps in One Summer](https://medium.com/@rpastorelle/building-3-react-native-apps-in-one-summer-dcd0c31454ff)
- [How to bridge a Swift view](http://browniefed.com/blog/2015/11/28/react-native-how-to-bridge-a-swift-view/)
- [Building a Native SoundCloud Android app with Redux](https://wiredcraft.com/blog/native-soundcloud-android-app/) - discussing redux, code reuse and performance on Android.
- [React Native Twitter exploding heart](http://browniefed.com/blog/2015/11/07/react-native-how-to-create-twitter-exploding-hearts/) - hardcore animations with Animation and ReactART
- [Using AI to discover UI components](https://www.youtube.com/watch?v=_iiKl0BB6ho) - fun image processing / AI assisted process to discover and generate React Native UI
- [Writing Android Components](https://medium.com/@sejoker/writing-android-component-for-react-native-e34802bf3377)
- [React Native and Fastlane](https://weluse.de/blog/react-native-deployment-with-fastlane.html) - small tweaks required to rig Fastlane with React Native
- [Unit Testing React Native with Mocha and Enzyme](https://blog.formidable.com/unit-testing-react-native-with-mocha-and-enzyme-51518f13ba73)
- [React Native's Layout Animation is Awesome](https://medium.com/@Jpoliachik/react-native-s-layoutanimation-is-awesome-4a4d317afd3e)


### Internals

- [Performance](https://facebook.github.io/react-native/docs/performance.html#common-sources-of-performance-problems)
- [Android Performance](https://facebook.github.io/react-native/docs/android-ui-performance.html)
- [React Native Debugger Internals](https://medium.com/@shaheenghiassy/deep-diving-react-native-debugging-ea406ed3a691)
- [Dirty-up and execute top-down](http://blog.vjeux.com/2015/javascript/dirty-up-and-execute-top-down.html) - @vjeux on React's optimizations for background color, layout, and more
- [React Packager README.md](https://github.com/facebook/react-native/blob/master/packager/README.md)
- [Optimizing React Native](https://www.youtube.com/watch?v=0MlT74erp60)
- [Supported Babel/Javascript Features](https://github.com/facebook/react-native/blob/master/babel-preset/configs/main.js)
- [Diving into React Native Performance](https://code.facebook.com/posts/895897210527114/)


## Components

Components and native modules. For more search [JS.COACH](https://js.coach/react-native).

### UI

- [apsl-react-native-button ★173](https://github.com/APSL/react-native-button) - React Native button component with rounded corners.
- [autoresponsive-react-native ★56](https://github.com/xudafeng/autoresponsive-react-native) - A Magical Layout Library For React
- [ex-navigator ★415](https://github.com/exponentjs/ex-navigator) - Route-centric navigation built on top of React Native's Navigator
- [react-native-ya-navigator ★31](https://github.com/xxsnakerxx/react-native-ya-navigator) - Yet another react native navigator component
- [gl-react-native ★754](https://github.com/ProjectSeptemberInc/gl-react-native) - use OpenGL for performant effects on images and videos
- [k-react-native-swipe-unlocker ★17](https://github.com/leowang721/k-react-native-swipe-unlocker) - A simple swipe unlock for React Native
- [metpro-react-native-progress ★15](https://github.com/imartingraham/react-native-progress) - Progress indicators and spinners for React Native using ReactART.
- [react-native-accordion ★138](https://github.com/naoufal/react-native-accordion) - An Accordion Component for React Native
- [react-native-action-button ★261](https://github.com/mastermoo/react-native-action-button) - A customizable Float Button Component for React Native
- [react-native-actionsheet-native ★3](https://github.com/slowpath/react-native-actionsheet) - Android ActionSheet support for React Native
- [react-native-activity-view ★209](https://github.com/naoufal/react-native-activity-view) - iOS share and action sheets for React Native
- [react-native-adbannerview ★32](https://github.com/Purii/react-native-adbannerview) - React Native Bridge for ADBannerView
- [react-native-alphabetlistview ★59](https://github.com/sunnylqm/react-native-alphabetlistview) - A Listview with a sidebar to jump to sections directly, based on johanneslumpe's react-native-selectablesectionlistview
- [react-native-android-blurryoverlay ★37](https://github.com/kwaak/react-native-android-blurryoverlay) - A react native android package to show a blurry overlay.
- [react-native-android-circles ★8](https://github.com/kwaak/react-native-android-circles) - A react native android package to show a circle progress view.
- [react-native-android-iconify ★27](https://github.com/lwhiteley/react-native-android-iconify) - icons for react native android using android-iconify
- [react-native-android-kit ★21](https://github.com/ayoubdev/react-native-android-kit) - A set of native Android UI components and modules for React Native framework (Android Design Support Library, TabLayout, Floating Action Button and more...).
- [react-native-android-statusbar ★77](https://github.com/NishanthShankar/react-native-android-statusbar) - A react native android package to control the status bar.
- [react-native-app-intro ★237](https://github.com/FuYaoDe/react-native-app-intro) - A React Native parallax effect app intro
- [react-native-awesome-button ★72](https://github.com/larsvinter/react-native-awesome-button) - A React Native component rendering a button supporting showing different appearances and functionality given the passed props
- [react-native-autolink ★27](https://github.com/joshswan/react-native-autolink) - Autolinking component for React Native
- [react-native-autocomplete ★81](https://github.com/nulrich/RCTAutoComplete) - React Native Component for MLPAutoCompleteTextField
- [react-native-autocomplete-input ★20](https://github.com/l-urence/react-native-autocomplete-input) - Pure javascript autocomplete input for react-native
- [react-native-avatar-gravatar ★1](https://github.com/niborb/react-native-gravatar) - React Native Gravatar component
- [react-native-bar-collapsible ★2](https://github.com/caroaguilar/react-native-bar-collapsible) - A Bar component that can be collapsible (toggle/accordion), clickable or text-only.
- [react-native-better-mapview ★3](https://github.com/ModusCreateOrg/react-native-better-mapview) - A better React Native implementation for iOS MapKit MapView
- [react-native-blur ★476](https://github.com/Kureev/react-native-blur) - React Native Blur component
- [react-native-fxblurview ★5](https://github.com/magus/react-native-fxblurview) - React Native wrapper for popular FXBlurView library for realtime, fine-tuned blur effects
- [react-native-button ★277](https://github.com/ide/react-native-button)
- [react-native-cache-image ★43](https://github.com/remobile/react-native-cache-image) - A cache-image for react-native
- [react-native-cacheable-image ★8](https://github.com/jayesbe/react-native-cacheable-image) - A filesystem cacheable image component for react-native
- [react-native-calendar-android ★26](https://github.com/chymtt/ReactNativeCalendarAndroid) - A simple material-themed calendar for react native android
- [react-native-calendar ★115](https://github.com/christopherdro/react-native-calendar) - Calendar Component for React Native
- [react-native-canvas ★61](https://github.com/lwansbrough/react-native-canvas) - A Canvas element for React Native
- [react-native-carousel ★197](https://github.com/nick/react-native-carousel) - Simple carousel component for react-native
- [react-native-carousel-control ★42](https://github.com/machadogj/react-native-carousel-control) - React Native Carousel control with support for iOS and Android.
- [react-native-chart ★439](https://github.com/onefold/react-native-chart) - react-native-chart is a simple module for adding line charts, area charts, or bar charts to your React Native app.
- [react-native-charts ★36](https://github.com/PrazAs/react-native-charts) - Delightfully-animated data visualization.
- [react-native-checkbox ★32](https://github.com/sconxu/react-native-checkbox) - Checkbox component for React native
- [react-native-circle-checkbox ★9](https://github.com/ParamoshkinAndrew/ReactNativeCircleCheckbox) - Circle checkbox component for React Native
- [react-native-circle-progress ★21](https://github.com/guodong000/react-native-circle-progress) - A custom Circle Progress Indocator for React Native
- [react-native-circle-view ★27](https://github.com/nucleartux/react-native-circle-view) - circle progress for react native android using CircleView
- [react-native-circular-progress ★152](https://github.com/bgryszko/react-native-circular-progress) - React Native component for creating animated, circular progress with ReactART
- [react-native-collapsible ★173](https://github.com/oblador/react-native-collapsible) - Animated collapsible component for React Native using the new Animated API with fallback. Good for accordions, toggles etc
- [react-native-countdown ★5](https://github.com/buhe/react-native-countdown) - react native countdown button
- [react-native-country-picker ★3](https://github.com/tofugear/react-native-country-picker) - React Native Country Picker
- [react-native-country-picker-modal ★51](https://github.com/xcarpentier/react-native-country-picker-modal) - Country picker provides a modal allowing a user to select a country from a list. It display a flag next to each country name.
- [react-native-create-new-file-ios ★0](https://github.com/rhaker/react-native-create-new-file-ios) - A react-native interface for creating a blank new file on ios. File must not already exist.
- [react-native-custom-actsheet ★24](https://github.com/guodong000/react-native-custom-actsheet) - A custom ActionSheet for react-native
- [react-native-custom-checkbox ★2](https://github.com/caroaguilar/react-native-custom-checkbox) - React Native checkbox that can be customize. Works for both Android and iOS.
- [react-native-dashed-border ★18](https://github.com/chirag04/react-native-dashed-border) - A  element for react-native
- [react-native-date ★37](https://github.com/nucleartux/react-native-date) - React Native date and time pickers for Android
- [react-native-timepicker ★8](https://github.com/milasevicius/react-native-timepicker) - React Native timepicker for iOS
- [react-native-datepicker ★26](https://github.com/xgfe/react-native-datepicker) - React Native date, datetime and time picker for both Android and IOS
- [react-native-device-display ★64](https://github.com/kkjdaniel/react-native-display-view) - A simple way to create dynamic views through device and display detection, allowing the creation of adaptable and universal apps.
- [react-native-dialogs ★161](https://github.com/aakashns/react-native-dialogs) - React Native wrappers for https://github.com/afollestad/material-dialogs
- [react-native-double-buffer ★1](https://github.com/alinz/react-native-double-buffer) - Simple React Native Double Buffer View
- [react-native-draggable-drawer ★13](https://github.com/llanox/react-native-draggable-drawer) - DraggableDrawer component for React Native.
- [react-native-drawer ★641](https://github.com/rt2zz/react-native-drawer) - React Native Drawer
- [react-native-dropbox-chooser ★10](https://github.com/tinycreative/react-native-dropbox-chooser) - React Native dropbox chooser module
- [react-native-dropdown-android ★50](https://github.com/chymtt/ReactNativeDropdownAndroid) - Simple wrapper for Android's Spinner to use with react-native
- [react-native-drop-refresh ★7](https://github.com/Obooman/RCTRefreshControl) - A pull down to refresh control for react native.
- [react-native-dropdownalert *5](https://github.com/devBrian/react-native-dropdownalert) - A dropdown alert that allows you to display bits of information to your user.
- [react-native-dropdown ★150](https://github.com/alinz/react-native-dropdown) - A better Select dropdown menu for react-native
- [react-native-effects-view ★176](https://github.com/voronianski/react-native-effects-view) - ReactNative Component that makes easy to use iOS8 UIVisualEffect
- [react-native-emoji ★45](https://github.com/jorilallo/react-native-emoji) - Emoji component for React Native
- [react-native-emoji-picker ★1](https://github.com/yonahforst/react-native-emoji-picker) - Simple Emoji picker for react-native with optional modal-like component
- [react-native-fading-slides ★15](https://github.com/chagasaway/react-native-fading-slides) - Simple looped fading slides carousel for React Native
- [react-native-fit-image ★27](https://github.com/huiseoul/react-native-fit-image) - Responsive image component to fit perfectly itself.
- [react-native-flex-label ★4](https://github.com/eccolabs/react-native-flex-label) - A text label for React Native that handles multiple lines of text with ellipses truncation as well as vertical alignment within it's view container.
- [react-native-floating-labels ★49](https://github.com/mayank-patel/react-native-floating-labels) - Reusabe floating lable component for react native
- [react-native-fm-form ★8](https://github.com/peter4k/react-native-fm-form) - Generate list view form of React Native in few line of codes
- [react-native-form-flux ★1](https://github.com/aksonov/react-native-form-flux) - React Native Form management using Flux architecture
- [react-native-form ★62](https://github.com/julianocomg/react-native-form) - A simple react-native component to wrap your form fields!
- [react-native-form-generator ★39](https://github.com/MichaelCereda/react-native-form-generator) - Generate amazing React Native forms in a breeze
- [react-native-fontbase ★0](https://github.com/frostney/react-native-fontbase) - Defining font sizes in React Native
- [react-native-fs-modal ★33](https://github.com/kirkness/react-native-fs-modal) - React native full screen modal component.
- [react-native-full-screen ★4](https://github.com/Anthonyzou/react-native-full-screen) - React Native FullScreen api and element
- [react-native-gesture-password ★103](https://github.com/spikef/react-native-gesture-password) - A gesture password component for React Native
- [react-native-gesture-recognizers ★96](https://github.com/johanneslumpe/react-native-gesture-recognizers) - Gesture recognizer decorators for react-native
- [react-native-gestures ★69](https://github.com/kiddkai/react-native-gestures) - composable gesture system in react native
- [react-native-gifted-form ★334](https://github.com/FaridSafi/react-native-gifted-form) - Form component for react-native
- [react-native-gifted-listview ★402](https://github.com/FaridSafi/react-native-gifted-listview) - A ListView that embed some recurrents features like pull-to-refresh, infinite scrolling and more for Android and iOS React-Native apps
- [react-native-gifted-messenger ★978](https://github.com/FaridSafi/react-native-gifted-messenger) - Ready-to-use chat interface for iOS and Android React-Native apps
- [react-native-gmaps ★64](https://github.com/teamrota/react-native-gmaps) - React Native Android Google Maps implementation.
- [react-native-geo-fencing ★7](https://github.com/surialabs/react-native-geo-fencing) - Native modules to determine if a location is within defined geographical boundaries using Google Geometry library
- [react-native-gravatar ★1](https://github.com/lwhiteley/react-native-gravatar) - react-native wrapper for gravatar-api
- [react-native-grid-view ★154](https://github.com/lucholaf/react-native-grid-view) - React Native Grid/Collection View component
- [react-native-grid ★12](https://github.com/thewei/react-native-grid) - The 24-column grid component for react-native
- [react-native-ichart ★11](https://github.com/AdonRain/react-native-ichart) - ichart for react-native
- [react-native-icons](https://github.com/corymsmith/react-native-icons), [video](https://www.youtube.com/watch?v=TEdM7IwTT1g#t=50)
- [react-native-idle-timer ★16](https://github.com/marcshilling/react-native-idle-timer) - An Objective-C bridge that allows you to enable and disable the screen idle timer in your React Native app
- [react-native-image-button ★3](https://github.com/remobile/react-native-image-button) - A image-button for react-native
- [react-native-image-container ★0](https://github.com/frostney/react-native-image-container) - Image container for React Native
- [react-native-image-picker ★781](https://github.com/marcshilling/react-native-image-picker) - A React Native module that allows you to use the native UIImagePickerController UI to select a photo from the device library or directly from the camera.
- [react-native-imagewand ★3](https://github.com/NorthFoxz/react-native-imagewand) - image wand for react native
- [react-native-invertible-scroll-view ★131](https://github.com/exponentjs/react-native-invertible-scroll-view) - An invertible ScrollView for React Native
- [react-native-item-cell ★25](https://github.com/APSL/react-native-item-cell) - React Native default style iOS item cell
- [react-native-keyboard-spacer ★181](https://github.com/Andr3wHur5t/react-native-keyboard-spacer) - Plug and play react-Native keyboard spacer view.
- [react-native-keyboardevents ★187](https://github.com/johanneslumpe/react-native-keyboardevents) - Monitors keyboard show/hide notifications
- [react-native-layout ★21](https://github.com/jerolimov/react-native-layout) - Semantic JSX layout components for react-native
- [react-native-lightbox ★456](https://github.com/oblador/react-native-lightbox) - a very Slick and modern mobile lightbox implementation
- [react-native-link ★5](https://github.com/650Industries/react-native-link) - A link component, similar to <A href from HTML
- [react-native-listitem ★58](https://github.com/dancormier/react-native-listitem) - iOS-style listitem component for React Native
- [react-native-loader-hud ★0](https://github.com/EdgeJay/react-native-loader-hud) - Loader animation library for React Native
- [react-native-loading ★1](https://github.com/alcat2008/react-native-loading) - A lightweight loading for your React Native app.
- [react-native-looped-carousel ★306](https://github.com/appintheair/react-native-looped-carousel) - Create looped carousel of views or images
- [react-native-mapbox-gl ★449](https://github.com/mapbox/react-native-mapbox-gl) - A Mapbox GL react native module for creating custom maps
- [react-native-maps ★949](https://github.com/lelandrichardson/react-native-maps) - React Native Map components for iOS + Android
- [react-native-marquee-label ★15](https://github.com/remobile/react-native-marquee-label) - A marquee label for react-native
- [react-native-masked-view ★26](https://github.com/gilbox/react-native-masked-view) - A  element for react-native
- [react-native-material-design ★761](https://github.com/react-native-material-design/react-native-material-design) - React Native Material Design Components
- [react-native-material-kit ★1273](https://github.com/xinthink/react-native-material-kit) - Bringing Material Design to React Native
- [react-native-match-media ★2](https://github.com/tuckerconnelly/match-media-mocks) - window.matchMedia mock for React Native
- [react-native-message-composer ★25](https://github.com/anarchicknight/react-native-message-composer) - React Native module bridge to iOS MFMessageComposeViewController
- [react-native-md-textinput ★33](https://github.com/evblurbs/react-native-md-textinput) - React Native TextInput styled with Material Design.
- [react-native-modalbox ★371](https://github.com/maxs15/react-native-modalbox) - A  component for react-native
- [react-native-modal-picker ★33](https://github.com/d-a-n/react-native-modal-picker) - A cross-platform (iOS / Android), selector/picker component for React Native that is highly customizable and supports sections.
- [react-native-multi-slider ★43](https://github.com/JackDanielsAndCode/react-native-multi-slider) - Pure JS slider component with multiple markers for React Native
- [react-native-multiple-choice ★15](https://github.com/d-a-n/react-native-multiple-choice) - A cross-platform (iOS / Android) single and multiple-choice React Native component.
- [react-native-nav ★109](https://github.com/jineshshah36/react-native-nav) - A cross-platform (iOS / Android), fully customizable, React Native Navigation Bar component
- [react-native-navbar ★840](https://github.com/Kureev/react-native-navbar) - Simple customizable navbar component for react-native
- [react-native-navigation-bar ★35](https://github.com/beefe/react-native-navigation-bar) - react-native-navigation-bar
- [react-native-navigation-buttons ★1](https://github.com/shayne/react-native-navigation-buttons) - iOS navigation buttons for the React Native Navigator
- [react-native-navigation-drawer ★51](https://github.com/ilansas/react-native-navigation-drawer) - A slide menu inspired from Android for React-Native
- [react-native-navigator ★55](https://github.com/thewei/react-native-navigator) - A simple router for react native
- [react-native-nested-stylesheet ★41](https://github.com/pjjanak/react-native-nested-stylesheets) - Nestable stylesheets for react-native.
- [react-native-newsticker ★9](https://github.com/moschan/react-native-newsticker) - The News Ticker component for React Native
- [react-native-nmrangeslider-ios ★11](https://github.com/Enrise/react-native-nmrangeslider-ios) - The NMRangeSlider component for React Native
- [react-native-offline-mode](https://github.com/rauchy/react-native-offline-mode) - Swap your app with an offline version while there's no connectivity
- [react-native-orientation-controller ★10](https://github.com/inProgress-team/react-native-orientation-controller) - A react-native library for obtaining and controlling the current device and application orientation
- [react-native-orientation-listener ★90](https://github.com/walmartreact/react-native-orientation-listener) - A react-native library for obtaining current device orientation
- [react-native-orientation ★169](https://github.com/yamill/react-native-orientation) - Listen to device orientation changes in react-native and set preferred orientation on screen to screen basis
- [react-native-page-control ★60](https://github.com/silentcloud/react-native-page-control) - React native page control, like ios  UIPageControl
- [react-native-page-swiper ★51](https://github.com/fixt/react-native-page-swiper) - Page Swiper component for React Native.
- [react-native-parallax ★168](https://github.com/oblador/react-native-parallax) - Parallax effects for React Native using Animated API
- [react-native-parsed-text ★133](https://github.com/taskrabbit/react-native-parsed-text) - Parse text and make them into multiple React Native Text elements
- [react-native-pdf-view ★45](https://github.com/cnjon/react-native-pdf-view) - view pdf file using react-native
- [react-native-phone-picker ★13](https://github.com/Spikef/react-native-phone-picker) - a quick phone picker control
- [react-native-photo-browser ★39](https://github.com/halilb/react-native-photo-browser) - Local and remote photo browser with captions, selections and grid view support.
- [react-native-photo-grid ★1](https://github.com/christopherabouabdo/react-native-photo-grid) - React Native component that handles the complexities of building a grid of photos with a flexible number of photos per row.
- [react-native-picker-android ★40](https://github.com/beefe/react-native-picker-android) - react-native-picker-android
- [react-native-picker ★106](https://github.com/beefe/react-native-picker) - react-native-picker
- [react-native-picker-xg ★6](https://github.com/xgfe/react-native-picker-xg) - A picker for both Android and iOS
- [react-native-piechart ★9](https://github.com/frostney/react-native-piechart) - A  component for React Native
- [react-native-popover-haobtc ★144](https://github.com/jeanregisser/react-native-popover) - A  component for react-native
- [react-native-popup ★39](https://github.com/beefe/react-native-popup) - popup for react-native
- [react-native-popupwindow ★11](https://github.com/beefe/react-native-popupwindow) - Android PopupWindow for react-native module
- [react-native-privacy-snapshot ★34](https://github.com/kayla-tech/react-native-privacy-snapshot) - Obscure passwords and other sensitive personal information when a react-native app transitions to the background
- [react-native-progress-bar ★93](https://github.com/lwansbrough/react-native-progress-bar) - An animated progress bar component for React Native
- [react-native-progress-circular ★15](https://github.com/andy9775/React-Native-CircularProgress) - A pure React Native Component for circular progress bars for both iOS and Android.
- [react-native-progress-hud ★117](https://github.com/naoufal/react-native-progress-hud) - A clean and lightweight progress HUD for your React Native app
- [react-native-qrcode ★50](https://github.com/cssivision/react-native-qrcode) - react-native qrcode generator
- [react-native-quiltview ★4](https://github.com/mmslate/react-native-quiltview) - Native iOS UICollectionView wrapper with RFQuiltLayout for React Native
- [react-native-radial-menu ★26](https://github.com/omulet/react-native-radial-menu) - A Radial Menu optimized for touch interfaces
- [react-native-radio-button-classic ★24](https://github.com/pressly/react-native-radio-button-classic) - Bring Classic Radio to React-Native
- [react-native-radio-buttons ★90](https://github.com/ArnaudRinquin/react-native-radio-buttons) - A react component to implement custom radio buttons-like behaviors: multiple options, only on can be selected at once.
- [react-native-range-selector ★7](https://github.com/gaoli/react-native-range-selector) - react native range selector
- [react-native-rebound-scrollview ★6](https://github.com/jaxchow/react-native-rebound-scrollview) - React Native Android ReboundScrollView implementation.
- [react-native-refresher ★247](https://github.com/syrusakbary/react-native-refresher) - A React Native pull to refresh ListView completely written in js. Also supports custom animations.
- [react-native-relative-units ★3](https://github.com/benzhe/react-native-relative-units) - Relative units for React Native
- [react-native-responsive-image ★87](https://github.com/Dharmoslap/react-native-responsive-image) - Most elegant Responsive Image component
- [react-native-root-modal ★47](https://github.com/magicismight/react-native-root-modal) - react native modal component
- [react-native-route-navigator ★21](https://github.com/Andr3wHur5t/react-native-route-navigator) - React-Native page navigation using URIs.
- [react-native-router ★967](https://github.com/t4t5/react-native-router) - Awesome navigation for your native app.
- [react-native-controllers ★245](https://github.com/wix/react-native-controllers) - Truly native no-compromise iOS navigation for React Native.
- [react-native-navigation ★210](https://github.com/wix/react-native-navigation) - A simplified wrapper around react-native-controllers bringing truly native navigation for iOS with a very simple API. Includes redux support.
- [react-native-scene-manager ★1](https://github.com/alinz/react-native-scene-manager) - Simple Scene Manager for React-Native
- [react-native-scrollable-decorator ★18](https://github.com/exponentjs/react-native-scrollable-decorator) - A standard interface for your scrollable React Native components, making it easier to compose components
- [react-native-scrollable-mixin ★49](https://github.com/exponentjs/react-native-scrollable-mixin) - A standard interface for your scrollable React Native components, making it easier to compose components.
- [react-native-scrollable-tab-view ★1374](https://github.com/brentvatne/react-native-scrollable-tab-view) - This is probably my favorite navigation pattern on Android, I wish it were more common on iOS! This is a very simple JavaScript-only implementation of it for React Native. For more information about how the animations behind this work, check out the Rebou
- [react-native-scrollview-lazyload ★36](https://github.com/IskenHuang/react-native-scrollview-lazyload) - react-native scrollview with image lazy load
- [react-native-infinite-scrollview ★13](https://github.com/baspellis/react-native-infinite-scrollview) - ScrollView with infinte paged scrolling (no looping)
- [react-native-search-bar ★222](https://github.com/umhan35/react-native-search-bar) - The native search bar for react native.
- [react-native-search ★6](https://github.com/StevenIseki/react-native-search) - Native Search component for react native.
- [react-native-seekbar-android ★6](https://github.com/DispatcherInc/react-native-seekbar-android) - A React Native wrapper Android's SeekBar
- [react-native-custom-segmented-control ★23](https://github.com/wix/react-native-custom-segmented-control) - Native UI iOS component for Segmented Control with custom style
- [react-native-segmented-view ★86](https://github.com/lelandrichardson/react-native-segmented-view) - Segmented View for React Native (with animation)
- [react-native-select-box ★0](https://github.com/akiran/react-native-select-box) - react native select box
- [react-native-selectable](https://github.com/vitalets/react-native-extended-selectable/) - Customizable checkbox and radio buttons in one component for React Native
- [react-native-selectme ★51](https://github.com/gs-akhan/react-native-select) - A better Select dropdown menu for react-native
- [react-native-shared-preferences ★2](https://github.com/sriraman/react-native-shared-preferences) - Android's Native key value storage system in React Native
- [react-native-showdown ★8](https://github.com/jerolimov/react-native-showdown) - React-native component which renders markdown into a webview!
- [react-native-simple-button ★4](https://github.com/remobile/react-native-simple-button) - A simple react-native button
- [react-native-simple-picker ★3](https://github.com/puredazzle/react-native-simple-picker) - A simple react-native select picker
- [react-native-simple-router ★122](https://github.com/react-native-simple-router-community/react-native-simple-router) - A community maintained router component for React Native
- [react-native-simpledialog-android ★23](https://github.com/lucasferreira/react-native-simpledialog-android) - React Native Android module to use Android's AlertDialog - same idea of AlertIOS
- [react-native-sketch ★12](https://github.com/jgrancher/react-native-sketch) - A react-native &lt;Sketch /> component to draw with touch events.
- [react-native-slack-webhook ★15](https://github.com/xcarpentier/react-native-slack-webhook) - Follow some activities (new user, payment, ...) from your app via Slack and this webhook lib.
- [react-native-slidable-tab-bar ★17](https://github.com/pwbrown/react-native-slidable-tab-bar) - Slidable tab bar for instant view rendering(react-native)
- [react-native-slider ★178](https://github.com/jeanregisser/react-native-slider) - A pure JavaScript  component for react-native
- [react-native-spinkit ★269](https://github.com/maxs15/react-native-spinkit) - A collection of animated loading indicators for React Native
- [react-native-splashscreen ★102](https://github.com/remobile/react-native-splashscreen) - A splashscreen for react-native
- [react-native-square-view ★16](https://github.com/Shuangzuan/react-native-square-view) - A square view component for react native.
- [react-native-star-rating ★34](https://github.com/djchie/react-native-star-rating) - A React Native component for generating and displaying interactive star ratings
- [react-native-starrating ★14](https://github.com/bluesky0109/react-native-starRating) - a react-native component for display interactive star ratings
- [react-native-store-view ★0](https://github.com/rh389/react-native-store-view) - Wraps SKStoreProductViewController for use in react-native projects
- [react-native-style-sheet ★0](https://github.com/ninozhang/react-native-style-sheet) - React Native StyleSheet
- [react-native-stylesheet-xg ★2](https://github.com/xgfe/react-native-stylesheet-xg) - extension stylesheet for cross platforms and responsive
- [react-native-svg ★322](https://github.com/brentvatne/react-native-svg) - A  element for react-native that renders Svg images using SVGKit
- [react-native-swipeout ★502](https://github.com/dancormier/react-native-swipeout) - iOS-style swipeout buttons behind component
- [react-native-swiper2 ★54](https://github.com/sunnylqm/react-native-swiper2) - Swiper component for React Native. Supersede react-native-swiper
- [react-native-swiper ★1462](https://github.com/leecade/react-native-swiper) - The best Swiper component for React Native.
- [react-native-tab ★47](https://github.com/vczero/react-native-tab) - react-native-tab is a simple module for add a "Tab Menu" to your React Native app.
- [react-native-tabbar ★136](https://github.com/alinz/react-native-tabbar) - Tab bar with more freedom
- [react-native-tableview-simple ★64](https://github.com/Purii/react-native-tableview-simple) - React Native component for TableView made with pure CSS
- [react-native-tableview ★365](https://github.com/aksonov/react-native-tableview) - Native iOS TableView wrapper for React Native
- [react-native-tabs ★201](https://github.com/aksonov/react-native-tabs) - React Native platform-independent tabs. Could be used for bottom tab bars as well as sectioned views (with tab buttons)
- [react-native-textinput-utils ★23](https://github.com/DickyT/react-native-textinput-utils) - A react native extension which allows you to control TextInput better.
- [react-native-timeago ★88](https://github.com/TylerLH/react-native-timeago) - Auto-updating timeago component for React Native
- [react-native-timer-mixin ★87](https://github.com/reactjs/react-timer-mixin) - TimerMixin provides timer functions for executing code in the future that are safely cleaned up when the component unmounts. This is a fork that includes react-native InteractionManager support.
- [react-native-tinder-swipe-cards ★125](https://github.com/meteor-factory/react-native-tinder-swipe-cards) - Tinder card style swiping.
- [react-native-toast ★86](https://github.com/remobile/react-native-toast) - A android like toast for react-native support for ios and android
- [react-native-toolkit ★29](https://github.com/marty-wang/react-native-toolkit) - A collection of common UI components for react native mobile apps.
- [react-native-tooltip ★78](https://github.com/chirag04/react-native-tooltip) - A react-native wrapper for showing tooltips
- [react-native-touchable-bounce ★7](https://github.com/grabbou/react-native-touchable-bounce) - React Native Touchable Bounce
- [react-native-touchable-set-active ★23](https://github.com/jmstout/react-native-TouchableSetActive) - Touchable component for React Native that enables more advanced styling by setting an active state. Most useful for building your own touchable/button components on top of.
- [react-native-transparent-bar ★10](https://github.com/23c/react-native-transparent-bar) - react native navigator transparent bar
- [react-native-triangle ★11](https://github.com/Jpoliachik/react-native-triangle) - draw triangle views in react native
- [react-native-tween-animation ★28](https://github.com/kirkness/react-native-tween-animation) - A simple react native state tween animation module.
- [react-native-vector-icons ★1626](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native with support for NavBar/TabBar, image source and full styling. Choose from 3000+ bundled icons or use your own.
- [react-native-viewpager ★469](https://github.com/race604/react-native-viewpager) - ViewPager componnent for React Native
- [react-native-viewport-units ★41](https://github.com/jmstout/react-native-viewport-units) - Incredibly simple utility for (sort of) using viewport units with React Native.
- [react-native-viewport ★40](https://github.com/pjjanak/react-native-viewport) - Viewport dimensions for react-native
- [react-native-webbrowser ★38](https://github.com/d-a-n/react-native-webbrowser) - A cross-platform (iOS / Android), full-featured, highly customizable web browser module for React Native apps.
- [react-native-wheel-picker ★7](https://github.com/lesliesam/react-native-wheel-picker) - React native cross platform picker.
- [react-native-wheel ★12](https://github.com/shexiaoheng/react-native-wheel) - android wheel view for react-native
- [react-native-yynavigator ★0](https://github.com/yiyangest/react-native-yynavigator) - custom navigation bar for react-native
- [react-native-message-bar ★65](https://github.com/KBLNY/react-native-message-bar) - A module for presenting notifications via an animated message bar at the top/bottom of the screen, highly customizable, for React Native (Android and iOS) projects.
- [react-native-sglistview ★220](https://github.com/sghiassy/react-native-sglistview) - A memory minded implementation of React Native's ListView
- [react-router-native ★59](https://github.com/jmurzy/react-router-native) - A routing library for React Native that strives for sensible API parity with [React Router](https://github.com/reactjs/react-router)
- [react-native-telephone-input ★7](https://github.com/kundigo/react-native-telephone-input) - React Native Telephone Input, discover country and mask telephone Input

### Text & Rich Content

- [markdown-react-native ★123](https://github.com/lwansbrough/react-native-markdown) - A Markdown Component For React Native
- [react-native-asciimage ★15](https://github.com/turley/react-native-asciimage) - An ASCIImage component for React Native
- [react-native-html-render ★36](https://github.com/soliury/react-native-html-render) - A html render for react-native
- [react-native-html-to-pdf ★32](https://github.com/christopherdro/react-native-html-to-pdf) - Convert html strings to PDF documents using React Native
- [react-native-html-webview ★73](https://github.com/almost/react-native-html-webview) - Display (possibly untrusted) HTML using a UIWebView in React Native.
- [react-native-html ★8](https://github.com/turingou/react-native-html) - render html as react native custom elements
- [react-native-htmltext ★62](https://github.com/siuying/react-native-htmltext) - Use HTML like markup to create stylized text in react-native.
- [react-native-hypertext ★17](https://github.com/agentcooper/react-native-hypertext) - React Native module to render hypertext (text with links)
- [react-native-universal-modal ★6](https://github.com/bokuweb/react-native-universal-modal) - Universal simple modal component for React Native
- [react-native-hyperlink ★30](https://github.com/obipawan/hyperlink) - A `<Hyperlink />` component for react-native that makes urls, fuzzy links, emails etc clickable and stylable

### Analytics

- [react-native-ab ★76](https://github.com/lwansbrough/react-native-ab) - A component for rendering A/B tests in React Native
- [react-native-google-analytics ★146](https://github.com/lwansbrough/react-native-google-analytics) - Google Analytics for React Native!
- [react-native-fabric ★140](https://github.com/corymsmith/react-native-fabric) - A React Native library for Fabric, Crashlytics and Answers
- [react-native-mixpanel ★53](https://github.com/davodesign84/react-native-mixpanel) - A React Native wrapper for Mixpanel tracking
- [react-native-segment-io-analytics ★26](https://github.com/smore-inc/react-native-segment-io-analytics) - A React Native Segment wrapper!

### Utils & Infra

- [react-native-HsvToRgb ★2](https://github.com/Copypeng/react-native-HsvToRgb) - a helper to convert HSV(HSB) color to RGB.
- [react-native-aes ★10](https://github.com/mvayngrib/react-native-aes) - AES in react-native
- [react-native-aws-signature ★27](https://github.com/leimd/react-native-aws-signature) - help generate signature required for using AWS API. Necessary to use S3, ec2, or other services.
- [react-native-babel-jest ★2](https://github.com/apentle/react-native-babel-jest) - Simple testing configuration for React Native with Jest
- [react-native-bhutils ★0](https://github.com/bh5-pods/react-native-bhutils) - React native utils
- [react-native-crypto ★12](https://github.com/mvayngrib/react-native-crypto) - implementation of crypto for React Native
- [react-native-des ★6](https://github.com/remobile/react-native-des) - A des crypto for react-native
- [react-native-device-log ★7](https://github.com/olofd/react-native-device-log) - A UI and service for displaying dev-logs on devices.
- [react-native-eval ★24](https://github.com/artemyarulin/react-native-eval) - Call any JS functions from your native code
- [react-native-fluxbone ★4](https://github.com/jgable/react-native-fluxbone) - A group of libraries that help with the FluxBone pattern in React Native
- [react-native-global-event-emitter ★26](https://github.com/paramaggarwal/react-native-global-event-emitter) - Shared event emitter between native and JS for React Native.
- [react-native-globalize ★23](https://github.com/joshswan/react-native-globalize) - Globalization helper for React Native
- [react-native-immutable ★9](https://github.com/thewei/react-native-immutable) - using immutable.js library with react-native
- [react-native-intl ★13](https://github.com/taggon/react-native-intl) - React Native module shipped native Intl implementation and Translation extension
- [react-native-mock ★139](https://github.com/lelandrichardson/react-native-mock) - A fully mocked and test-friendly version of react native
- [react-native-rsa ★6](https://github.com/z-hao-wang/react-native-rsa) - RSA crypto lib for react native
- [react-native-tools ★0](https://github.com/kkennis/react-native-tools) - Tools for react native project development
- [react-native-url-handler ★23](https://github.com/exponentjs/react-native-url-handler) - Navigate to external URLs, handle in-app URLs, and access system URLs
- [react-native-user-defaults ★16](https://github.com/wwayne/react-native-user-defaults) - ios UserDefaults used by react-native
- [react-native-userdefaults-ios ★39](https://github.com/dsibiski/react-native-userdefaults-ios) - React Native Module for NSUserDefaults
- [react-native-util ★1](https://github.com/exponentjs/react-native-util) - A fork of io.js's util module that works with React Native
- [react-native-webp ★7](https://github.com/dbasedow/react-native-webp) - react-native-webp adds support for WebP images for react-native components.
- [react-native-webpackager-server ★2](https://github.com/changfuguo/react-native-webpackager-server) - react native webpackager server
- [react-native-zip-archive ★19](https://github.com/plrthink/react-native-zip-archive) - Zip / Unzip archive utility
- [react-native-html-parser ★4](https://github.com/g6ling/react-native-html-parser) - parse html in react-native
- [react-native-slowlog ★8](https://github.com/jondot/react-native-slowlog) - A high-performance timer based profiler for React Native that helps you track big performance problems
- [codemod-RN24-to-RN25 ★61](https://github.com/sibeliusseraphini/codemod-RN24-to-RN25) - a simple codemod to handle the new import style on >=RN25

### Build & Development

- [react-native-assets ★21](https://github.com/llanox/react-native-assests) - Module to manage assets. It allows you download assests from a network and store into a specific local folder on iOS
- [react-native-build-cli ★1](https://github.com/adonpro/react-native-build-cli) - a cli tool for react-native build
- [react-native-code-push ★1127](https://github.com/Microsoft/react-native-code-push) - React Native plugin for the CodePush service
- [react-native-console-panel ★39](https://github.com/sospartan/react-native-console-panel) - react native component for display console messages.
- [react-native-cosmos ★13](https://github.com/jerolimov/react-native-cosmos) - DX tool to test react-native components with defined props/state fixtures.
- [react-native-css-loader ★9](https://github.com/thewei/react-native-css-loader) - You can use react-native-css-loader with react-native-webpack-server, which can use webpack to built react-native app better.
- [react-native-debug-stylesheet ★42](https://github.com/brentvatne/react-native-debug-stylesheet) - Add coloured borders or backgrounds to all views to make it easier to debug layout issues
- [react-native-webpack-server ★754](https://github.com/mjohnston/react-native-webpack-server) - Build React Native apps with Webpack
- [reactotron ★1613](https://github.com/skellock/reactotron) - Control, monitor, and instrument your React Native apps from the comfort of your terminal.

### Styling

- [cairn ★62](https://github.com/adamterlson/cairn) - Simple, string-based style selector engine with support for basic inheritance.
- [react-native-css ★332](https://github.com/sabeurthabti/react-native-css) - Style React-Native components with css and built in support for SASS.
- [react-native-extended-stylesheet ★140](https://github.com/vitalets/react-native-extended-stylesheet) - Extend React Native stylesheet with variables, relative units, percents, math operations, scaling and other stuff.
- [react-native-theme ★1](https://github.com/apentle/react-native-theme) - Theme manager for react native project!


### System

- [react-native-addressbook ★59](https://github.com/rt2zz/react-native-addressbook) - AddressBook module for react-native
- [react-native-android-geolocation ★10](https://github.com/garysye/react-native-android-geolocation) - React Native Module to use Android Geolocation via Google Play API
- [react-native-android-sms-listener ★28](https://github.com/CentaurWarchief/react-native-android-sms-listener) - Allows you to listen for incoming SMS messages
- [react-native-android-sms ★20](https://github.com/msmakhlouf/react-native-android-sms) - A react native android module to list/send sms.
- [react-native-android-speech ★14](https://github.com/mihirsoni/react-native-android-speech) - A text-to-speech library for Android React Native.
- [react-native-android-sqlite ★23](https://github.com/jbrodriguez/react-native-android-sqlite) - A react native android wrapper for SQLite
- [react-native-app-info ★18](https://github.com/Iragne/react-native-app-info) - React Native app info and version
- [react-native-barcode-scanner ★35](https://github.com/lifuzu/ReactNativeBarcodeScanner) - Barcode scanner for React Native
- [react-native-barcodescanner ★102](https://github.com/ideacreation/react-native-barcodescanner) - A barcode scanner component for react native
- [react-native-battery-status ★1](https://github.com/remobile/react-native-battery-status) - A battery-status for react-native
- [react-native-battery ★4](https://github.com/oojr/react-native-battery) - A React Native module that returns the battery level/status of a device
- [react-native-ble ★54](https://github.com/jacobrosenthal/react-native-ble) - React Native BLE using noble api surface
- [react-native-bluetooth-state ★18](https://github.com/frostney/react-native-bluetooth-state) - Answering the question of "Is my bluetooth on?" in React Native
- [react-native-calendar-reminders ★23](https://github.com/wmcmahan/React-Native-CalendarReminders) - React Native module for IOS EventKit Reminders
- [react-native-carrier-info ★6](https://github.com/anarchicknight/react-native-carrier-info) - React Native module bridge to obtain information about the user’s home cellular service provider.
- [react-native-clipboard ★43](https://github.com/silentcloud/react-native-clipboard) - React Native component for getting or setting clipboard content
- [react-native-communications ★122](https://github.com/anarchicknight/react-native-communications) - Easily call, email, text or iMessage someone in React Native
- [react-native-contacts-rx ★4](https://github.com/JeanLebrument/react-native-contacts-rx) - react-native-contacts counterpart that include the support of RxJS.
- [react-native-contacts ★133](https://github.com/rt2zz/react-native-contacts) - React Native Contacts (android & ios)
- [react-native-detect-device ★8](https://github.com/peachmeco/react-native-detect-device) - Detect a device on iOS or android in react-native.
- [react-native-device-battery ★8](https://github.com/robinpowered/react-native-device-battery) - Observe battery state changes in your react native application
- [react-native-device-info-pod ★0](https://github.com/mchinyakov/react-native-device-info) - Get device information using react-native
- [react-native-device-info ★269](https://github.com/rebeccahughes/react-native-device-info) - Get device information using react-native
- [react-native-device-motion ★20](https://github.com/paramaggarwal/react-native-device-motion) - iOS device motion wrapper for React Native.
- [react-native-device ★133](https://github.com/GertjanReynaert/react-native-device) - UIDevice wrapper for React Native
- [react-native-discovery ★19](https://github.com/joshblour/react-native-discovery) - Discover nearby devics using BLE. Turn iOS and Android devices into beacons
- [react-native-fs ★369](https://github.com/johanneslumpe/react-native-fs) - Native filesystem access for react-native
- [react-native-onesignal ★64](https://github.com/geektimecoil/react-native-onesignal) - React Native Library for OneSignal Push Notifications Service [iOS + Android]
- [react-native-gcm-android ★114](https://github.com/oney/react-native-gcm-android) - GCM for Android
- [react-native-gcm ★43](https://github.com/bh5-pods/react-native-gcm) - Google Cloud Messaging for React Native
- [react-native-geocoder ★73](https://github.com/devfd/react-native-geocoder) - react native geocoding and reverse geocoding
- [react-native-geolocation-android ★3](https://github.com/lxsameer/react-native-geolocation-android) - Geolocation module for react native android
- [react-native-geolocation ★1](https://github.com/remobile/react-native-geolocation) - A geolocation for react-native
- [react-native-heading ★2](https://github.com/joshblour/react-native-heading) - Get device heading (compass) information on iOS or Android
- [react-native-ibeacon ★135](https://github.com/geniuxconsulting/react-native-ibeacon) - iBeacon support for React Native. The API is very similar to the CoreLocation Objective-C one with the only major difference that regions are plain JavaScript objects. Beacons don't work in the iOS simulator.
- [react-native-icloud-sync ★17](https://github.com/chirag04/react-native-icloud-sync) - A react-native wrapper for syncing with icloud
- [react-native-in-app-utils ★111](https://github.com/chirag04/react-native-in-app-utils) - A react-native wrapper for handling in-app payments.
- [react-native-keychain ★91](https://github.com/oblador/react-native-keychain) - Keychain Access for React Native
- [react-native-localsearch ★11](https://github.com/wmcmahan/React-Native-LocalSearch) - React Native Module for MapKit Local Search
- [react-native-location ★116](https://github.com/timfpark/react-native-location) - Native GPS location support for React Native.
- [react-native-lock-android ★7](https://github.com/auth0/react-native-lock-android) - Auth0 Lock for React Native (Android)
- [react-native-lock-ios ★84](https://github.com/auth0/react-native-lock-ios) - Auth0 Lock for React Native (iOS)
- [react-native-mipush ★0](https://github.com/cpunion/react-native-mipush) - MiPush for React Native
- [react-native-motion-manager ★96](https://github.com/pwmckenna/react-native-motion-manager) - A react-native interface for using the Gyroscope, Accelerometer and Magnetometer
- [react-native-passcode-auth ★15](https://github.com/naoufal/react-native-passcode-auth) - React Native authentication with iOS Passcode.
- [react-native-permissions ★16](https://github.com/joshblour/react-native-permissions) - From React Native, check if the user has granted access to geolocation, camera, contacts, etc... (iOS only)
- [react-native-push-notification ★283](https://github.com/zo0r/react-native-push-notification) - React Native Local and Remote Notifications
- [react-native-push-with-gcm ★1](https://github.com/lilach/react-native-push-with-gcm) - Register device for GCM push notifications services (supported only for iOS)
- [react-native-reverse-geo ★12](https://github.com/aaronksaunders/react-native-reverse-geo) - React Native module bridge to convert address to geo coordinates.
- [react-native-sensor-manager ★23](https://github.com/kprimice/react-native-sensor-manager) - Wrapper for react-native providing native sensors access. (Gyroscope, accelerometer, magnetometer, thermometer...)
- [react-native-sms-android ★3](https://github.com/rhaker/react-native-sms-android) - A react-native module for sending a sms message to a phone number.
- [react-native-social-share ★141](https://github.com/doefler/react-native-social-share) - Use the iOS native Twitter and Facebook share view from react native
- [react-native-system-notification ★128](https://github.com/Neson/react-native-system-notification) - Notification for React Native
- [react-native-touch-id ★170](https://github.com/naoufal/react-native-touch-id) - React Native authentication with the native Touch ID popup.
- [react-native-voip-push-notification ★7](https://github.com/ianlin/react-native-voip-push-notification) - iOS prioritized VoIP Push Notification
- [react-native-wifi-manager ★6](https://github.com/skierkowski/react-native-wifi-manager) - Wifi Connection Manager for React Native on Android


### Web

- [react-native-bridgeable-webview ★8](https://github.com/Intellicode/react-native-bridgeable-webview) - A react-native webview with bridge to react-native code
- [react-native-browser-polyfill ★15](https://github.com/johanneslumpe/react-native-browser-polyfill) - A collection of polyfills for the react-native Javascript environment.
- [react-native-browser ★38](https://github.com/PrestoDoctor/react-native-browser) - Full-featured web browser module for React Native apps, based on TOWebViewController
- [react-native-for-web ★176](https://github.com/KodersLab/react-native-for-web) - A set of classes and react components to make work your react-native app in a browser. (with some limitations obviously)
- [react-native-h5 ★0](https://github.com/dingui/react-native-h5) - react native web
- [react-native-html2native ★0](https://github.com/labithiotis/react-native-html-render) - A html render for react-native
- [react-native-inapp-browser ★8](https://github.com/DickyT/react-native-inapp-browser) - A in-app browser for react native apps.
- [react-native-safari-view ★102](https://github.com/naoufal/react-native-safari-view) - A React Native wrapper for Safari View Controller
- [react-native-web-container ★7](https://github.com/danrigsby/react-native-web-container) - A wrapper around the react native WebView to add autoHeight, scrub html, etc
- [react-native-web-polyfill ★22](https://github.com/mattiamanzati/react-native-web-polyfill) - A set of classes and react components to make work your react-native app in a browser. (with some limitations obviously)
- [react-native-webintent ★43](https://github.com/ivanph/react-native-webintent) - React native android module to open links in the default browser
- [react-native-webrtc ★257](https://github.com/oney/react-native-webrtc) - A WebRTC module for React Native.
- [react-native-webview-android ★98](https://github.com/lucasferreira/react-native-webview-android) - Simple React Native Android module to use Android's WebView inside your app
- [react-native-webview-bridge ★274](https://github.com/alinz/react-native-webview-bridge) - React Native WebView Javascript Bridge
- [react-native-webview ★1](https://github.com/beefe/react-native-webview) - andorid webview for react-native
- [react-native-cookiemanager ★1](https://github.com/beefe/react-native-cookiemanager) - react-native cookie manager library.
- [react-native-webview-crosswalk ★6](https://github.com/jordansexton/react-native-webview-crosswalk) - Crosswalk's WebView for React Native on Android

### Media

- [react-native-android-audio-streaming-aac ★11](https://github.com/EstebanFuentealba/react-native-android-audio-streaming-aac) - A react native streaming player
- [react-native-audio-manager ★11](https://github.com/Tricy/react-native-audio-manager) - Audio player library for react native Android
- [react-native-audio-player ★8](https://github.com/sh3rawi/react-native-audio-player) - A React Native module to play audio on Android
- [react-native-audioplayer ★47](https://github.com/andreaskeller/react-native-audioplayer) - Small audio player library for react native
- [react-native-bhcamera ★2](https://github.com/bh5-pods/react-native-bhcamera) - React Native Barcode Scanner and Camera Utils.
- [react-native-camera ★1203](https://github.com/lwansbrough/react-native-camera) - Camera component
- [react-native-color-grabber ★23](https://github.com/bsudekum/react-native-color-grabber) - React native component for finding dominant colors in an image
- [react-native-incall-manager ★15](https://github.com/zxcpoiu/react-native-incall-manager) - Handling media-routes/sensors/events during a audio/video chat like webrtc
- [react-native-media-capture ★1](https://github.com/remobile/react-native-media-capture) - A media-capture for react-native
- [react-native-mediaplayer ★5](https://github.com/chriselly/react-native-mediaplayer) - Simple full screen media player for React Native.
- [react-native-media-meta ★6](https://github.com/mybigday/react-native-media-meta) - Get media file metadata in your React Native app
- [react-native-player ★36](https://github.com/xeodou/react-native-player) - Media player for react-native
- [react-native-screcorder ★103](https://github.com/maxs15/react-native-screcorder) - Capture pictures and record Video with Vine-like tap to record
- [react-native-simple-sound ★3](https://github.com/mikehedman/react-native-simple-sound) - Start, stop, and pause a sound. iOS only. Derived from https://github.com/zmxv/react-native-sound
- [react-native-sound ★135](https://github.com/zmxv/react-native-sound) - React Native module for playing sound clips
- [react-native-sound-demo ★1](https://github.com/zmxv/react-native-sound-demo) - react-native-sound demo project
- [react-native-speech ★66](https://github.com/naoufal/react-native-speech) - A text-to-speech library for React Native.
- [react-native-video ★718](https://github.com/brentvatne/react-native-video) - A Video component for react-native
- [react-native-volume-slider ★8](https://github.com/IFours/react-native-volume-slider) - React Native VolumeView component
- [react-native-vlc-player ★7](https://github.com/ghondar/react-native-vlc-player) - VLC Player for react-native
- [react-native-camera-roll-picker ★7](https://github.com/jeanpan/react-native-camera-roll-picker) - A React Native component providing images selection from camera roll


### Storage

- [react-native-couchbase-lite ★40](https://github.com/fraserxu/react-native-couchbase-lite) - couchbase lite binding for react-native
- [react-native-db-models ★124](https://github.com/darkrishabh/react-native-db-models) - Local DB Models for React Native Apps
- [react-native-level-fs ★7](https://github.com/tradle/react-native-level-fs) - fs for react-native using level-filesystem and asyncstorage-down
- [react-native-mongoose ★7](https://github.com/remobile/react-native-mongoose) - A AsyncStorage based mongoose like storage for react-native
- [react-native-pouchdb ★21](https://github.com/carbureted/react-native-pouchdb) - Run pouchdb in React Native!
- [react-native-simple-store ★194](https://github.com/jasonmerino/react-native-simple-store) - A minimalistic wrapper around React Native's AsyncStorage.
- [react-native-sqlite-storage ★361](https://github.com/andpor/react-native-sqlite-storage) - SQLite3 bindings for React Native (Android & iOS)
- [react-native-sqlite ★416](https://github.com/almost/react-native-sqlite) - SQLite3 bindings for React Native
- [react-native-storage ★218](https://github.com/sunnylqm/react-native-storage) - This is a local storage wrapper for both react-native(AsyncStorage) and browser(localStorage). ES6/babel is needed.
- [react-native-store ★328](https://github.com/thewei/react-native-store) - A simple database base on react-native AsyncStorage.


### Backend

- [feathers](http://docs.feathersjs.com/clients/feathers.html) - Feathers client that works in the React Native, the browser, or NodeJS.
- [react-native-ajax ★1](https://github.com/spikef/react-native-ajax) - Ajax module for react native.
- [react-native-async-http ★2](https://github.com/szq4119/react-native-async-http) - React Native component for async-http
- [react-native-bonjour ★1](https://github.com/Apercu/react-native-bonjour) - A Bonjour discovery utility for react-native
- [react-native-cognito ★26](https://github.com/morcmarc/react-native-cognito) - AWS Cognito-based authentication module for React Native.
- [react-native-file-download ★27](https://github.com/plrthink/react-native-file-download) - A simple file download module for react-native
- [react-native-file-upload ★53](https://github.com/booxood/react-native-file-upload) - A file upload plugin for react-native
- [react-native-http ★7](https://github.com/iktw/react-native-jwt) - React native http
- [react-native-jwt ★11](https://github.com/StanScates/react-native-jwt) - React native compatible JSON web token utility
- [react-native-lazyload ★63](https://github.com/magicismight/react-native-lazyload) - lazyload for react native
- [react-native-meteor ★218](https://github.com/inProgress-team/react-native-meteor) - Full Meteor Client
- [react-native-multipeer ★51](https://github.com/lwansbrough/react-native-multipeer) - Communicate over ad hoc wifi using Multipeer Connectivity
- [react-native-networking ★57](https://github.com/eduedix/react-native-networking) - react-native module to download and upload files with AFNetworking
- [react-native-rest-kit ★32](https://github.com/peter4k/react-native-rest-kit) - A React Native RESTful API kit that use the fetch method
- [react-native-simple-auth ★188](https://github.com/adamjmcgrath/react-native-simple-auth) - Native social authentication for React Native on iOS
- [react-native-swift-socketio ★82](https://github.com/kirkness/react-native-swift-socketio) - A react native wrapper for socket.io-client-swift
- [react-native-tcp ★13](https://github.com/PeelTechnologies/react-native-tcp) - node's net API for react-native
- [react-native-udp ★35](https://github.com/tradle/react-native-udp) - node's dgram API for react-native
- [react-native-uploader ★59](https://github.com/aroth/react-native-uploader) - A React Native module to upload files and camera roll assets. Supports progress notification.
- [react-native-xmpp ★58](https://github.com/aksonov/react-native-xmpp) - XMPP Library for React Native
- [react-native-s3 ★14](https://github.com/mybigday/react-native-s3) - A React Native wrapper for AWS iOS/Android S3 SDK (TransferUtility)
- [react-native-aws3 ★18](https://github.com/benjreinhart/react-native-aws3) - Pure JavaScript React Native library for uploading to AWS S3


### Integrations

- [react-native-amap ★8](https://github.com/laoqiu/react-native-amap) - A React Native component for building maps with the AMap Android SDK
- [react-native-android-vitamio ★41](https://github.com/sejoker/react-native-android-vitamio) - React-native component for android Vitamio video player
- [react-native-braintree ★46](https://github.com/alawong/react-native-braintree) - A react native interface for integrating payments using Braintree's v.zero SDK (currently iOS only)
- [react-native-braintree-android ★12](https://github.com/surialabs/react-native-braintree-android) - Braintree's native Drop-in Payment UI for Android
- [react-native-braintree-xplat ★2](https://github.com/kraffslol/react-native-braintree-xplat) - Cross-platform Braintree v.zero module.
- [react-native-card-io ★51](https://github.com/kayla-tech/react-native-card-io) - React Native component for card.io
- [react-native-conekta ★0](https://github.com/zo0r/react-native-conekta) - Conekta SDK for React Native
- [react-native-digits ★43](https://github.com/fixt/react-native-digits) - Digits wrapper to use in React Native
- [react-native-fabric-digits ★54](https://github.com/JeanLebrument/react-native-fabric-digits) Fabric Digits wrapper for React-Native
- [react-native-facebook-login ★418](https://github.com/magus/react-native-facebook-login) - React Native wrapper for native iOS Facebook SDK login button and manager
- [react-native-fbintent ★2](https://github.com/syarul/react-native-fbintent) - A React Native intent for Android Facebook App
- [react-native-flurry ★4](https://github.com/amitkothari/react-native-flurry) - React Native wrapper for Flurry
- [react-native-google-places-autocomplete ★133](https://github.com/FaridSafi/react-native-google-places-autocomplete) - Customizable Google Places autocomplete component for iOS and Android React-Native apps
- [react-native-google-signin ★153](https://github.com/apptailor/react-native-google-signin) - Google Signin for your react native applications
- [react-native-hawk ★2](https://github.com/andyscott/react-native-hawk) - Hawk wrapper for react-native
- [react-native-heyzap](https://github.com/react-native-contrib/react-native-heyzap)- Heyzap plugin for React Native
- [react-native-instagram-oauth ★11](https://github.com/watzak/react-native-instagram-oauth) - react-native instagram login
- [react-native-instagram-share ★8](https://github.com/watzak/react-native-instagram-share) - A react-native interface to share images and videos within instagram (iOS)
- [react-native-instagram ★0](https://github.com/watzak/react-native-instagram) - react-native instagram wrapper api (iOS)
- [react-native-leancloud ★8](https://github.com/turingou/react-native-leancloud) - a react native LeanCloud component
- [react-native-level ★29](https://github.com/tradle/react-native-level) - levelup API for react-native AsyncStorage.
- [react-native-linkedin-login ★18](https://github.com/jodybrewster/react-native-linkedin-login) - Linkedin Login for your react native applications
- [react-native-onepassword ★7](https://github.com/DriveWealth/react-native-onepassword) - React Native integration with the OnePassword extension.
- [react-native-qq ★65](https://github.com/reactnativecn/react-native-qq) - QQ Login&Share support in React Native.
- [react-native-realtimemessaging-android ★37](https://github.com/realtime-framework/RCTRealtimeMessagingAndroid) - The Realtime Framework Cloud Messaging Pub/Sub client for React-Native Android
- [react-native-realtimemessaging-ios ★7](https://github.com/realtime-framework/RCTRealtimeMessaging) - The Realtime Framework Cloud Messaging Pub/Sub client for React-Native
- [react-native-realtime-pusher ★0](https://github.com/gijoehosaphat/react-native-realtime-pusher) - React Native module implementing the Pusher Realtime API
- [react-native-realtimestorage-android ★3](https://github.com/realtime-framework/RCTRealtimeStorageAndroid) - The Realtime Cloud Storage client for React-Native Android
- [react-native-realtimestorage-ios ★6](https://github.com/realtime-framework/RCTRealtimeCloudStorage) - The Realtime Framework Cloud Storage client for React-Native
- [react-native-sinch-verification ★4](https://github.com/kevinresol/react-native-sinch-verification) - Sinch verification for react native
- [react-native-testfairy ★2](https://github.com/testfairy/react-native-testfairy) - TestFairy for React Native
- [react-native-twilio ★25](https://github.com/rogchap/react-native-twilio) - A React Native wrapper for the Twilio mobile SDK
- [react-native-voximplant ★44](https://github.com/voximplant/react-native-voximplant) - VoxImplant Mobile SDK for embedding voice and video communication into React Native apps.
- [react-native-wechat-ios ★103](https://github.com/beefe/react-native-wechat-ios) - Wechat SDK for React Native(iOS).
- [react-native-wechat ★311](https://github.com/weflex/react-native-wechat) - react-native library for wechat app
- [react-native-woopra ★8](https://github.com/isair/react-native-woopra) - Promise based Woopra library for react-native
- [react-native-axmall-alipay ★3](https://github.com/szq4119/react-native-alipay) - react-native alipay
- [react-native-signalr ★17](https://github.com/olofd/react-native-signalr) - SignalR-client for react-native
- [react-native-sumup ★0](https://github.com/APSL/react-native-sumup) - A React Native implementation of SumupSDK.
- [react-native-new-relic ★7](https://github.com/wix/react-native-newrelic) - New Relic event reporting for react-native.

### Monetization

- [react-native-admob](https://github.com/sbugert/react-native-admob) - A react-native component for Google AdMob banners.
- [react-native-revmob ★7](https://github.com/RevMob/react-native-revmob) - RevMob wrapper for React Native.
-  [react-native-stripe-api ★15](https://github.com/xcarpentier/react-native-stripe-api) - A small React Native library for Stripe Rest API

### Other Platforms

- [react-native-watchkit ★0](https://github.com/MystK/react-native-watchkit) - react native for WatchKit
- [react-native-desktop ★7143](https://github.com/ptmt/react-native-desktop) - React Native for OS X

## Tooling

Useful React Native tooling.

- [react-native-snippets ★99](https://github.com/Shrugs/react-native-snippets) - A collection of Sublime Text Snippets for react-native
- [exp.host](http://exp.host/) - Use React Native without XCode (a previewer app + local server infrastructure)
- [Ruby React Native (via Opal) ★363](https://github.com/zetachang/opal-native) - Use Ruby for building React Native apps
- [React Native Playground](https://rnplay.org/) - Run React Native apps in your browser via real time simulator
- [AppHub](https://apphub.io/) - Update React Native apps, instantly
- [CodePush](http://microsoft.github.io/code-push/) - Push code updates to your apps, instantly
- [rnpm ★1395](https://github.com/rnpm/rnpm) - react native package manager
- [rsx ★26](https://github.com/react-native-contrib/rsx) - An alternative to the `react-native` CLI tool
- [rn-nodeify ★30](https://github.com/mvayngrib/rn-nodeify) - hack to allow react-native projects to use node core modules
- [Deco IDE](https://www.decosoftware.com/) - React Native IDE with components manager
- [react-native-debugger ★126](https://github.com/jhen0409/react-native-debugger) - The standalone app for React Native Debugger, with React DevTools / Redux DevTools

## Seeds

Get a head start on development with an existing seed.

- [🔥 Ignite ★567](https://github.com/infinitered/ignite) - An unfair start for React Native - Generator CLI for redux/sagas and more.
- [react-native-webpack-starter-kit ★642](https://github.com/jhabdas/react-native-webpack-starter-kit)
- [react-native-babel ★231](https://github.com/roman01la/react-native-babel)
- [react-native-es6-reflux ★133](https://github.com/filp/react-native-es6-reflux)
- [react-native-tabbed ★19](https://github.com/rxb/react-native-tabbed)
- [react-native-hot-redux-starter ★127](https://github.com/adampash/react-native-hot-redux-starter)
- [ReactNativeTS ★55](https://github.com/mrpatiwi/ReactNativeTS) - Typescript with [alt](http://alt.js.org/) and router
- [Snowflake ★1766](https://github.com/bartonhammond/snowflake) - Android & iOS, Redux, Jest (88% coverage), Immutable, Parse.com
- [React Native Meteor Boilerplate ★179](https://github.com/spencercarli/react-native-meteor-boilerplate)

## Libraries

Libraries / SDK type additions for React Native development.

- [tcomb-form-native ★1038](https://github.com/gcanti/tcomb-form-native) - Generate React Native forms
- [Panza ★21](https://github.com/bmcmahen/panza) - a collection of stateless, functional, cross-platform ui components for react-native

## Examples

Fully working app examples and open source apps.

- [Reddit made with React Native and Redux ★5](https://github.com/KevinOfNeu/xReddit)
- [React Native Showcase](https://facebook.github.io/react-native/showcase.html)
- [Github repo examples](https://github.com/facebook/react-native/tree/master/Examples)
- [Hacker News (iOS & Android) ★2033](https://github.com/iSimar/HackerNews-React-Native)
- [ReactNativeHackerNews ★180](https://github.com/jsdf/ReactNativeHackerNews)
- [ReactNativeRedditReader ★228](https://github.com/akveo/react-native-reddit-reader)
- [Premier League ★11](https://github.com/ennioma/react-native-premier-league)
- [Buyscreen sample ★92](https://github.com/appintheair/react-native-buyscreen)
- [NewsWatch video viewer ★87](https://github.com/bradoyler/newswatch-react-native)
- [Native iOS font list ★26](https://github.com/yayolius/react-native-font-list)
- [Confreaks ★25](https://github.com/cabaret/confreaks-react-native)
- [iOS Conference App made with React Native ★177](https://github.com/mikkoj/NortalTechDay)
- [Alt/Flux Demo ★101](https://github.com/mrblueblue/react-native-alt-demo)
- [Dribbble React Native ★1108](https://github.com/catalinmiron/react-native-dribbble-app)
- [Lumpen Radio ★104](https://github.com/jhabdas/lumpen-radio)
- [React Native Embedded App ★133](https://github.com/dsibiski/react-native-embedded-app-example) -A collection of examples for using React Native in an existing iOS application
- [An example React Native project for client login authentication ★104](https://github.com/ryanmcdermott/react-native-login)
- [iOS app that transcript your voice with IBM Watson Cloud ★22](https://github.com/yrezgui/meowth-ios)
- [React Native Chromecast App ★32](https://github.com/holoed/ChromeCast_ReactNative)
- [React Native Example, Geo and Location ★87](https://github.com/bgryszko/react-native-example)
- [MagicMirror ★183](https://github.com/ajwhite/MagicMirror)
- [Kakapo -  ambient sound mixer](https://github.com/bluedaniel/Kakapo-native), [iTunes](https://itunes.apple.com/us/app/kakapo/id1046673139)
- [Finance React Native ★624](https://github.com/7kfpun/FinanceReactNative) - iOS's stocks app clone written in React Native for demo purpose.
- [Redux Demo ★132](https://github.com/chentsulin/react-native-counter-ios-android) - Minimal implement of redux counter example on ReactNative iOS and Android
- [react-native-nw-react-calculator ★2846](https://github.com/benoitvallon/react-native-nw-react-calculator) - A mobile, desktop and website App with the same code
- [Posters_Galore_Android ★9](https://github.com/marmelab/Posters_Galore_Android) - An experimental Android application using Redux and a REST API
- [uestc-bbs-react-native ★97](https://github.com/just4fun/uestc-bbs-react-native) - An iOS client for http://bbs.uestc.edu.cn/ written in React Native with Redux
- [Text Blast ★12](https://github.com/SeshApp/text-blast-react-native) - iOS client for MMS text blasting app with analogous [ionic version](https://github.com/SeshApp/text-blast-ionic) for comparison
- [iTunesConnect ★31](https://github.com/oney/iTunesConnect) - Unofficial iTunes Connect App
- [react-native-gitfeed ★1155](https://github.com/xiekw2010/react-native-gitfeed) - Yet another Github client written with react-native(iOS & android)
- [SendBirdReactNativeSample](https://github.com/smilefam/SendBird-JavaScript/tree/master/basic-react-native-sample/SendBirdReactNativeSample) - Messaging Platform 'SendBird' React Native version Sample Code.
- [rndrawer-implemented-rnrouter ★23](https://github.com/efkan/rndrawer-implemented-rnrouter) - A react-native-drawer implemented example and scaffolding for react-native-router-flux
- [GitterMobile ★49](https://github.com/terrysahaidak/GitterMobile) - Gitter client for mobile devices (currently only for android)
- [Hello Bemans ★1](https://github.com/rapportyou/HelloBemans) - Health Trainer Connection App (Android Version)
- [Insta Snap  ★26](https://github.com/iZaL/insta-snap) - Image Sharing App
- [30-days-of-react-native  ★328](https://github.com/fangwei716/30-days-of-react-native) - 30 days of React Native examples (inspired by 30DaysofSwift)
- [Ziliun React Native  ★166](https://github.com/sonnylazuardi/ziliun-react-native) - Wordpress based article reader built with react native
- [Vocab React Native ★3](https://github.com/thaiinhk/VocabReactNative) - Thai Vocabulary Learning App
- [React Weather ★65](https://github.com/stage88/react-weather) - A simple weather app built with React Native
- [react-native-hiapp ★21](https://github.com/BelinChung/react-native-hiapp) - A simple and Twitter like demo app written in react-native
- [NewYorkTimesTopStories](https://github.com/vidyuthd/NYTimesTopStories-React-Native) - Read Topstories of NewYorkTimes using its api written for android in react-native.
- [react-native-redux-facebook](https://github.com/bkspace/react-native-redux-facebook) - A simple React Redux Facebook authentication demo app.

## Frameworks

- [Awesome React Native Meteor](https://github.com/meteor-factory/awesome-react-native-meteor) - An awesome list of resources for using Meteor and React Native together
- [NativeBase ★965](https://github.com/GeekyAnts/NativeBase) - builds a layer on top of React Native that provides you with basic set of components for mobile application development

## Tutorials

Walkthroughs and tutorials that help you learn React Native.

- [Deploying React Native using Fastlane](https://shift.infinite.red/simple-react-native-ios-releases-4c28bb53a97b#.bjifers3r)
- [Adding Custom Fonts to A React Native Application](https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f)
- [Build a streaming audio app with React Native](http://slides.com/jhabdas/streaming-audio-react-native/)
- [Building Custom React Native Components From Scratch](http://moduscreate.com/react_native_custom_components_ios/)
- [Custom Native iOS Views with React Native](http://almostobsolete.net/react-native/custom-ios-views-with-react-native.html)
- [Enabling Live Reload](https://www.reddit.com/r/reactnative/comments/30hbg3/enabling_live_reload/)
- [Facebook Login With React Native](http://brentvatne.ca/facebook-login-with-react-native)
- [Integrating Parse and React Native for iOS](http://www.raywenderlich.com/106369/integrating-parse-react-native-ios)
- [Introducing React Native (on Ray Wenderlich's)](http://www.raywenderlich.com/99473/introducing-react-native-building-apps-javascript)
- [Navigator Demo ★92](https://github.com/h87kg/NavigatorDemo)
- [Official React Native tutorial](http://facebook.github.io/react-native/docs/tutorial.html#content)
- [React Native Example App: Navigation](http://tech.taskrabbit.com/blog/2015/09/21/react-native-example-app/)
- [React Native Periscope Hearts Animation](http://browniefed.com/blog/2015/09/07/react-native-periscope-hearts-animation/)
- [React Native Youtube Animated Video Slide](http://browniefed.com/blog/2015/08/31/react-native-youtube-animated-video-slide/)
- [React Native and Socket.io](https://medium.com/@ekryski/how-to-actually-use-socket-io-in-react-native-39082d8d6172)
- [React-Native Animated with React-Art - Firework Tap To Shoot](http://browniefed.com/blog/2015/08/29/react-native-animated-with-react-art-firework-show/)
- [React-native Animated API Basic Example](http://browniefed.com/blog/2015/07/26/react-native-animated-api-basic-example/)
- [React-native Animated API with PanResponder](http://browniefed.com/blog/2015/08/15/react-native-animated-api-with-panresponder/)
- [React-native Animated ScrollView Row Swipe Actions](http://browniefed.com/blog/2015/08/01/react-native-animated-listview-row-swipe/)
- [React-native press and hold button actions](http://browniefed.com/blog/2015/08/22/react-native-press-and-hold-button-actions/)
- [Droppable Components with Animated and PanResponder](http://www.yoniweisbrod.com/droppable-items-with-react-native-animated/)
- [Easily Connect React Native and Meteor](http://blog.differential.com/easily-connect-react-native-to-a-meteor-server/)
- [Leverage Existing iOS Views In Your React Native App](http://moduscreate.com/leverage-existing-ios-views-react-native-app/)
- [Facebook's F8 App Walkthrough Tutorial: React Native, Redux, Relay, Flow, Jest](http://makeitopen.com/)
- [React Native Express](http://www.reactnativeexpress.com/)
- [A Mini-Course on React Native Flexbox](https://medium.com/@yoniweisbrod/a-mini-course-on-react-native-flexbox-2832a1ccc6)

## Problem & Solution

Quick solutions to typical problems.

- [NavigatorIOS: Accessing onRightButtonPress from within child component](https://github.com/facebook/react-native/issues/31)

## Books

Books - free and commercial (but only good ones).

- [Programming React Native](https://leanpub.com/programming-react-native) - (Free) An in-depth React Native book that you should read after a you've done a couple tutorials of the many out there.
- [React Native Animation Book](http://browniefed.com/react-native-animation-book/) - (Free) React Native Animation

## Videos

Assortment of conference and training videos.

- React Conf 2015: [Introducing React Native](https://youtu.be/KVZ-P-ZI6W4)
- React Conf 2015: [A Deep Dive into React Native](https://youtu.be/7rDsRXj9-cU)
- F8 2015: [React Native and Relay](https://www.youtube.com/watch?v=X6YbAKiLCLU)
- [Generate React Native Forms](http://react.rocks/example/tcomb-form-native) with `tcomb-form-native`
- [Let's build a React Native app in 20 minutes](https://www.youtube.com/watch?v=9ArhJiMGVDc) and [Gist](https://gist.github.com/peterjmag/2ef39ba5d25f3f1e0008)
- Egghead.io: [React Native Fundamentals](https://egghead.io/series/react-native-fundamentals)
- Pluralsight.com: [Build iOS Apps with React Native](http://www.pluralsight.com/courses/build-ios-apps-react-native)
- Pluralsight.com: [Build Cross Platform React Native Apps with Exponent and Redux](https://www.pluralsight.com/courses/build-react-native-exponent-redux-apps)
- Udemy.com: [Build apps with React Native](https://www.udemy.com/reactnative/learn/v4/overview)
- [Actually Building Things In React Native , Jani Eväkallio, Futurice](https://www.youtube.com/watch?v=ZqKYk0aTaYk)
- [Using Redux, Jonas Ohlsson, State](https://www.youtube.com/watch?v=Ola8U-SpL6U)
- [Native Testing](https://www.youtube.com/watch?v=6aVDe2Y-co4)
- [React Native In The Wild - Bonnie Eisenman](https://www.youtube.com/watch?v=KWEhFWm0SL8)

## Releases

- [Release Process](http://facebook.github.io/react/blog/2015/05/22/react-native-release-process.html)
- [Stable: 0.27](https://github.com/facebook/react-native/releases/tag/v0.27.0)
- [Next: latest](https://github.com/facebook/react-native/releases/latest)
