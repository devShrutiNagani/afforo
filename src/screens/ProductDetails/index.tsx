import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ShoppingCart } from 'lucide-react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View, ViewToken } from 'react-native';
import { AddressRequiredModal } from '../../components/AddressRequiredModal';
import { SuggestedItem } from '../../components/SuggestedItem';
import { VariantBottomSheet } from '../../components/VariantBottomSheet';
import { COLORS } from '../../constants/colors';
import { MAIN_PRODUCT, PRODUCT_IMAGES, SIMILAR_ITEMS, SUGGESTED_ITEMS } from '../../constants/mockData';
import { SPACING } from '../../constants/spacing';
import { STRINGS } from '../../constants/strings';
import { useCart } from '../../hooks/useCart';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { styles } from './style';

const { width } = Dimensions.get('window');

type NavProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>;


export const ProductDetailsScreen = () => {
  const navigation = useNavigation<NavProp>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const [selectedModalItem, setSelectedModalItem] = useState<any>(null);
  const { addItem, deliveryAddress } = useCart();

  const [variantQuantity, setVariantQuantity] = useState(1);

  useEffect(() => {
    if (!modalVisible) {
      setVariantQuantity(1);
    }
  }, [modalVisible]);

  useEffect(() => {
    if (deliveryAddress === null) {
      setAddressModalVisible(true);
    } else {
      setAddressModalVisible(false);
    }
  }, [deliveryAddress]);

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCurrentSlide(viewableItems[0].index || 0);
    }
  }, []);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleAddDirect = (id: string, title: string, weight: string, price: number, image: string, isOutOfStock?: boolean) => {
    addItem({
      id,
      title,
      weight,
      price,
      image,
      isOutOfStock,
    });
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.iconBtn} />
        <Text style={styles.headerTitle} numberOfLines={1}>Dairy milk silk chocolate...</Text>
        <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('Cart')}>
          <ShoppingCart color={COLORS.textPrimary} size={22} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

        <View style={styles.heroSection}>
          <View style={styles.heroTag}>
            <Text style={styles.heroTagText}>52%</Text>
            <Text style={styles.heroTagSub}>OFF</Text>
          </View>

          <View style={styles.carouselContainer}>
            <FlatList
              data={PRODUCT_IMAGES}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={viewabilityConfig}
              renderItem={({ item }) => (
                <View style={[styles.slideImageContainer, { width: width - (SPACING.m * 4) }]}>
                  <Image source={{ uri: item }} style={styles.heroImage} resizeMode="contain" />
                </View>
              )}
            />
          </View>

          <View style={styles.paginationDots}>
            {PRODUCT_IMAGES.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentSlide === index ? styles.dotActive : styles.dotInactive
                ]}
              />
            ))}
          </View>

          <View>
            <Text style={styles.heroBrand}>Cadbury</Text>
            <Text style={styles.heroTitle}>Dairy milk Silk Chocolate Bar</Text>
            <Text style={styles.heroWeight}>64 g</Text>

            <View style={styles.heroActionRow}>
              <View style={styles.heroPriceRow}>
                <Text style={styles.heroPrice}>₹444</Text>
                <Text style={styles.heroOrigPrice}>₹444</Text>
              </View>
              <TouchableOpacity
                style={styles.heroBtn}
                onPress={() => handleAddDirect(MAIN_PRODUCT.id, MAIN_PRODUCT.title, MAIN_PRODUCT.weight, MAIN_PRODUCT.price, MAIN_PRODUCT.image, true)}
              >
                <Text style={styles.heroBtnText}>{STRINGS.add}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>{STRINGS.similarProducts}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={SIMILAR_ITEMS.map((item, index) => ({ ...item, hasOptions: index % 2 === 0 }))}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <SuggestedItem
                item={item}
                onOptions={(it) => {
                  setSelectedModalItem(it);
                  setModalVisible(true);
                }}
                onAdd={(it) =>
                  addItem({
                    id: it.id,
                    title: it.title,
                    weight: it.weight,
                    price: it.price,
                    image: it.image,
                    isOutOfStock: it.isOutOfStock,
                  })
                }
              />
            )}
            contentContainerStyle={styles.horizontalListPadding}
            style={styles.negativeMarginM}
          />
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>{STRINGS.description}</Text>
          <Text style={styles.descriptionText}>
            {STRINGS.descriptionText}
          </Text>
        </View>

        <View style={styles.sectionBlock}>
          <Text style={styles.sectionTitle}>{STRINGS.customersAlsoBought}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={SUGGESTED_ITEMS.map((item, index) => ({ ...item, hasOptions: index % 2 !== 0 }))}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <SuggestedItem
                item={item}
                onOptions={(it) => {
                  setSelectedModalItem(it);
                  setModalVisible(true);
                }}
                onAdd={(it) =>
                  addItem({
                    id: it.id,
                    title: it.title,
                    weight: it.weight,
                    price: it.price,
                    image: it.image,
                    isOutOfStock: it.isOutOfStock,
                  })
                }
              />
            )}
            contentContainerStyle={styles.horizontalListPadding}
            style={styles.negativeMarginM}
          />
        </View>
        <View style={styles.spacer40} />
      </ScrollView>

      <VariantBottomSheet
        visible={modalVisible}
        item={selectedModalItem}
        onClose={() => setModalVisible(false)}
        onAdd={(data) => addItem(data)}
      />

      <AddressRequiredModal
        visible={addressModalVisible}
        onClose={() => setAddressModalVisible(false)}
        onAddAddress={() => {
          setAddressModalVisible(false);
          navigation.navigate('Address' as never);
        }}
      />

    </SafeAreaView >
  );
};
