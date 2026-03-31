# Cart Flow App

## Project Setup

1. **Install Dependencies**
   Make sure you have Node.js and npm installed. Run the following command in the root directory:
   ```bash
   npm install
   ```

2. **iOS Setup (Mac only)**
   If you are running on iOS, you need to install CocoaPods dependencies:
   ```bash
   cd ios
   pod install
   cd ..
   ```

3. **Run the App**
   To start the metro bundler:
   ```bash
   npm start
   ```

   To run on iOS:
   ```bash
   npm run ios
   ```

   To run on Android:
   ```bash
   npm run android
   ```

## Folder Structure

The project follows a scalable architecture that separates concerns:

```text
src/
 ├── components/          # Reusable UI components (Button, Header, CartItem, etc.)
 ├── screens/             # Main application screens (Cart, Checkout, OrderSuccess)
 ├── navigation/          # React Navigation setup
 ├── services/            # Mock API services for product data
 ├── store/               # Redux Toolkit state management
 ├── hooks/               # Custom React hooks (e.g., useCart)
 ├── utils/               # Helper functions and business logic (e.g., calculations)
 ├── constants/           # Centralized theme details (colors, fonts, spacing)
 └── types/               # TypeScript interfaces and types
```

## Tech Stack Used

- **React Native Framework**: React Native CLI (Version 0.84.1)
- **Language**: TypeScript for static type checking
- **State Management**: Redux Toolkit & React-Redux for global cart state
- **Navigation**: React Navigation (Native Stack)
- **Icons**: `lucide-react-native` and `react-native-svg` for scalable vector icons
- **UI Components**: Built with React Native core components and functional hooks

## Assumptions Made

- **Figma Design**: The design uses a muted orange as the primary color (`#E8A341`) and a clean, modern aesthetic with rounded corners and consistent padding. I've mirrored this in `constants/colors.ts` and `constants/spacing.ts`.
- **Dummy Data**: The app loads initial dummy data from `services/cartService.ts` to populate the cart and verify functionality, simulating an API request.
- **Delivery Fee**: Assumed a fixed delivery fee of $15 for logic demonstration, configurable in Redux state.
- **Quantity Limits**: Removing an item when quantity reaches 0 is handled seamlessly via the Redux reducer.

