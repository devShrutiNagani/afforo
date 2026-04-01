# 🛒 Aforro — React Native Shopping App

> A clean, fast, and modular mobile shopping application built with **React Native + TypeScript**. Aforro delivers a seamless end-to-end e-commerce experience — from browsing products to placing orders — with a scalable architecture ready for production API integration.

---

## 📱 Screenshots

> _Add screenshots of ProductDetails, Cart, Checkout, and OrderSuccess screens here._

---

## ✨ Features

- 🏪 **Product Details Screen** — Variant selection, image carousel, and add-to-cart functionality
- 🛒 **Cart Management** — Add, remove, and update product quantities in real time
- 🏷️ **Coupon System** — Apply flat or percentage-based discount coupons with minimum order validation
- 📦 **Suggested & Similar Items** — Dynamic product recommendation sections inside the cart
- 📍 **Address Management** — Set and manage delivery address before checkout
- ✅ **Order Success Flow** — Dedicated confirmation screen after a successful order placement
- 🔔 **Delivery Instructions** — Let users leave notes (Ring bell, Don't call, etc.)
- 💳 **Price Summary** — Live calculation of subtotal, delivery fee, platform fee, and discount
- 📐 **Reusable Component Library** — Modular, self-contained UI components used across screens
- ⚡ **Redux Toolkit State Management** — Centralized, predictable cart state with typed actions
- 🎨 **Design Token System** — Centralized colors, fonts, spacing, and string constants

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native `0.84.1` |
| Language | TypeScript `^5.8` |
| Navigation | React Navigation `v7` (Native Stack) |
| State Management | Redux Toolkit `^2.11` + React Redux `^9.2` |
| Icons | Lucide React Native `^1.7` |
| SVG Support | React Native SVG `^15.15` |
| Safe Area | React Native Safe Area Context `^5.7` |
| Linting | ESLint + Prettier |
| Testing | Jest + React Test Renderer |
| Node Version | `>= 22.11.0` |

---

## 📁 Folder Structure

```
Aforro/
├── android/                    # Android native project files
├── ios/                        # iOS native project files (if applicable)
├── src/
│   ├── App.tsx                 # Root component — wraps Redux Provider & AppNavigator
│   ├── assets/                 # Static assets (images, icons, fonts)
│   ├── components/             # Reusable UI components
│   │   ├── Button/
│   │   ├── Header/
│   │   ├── CartItem/
│   │   ├── CouponCard/
│   │   ├── PriceSummary/
│   │   ├── QuantitySelector/
│   │   ├── StickyBottomBar/
│   │   ├── SuggestedItem/
│   │   ├── VariantBottomSheet/
│   │   └── AddressRequiredModal/
│   ├── constants/              # App-wide constants and design tokens
│   │   ├── colors.ts           # Brand & UI color palette
│   │   ├── fonts.ts            # Font family & size scale
│   │   ├── spacing.ts          # Spacing scale
│   │   ├── strings.ts          # All UI strings (i18n-ready)
│   │   ├── images.ts           # Centralized image/URL references
│   │   ├── config.ts           # App-level config (fees, thresholds)
│   │   └── mockData.ts         # Dummy data (to be replaced with API)
│   ├── hooks/
│   │   └── useCart.ts          # Custom hook for cart actions & state
│   ├── navigation/
│   │   └── AppNavigator.tsx    # Stack navigator with all screen routes
│   ├── screens/                # Full-page screen components
│   │   ├── ProductDetails/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── Address/
│   │   └── OrderSuccess/
│   ├── services/
│   │   └── cartService.ts      # API service layer for products
│   ├── store/
│   │   ├── store.ts            # Redux store configuration
│   │   └── cartSlice.ts        # Cart reducer & actions (RTK slice)
│   ├── types/
│   │   └── index.ts            # Shared TypeScript interfaces
│   └── utils/
│       └── calculations.ts     # Price & discount calculation helpers
├── App.tsx                     # Entry point
├── index.js                    # React Native app registration
├── package.json
└── tsconfig.json
```

---

## 🚀 Installation Guide

### Prerequisites

Ensure your development environment is set up by following the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) guide for your OS.

