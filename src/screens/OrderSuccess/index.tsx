import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { Button } from '../../components/Button';
import { styles } from './style';

import { STRINGS } from '../../constants/strings';

type OrderSuccessProps = NativeStackNavigationProp<RootStackParamList, 'OrderSuccess'>;

export const OrderSuccessScreen = () => {
  const navigation = useNavigation<OrderSuccessProps>();

  const handleContinue = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'ProductDetails' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🎉</Text>
        </View>

        <Text style={styles.title}>{STRINGS.orderSuccess}</Text>
        <Text style={styles.subtitle}>
          {STRINGS.orderSuccessMsg}
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          title={STRINGS.backToHome}
          onPress={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
};


