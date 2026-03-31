import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductDetailsScreen } from '../screens/ProductDetails';
import { CartScreen } from '../screens/Cart';
import { CheckoutScreen } from '../screens/Checkout';
import { OrderSuccessScreen } from '../screens/OrderSuccess';
import { AddressScreen } from '../screens/Address';

export type RootStackParamList = {
  ProductDetails: undefined;
  Cart: undefined;
  Checkout: { appliedCouponId?: string | null; mockSubtotal?: number; mockDiscount?: number } | undefined;
  OrderSuccess: undefined;
  Address: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductDetails"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#F9FAFB' }
        }}
      >
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