- Node.js `>= 22.11.0`
- npm or Yarn
- Android Studio (for Android) or Xcode (for iOS)
- CocoaPods (iOS only)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/aforro.git
cd aforro
```

### 2️⃣ Install JavaScript Dependencies

```bash
npm install
```

### 3️⃣ Install iOS Pods _(macOS only)_

```bash
cd ios && bundle exec pod install && cd ..
```

### 4️⃣ Start the Metro Bundler

```bash
npm start
```

### 5️⃣ Run on Android

```bash
npm run android
```

> Make sure an Android emulator is running or a physical device is connected with USB debugging enabled.

### 6️⃣ Run on iOS _(macOS only)_

```bash
npm run ios
```

> Requires Xcode 14+ and a connected simulator or physical iOS device.

---

## 🔐 Environment Configuration

The app uses `src/constants/config.ts` for environment-level configuration. If you need to add a `.env` file (e.g., for API base URLs or secret keys), follow these steps:

1. Install the env library:
   ```bash
   npm install react-native-dotenv
   ```

2. Create a `.env` file in the project root:
   ```env
   API_BASE_URL=https://your-api.example.com
   API_KEY=your_secret_api_key
   ```

3. Add the Babel plugin in `babel.config.js`:
   ```js
   module.exports = {
     presets: ['module:@react-native/babel-preset'],
     plugins: [['module:react-native-dotenv']],
   };
   ```

> ⚠️ Never commit `.env` to version control. It is already included in `.gitignore`.

---

## 🗃️ Dummy / Static Data

All mock and static data is centralized in:

```
src/constants/mockData.ts
src/services/cartService.ts
```

### What's currently mocked:

| Constant | Description |
|---|---|
| `COUPONS_DATA` | Sample coupon codes (SAVE120, AFORRO6, FLAT250) |
| `SIMILAR_ITEMS` | Product recommendations on the product detail page |
| `SUGGESTED_ITEMS` | Cart-level product suggestions |
| `MAIN_PRODUCT` | Featured product shown on ProductDetailsScreen |
| `OUT_OF_STOCK_ITEM` | A sample out-of-stock item for UI state testing |
| `PRODUCT_IMAGES` | Carousel images for the product detail view |
| `DELIVERY_INSTRUCTIONS` | Delivery preference options |
| `DUMMY_PRODUCTS` | Product list in `cartService.ts` (simulates API fetch) |

> 🔄 **To connect real APIs:** Replace the static exports in `mockData.ts` and `cartService.ts` with actual `fetch`/`axios` calls pointed at your backend. The `getProducts()` function in `cartService.ts` is already structured as an async function — simply swap the `setTimeout` mock with a real HTTP request.

---

## 🧩 Reusable Components

All reusable UI elements live in:

```
src/components/
```

Each component folder follows a consistent structure:

```
ComponentName/
├── index.tsx       # Component logic & JSX
└── style.tsx       # Component-specific StyleSheet
```

### Available Components

| Component | Purpose |
|---|---|
| `Button` | Primary action button with customizable label and press handler |
| `Header` | Screen header with back navigation and title |
| `CartItem` | Single cart item row — image, title, weight, quantity selector, price |
| `CouponCard` | Displays a coupon with code, discount info, and apply/remove action |
| `PriceSummary` | Renders subtotal, delivery fee, platform fee, discount, and grand total |
| `QuantitySelector` | Increment/decrement stepper wired to Redux cart actions |
| `StickyBottomBar` | Fixed bottom CTA bar (e.g., "Proceed to Checkout") |
| `SuggestedItem` | Compact product card used in cart suggestions |
| `VariantBottomSheet` | Slide-up modal for selecting product weight/size variants |
| `AddressRequiredModal` | Modal prompt shown when checkout is attempted without an address |

> 💡 **Usage Tip:** Import components directly from their folder index:
> ```tsx
> import { CartItem } from '../../components/CartItem';
> ```

---

## 🗂️ State Management — Redux Toolkit

State is managed globally using **Redux Toolkit** via a single `cartSlice`.

```
src/store/
├── store.ts        # Configures the Redux store; exports RootState & AppDispatch
└── cartSlice.ts    # All cart state, reducers, and actions
```

### Cart State Shape

```ts
interface CartState {
  items: CartItemType[];         // Array of items in the cart
  deliveryFee: number;           // Default delivery fee (₹15)
  discountPercentage: number;    // Applied discount percentage
  deliveryAddress: string | null; // Selected delivery address
}
```

### Available Actions

| Action | Description |
|---|---|
| `addToCart(product)` | Adds a product or increments quantity if it already exists |
| `removeFromCart(id)` | Removes a product entirely by ID |
| `updateQuantity({ id, quantity })` | Updates quantity; removes item if quantity is `0` |
| `clearCart()` | Empties the entire cart |
| `setDeliveryAddress(address)` | Sets or clears the delivery address |

### Custom Hook

Use **`useCart`** from `src/hooks/useCart.ts` to access cart state and dispatch actions without boilerplate:

```ts
const { items, addItem, removeItem, updateItemQuantity, clear, setAddress } = useCart();
```

---

## 🌐 API Integration

The service layer lives in:

```
src/services/
└── cartService.ts    # Product fetching logic (currently mocked)
```

The `getProducts()` function simulates a `500ms` API delay and returns a typed `Product[]`. To integrate a real backend:

```ts
// Replace this mock:
export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(DUMMY_PRODUCTS), 500));
};

