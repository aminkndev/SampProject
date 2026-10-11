# SampleRepository

A React Native mobile application built with JavaScript, featuring screen-based navigation and an initial structure for authentication and application state management.

## Overview

SampleRepository is a mobile application project for Android and iOS. It uses React Native to build cross-platform interfaces and React Navigation to manage application screens.

## Features

- **Splash screen** — Initial application entry screen.
- **Home screen** — Main application interface.
- **Login screen** — Authentication interface.
- **Registration screen** — User registration interface.
- **Screen navigation** — Stack-based navigation using React Navigation.
- **State management** — Redux and React Redux dependencies.
- **HTTP requests** — Axios for communicating with APIs.
- **Device information** — Access to device-related information.
- **Local storage** — Async Storage dependency for persistent client-side data.

## Technology Stack

| Technology | Purpose |
|---|---|
| JavaScript | Application development |
| React 16.8.3 | UI component library |
| React Native 0.59.9 | Cross-platform mobile development |
| React Navigation 3.11 | Screen navigation |
| Redux 4 | State management |
| React Redux 7 | Redux integration |
| Axios | HTTP requests |
| Async Storage | Local data persistence |
| Jest | Testing |

## Project Structure

```text
SampleRepository/
├── __tests__/          # Application tests
├── android/            # Android native project
├── ios/                # iOS native project
├── src/
│   ├── screen/         # Application screens
│   └── redux/          # State management
├── App.js              # Application entry component
├── app.json            # Application configuration
├── index.js            # React Native entry point
├── package.json        # Dependencies and scripts
├── babel.config.js     # Babel configuration
├── metro.config.js     # Metro bundler configuration
└── yarn.lock           # Locked dependency versions
```

## Prerequisites

Install the following tools before running the project:

- Node.js compatible with the project's legacy React Native dependencies.
- Yarn or npm.
- React Native development environment.
- Android Studio and Android SDK for Android development.
- Xcode for iOS development on macOS.

For environment setup, consult the [React Native documentation](https://reactnative.dev/docs/environment-setup).

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hdadashi/SampleRepository.git
cd SampleRepository
```

### 2. Install dependencies

Using Yarn:

```bash
yarn install
```

Alternatively, using npm:

```bash
npm install
```

### 3. Start the Metro bundler

```bash
yarn start
```

### 4. Run the Android application

In another terminal:

```bash
npx react-native run-android
```

### 5. Run the iOS application

On macOS, install the iOS dependencies if required:

```bash
cd ios
pod install
cd ..
```

Then run:

```bash
npx react-native run-ios
```

**Compatibility note:** This project uses React Native 0.59.9, an older release. Current Node.js, Android SDK, Xcode, and CocoaPods versions may not be compatible without additional configuration. Use a compatible legacy development environment if the commands fail.

## Testing

Run the configured Jest test suite:

```bash
yarn test
```

Or:

```bash
npm test
```

## Available Scripts

| Command | Description |
|---|---|
| `yarn start` | Starts the Metro bundler |
| `yarn test` | Runs the Jest test suite |

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and add tests where appropriate.
4. Commit your changes.
5. Open a pull request.

## License

No license has been specified in the repository. Contact the repository owner before redistributing or reusing the code.
