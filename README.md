#Apexus FAQ App

Apexus FAQ App is a mobile application designed to provide users with an intuitive and efficient way to browse frequently asked questions (FAQs) on various topics. The app supports light and dark modes, user-friendly navigation, and provides smooth transitions between screens.

##Features
* **FAQ Categories**: Users can explore different categories of FAQs like 340B Eligibility, Pricing, Orphan Drugs, etc.

* **Search Functionality**: Powerful search feature to quickly find relevant questions across all categories.

* **FAQ Detail View**: Displays complete answers to selected FAQs, with expandable question sections.

* **Settings**: Users can toggle between light and dark mode.

* **Dark Mode Support**: The app supports a dark theme to reduce eye strain during night-time usage.

## Tech Stack
* **Frontend Framework**: React Native

* **Navigation**: React Navigation

* **Icons**: react-native-vector-icons (Ionicons)

* **Context Management**: React Context API for managing theme (light/dark mode)

* **State Management**: React hooks (useState, useEffect)

* **File Management**: JSON files for loading FAQ data from the app’s assets

## Main Features & Components
1. MainScreen
   * Displays a grid of FAQ categories.

   * Each category loads its own set of FAQs from corresponding JSON files.

   * Customizable design for light and dark modes.

2. SearchScreen
   * Allows users to search through all available FAQs.

   * Displays results with relevant questions and snippets of answers.

3. FAQScreen
   * Shows detailed information about a selected FAQ, including the question and full answer.

   * Users can expand or collapse long questions for better readability.

4. SettingsScreen
   * Provides a switch to toggle between light and dark mode.

   * Displays app version and other information.

##Navigation Structure
The app uses a bottom tab navigator to switch between the main sections:

* **Home Tab**: Displays the FAQ categories (MainScreen).

* **Search Tab**: Provides a search interface for FAQs.

* **Settings Tab**: Allows users to customize the app experience (toggle dark mode, view version, etc.).

Each tab has a stack navigator for handling transitions:

* **MainStackNavigator**: Navigates between the category list and individual FAQ details.

* **SearchStackNavigator**: Navigates between search results and FAQ details.

##Theming
The app supports both light and dark themes, managed globally using the `ThemeContext`:

* **Light Mode**: Bright and clean design, optimized for daytime use.

* **Dark Mode**: Eye-friendly colors and contrasts, optimized for night-time or low-light use.

## Installation and Setup
To set up the app locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/rei-cher/ApexusFAQApp.git
   cd ApexusFAQApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:
   * **Android**

      ```bash
      npx react-native run-android
      npm start
      ```
   * **IOS**
      ```bash
      npx react-native run-ios
      ```
      > **IMPORTANT**
      >
      >IOS functionality is still in `development`