// With a real API call:
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};
```

> As the app grows, add separate service files per domain (e.g., `orderService.ts`, `couponService.ts`, `addressService.ts`).

---

## 🎨 Styling & Design Tokens

All design decisions are centralized in `src/constants/` to ensure visual consistency across the app.

### Color Palette — `colors.ts`

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#1D8242` | Brand green — primary buttons, active states |
| `primaryLight` | `#E8F5E9` | Light green backgrounds and pill badges |
| `teal` | `#008C99` | Secondary accent color |
| `orange` | `#FF8A00` | Discount badges, offer highlights |
| `red` | `#D84040` | Error states, out-of-stock labels |
| `textPrimary` | `#111827` | Main body text |
| `textSecondary` | `#6B7280` | Subtitles and helper text |
| `background` | `#F5F7F9` | Screen background |
| `cardBackground` | `#FFFFFF` | Card and list item surfaces |

### Typography — `fonts.ts`

```ts
FONTS.sizes = { xs: 12, s: 14, m: 16, l: 18, xl: 20, xxl: 24, xxxl: 32 }
```

### App Config — `config.ts`

```ts
APP_CONFIG = {
  platformFee: 20,                // Fixed platform charge per order
  freeDeliveryThreshold: 500,     // Cart total above which delivery is free
  defaultDiscountPct: 0.1,        // Default 10% discount applied to orders
  defaultSavingsMatch: 99,        // Minimum savings display threshold
}
```

> 🚫 **Never hardcode colors, strings, or spacing values directly in component files.** Always reference the constants — this is the established pattern in this project.

---

## 📐 Navigation Structure

Navigation is handled by **React Navigation v7** with a Native Stack:

```
AppNavigator (NativeStack)
├── ProductDetails    ← Initial screen
├── Cart
├── Checkout          ← Accepts optional coupon & pricing params
├── Address
└── OrderSuccess
```

Type-safe route params are defined in `RootStackParamList` inside `AppNavigator.tsx`.

---

## 🔮 Future Improvements

- [ ] **Authentication** — Add user login/signup screens with JWT-based auth
- [ ] **Real API Integration** — Replace all mock data with live REST or GraphQL endpoints
- [ ] **Wishlist Feature** — Allow users to save products for later
- [ ] **Search & Filter** — Full-text product search with category filtering
- [ ] **Push Notifications** — Order status updates via FCM
- [ ] **Payment Gateway** — Integrate Razorpay or Stripe for real payments
- [ ] **Infinite Scroll / Pagination** — Handle large product catalogs efficiently
- [ ] **Offline Support** — Cache cart state with Redux Persist
- [ ] **Unit & Integration Tests** — Expand test coverage using Jest and React Native Testing Library
- [ ] **Accessibility (a11y)** — Add proper `accessibilityLabel` and screen reader support
- [ ] **Dark Mode** — Extend the color token system to support a dark theme

---

## 💡 Developer Tips

- **Adding a new screen?** Register it in `AppNavigator.tsx` and add its param type to `RootStackParamList`.
- **Adding a new component?** Create a folder under `src/components/` with an `index.tsx` and a `style.tsx`. Never put component styles inline.
- **Adding new strings?** Always add them to `src/constants/strings.ts` first. Never hardcode UI text directly in JSX.
- **Adding new images?** Add the URL or asset reference to `src/constants/images.ts` (`URLS`), then import it where needed.
- **Cart logic?** Use the `useCart` hook — avoid dispatching Redux actions directly from screens.
- **Price calculations?** Add new formulas to `src/utils/calculations.ts` to keep logic out of components.
- **Performance:** Prefer `React.memo` for list items (`CartItem`, `SuggestedItem`) to avoid unnecessary re-renders when the parent cart state updates.

---

## 👤 Author

**Pratik**
- GitHub: [@YOUR_GITHUB_USERNAME](https://github.com/YOUR_GITHUB_USERNAME)

---

## 📄 License

This project is private and not licensed for public distribution.

---

> _Built with ❤️ using React Native & TypeScript._
