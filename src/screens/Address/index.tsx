import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useCart } from '../../hooks/useCart';
import { COLORS } from '../../constants/colors';
import { styles } from './style';
import { ArrowLeft, MapPin, Navigation } from 'lucide-react-native';
import { STRINGS } from '../../constants/strings';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Address'>;

export const AddressScreen = () => {
  const navigation = useNavigation<NavProp>();
  const { deliveryAddress, setAddress } = useCart();
  const [addressInput, setAddressInput] = useState(deliveryAddress || '');
  const [fetching, setFetching] = useState(false);

  // Auto-fetch simulation on first open
  useEffect(() => {
    if (!deliveryAddress) {
      handleUseCurrentLocation();
    }
  }, []);

  const handleUseCurrentLocation = () => {
    setFetching(true);
    setTimeout(() => {
      setAddressInput('Plot no.10, Khasra no.873, Rawli Mehd...');
      setFetching(false);
    }, 1500); // simulate GPS fetch delay
  };

  const handleSave = () => {
    if (addressInput.trim()) {
      setAddress(addressInput.trim());
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft color={COLORS.textPrimary} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{STRINGS.addDeliveryAddress}</Text>
        <View style={styles.iconBtn} />
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flex1}>
        <ScrollView contentContainerStyle={styles.container}>
          
          <TouchableOpacity 
            style={styles.currentLocationBtn}
            onPress={handleUseCurrentLocation}
            disabled={fetching}
          >
            {fetching ? (
              <ActivityIndicator size="small" color={COLORS.teal} style={styles.indicatorSmall} />
            ) : (
              <Navigation color={COLORS.teal} size={20} style={styles.navIcon} />
            )}
            <Text style={styles.currentLocationText}>
              {fetching ? STRINGS.fetchingLocation : STRINGS.useCurrentLocation}
            </Text>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <MapPin color={COLORS.primary} size={20} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="e.g. Plot no.10, Khasra no.873, Rawli Mehd..."
              placeholderTextColor="#999"
              value={addressInput}
              onChangeText={setAddressInput}
              multiline
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={[styles.saveBtn, !addressInput.trim() && { opacity: 0.5 }]} 
            onPress={handleSave}
            disabled={!addressInput.trim() || fetching}
          >
            <Text style={styles.saveBtnText}>{STRINGS.saveAddress}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


