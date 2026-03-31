import React, { useState, useRef, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions, FlatList, ViewToken, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { COLORS } from '../../constants/colors';
import { SPACING } from '../../constants/spacing';
import { ShoppingCart, ChevronDown, Minus, Plus, MapPin } from 'lucide-react-native';
import { useCart } from '../../hooks/useCart';
import { SIMILAR_ITEMS, SUGGESTED_ITEMS, MAIN_PRODUCT, PRODUCT_IMAGES } from '../../constants/mockData';
import { URLS } from '../../constants/images';
import { STRINGS } from '../../constants/strings';
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

  const renderProductCard = (item: any) => {
    // Process discount "52% OFF", extracting first digit and "OFF" smartly
    const parts = (item.discount || '50% OFF').split(' ');
    const numberStr = parts[0];
    const suffix = parts.length > 1 ? parts[1] : '';

    return (
      <View style={styles.cardContainer}>
        <View style={styles.discountTagLarge}>
          <Text style={styles.discountTextLarge}>{numberStr}</Text>
          <Text style={styles.discountTextSmall}>{suffix}</Text>
        </View>
        <View style={styles.cardImageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.brandText}>{item.brand}</Text>
          <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.cardWeight}>{item.weight}</Text>

          <View style={styles.cardActionRow}>
            <View style={styles.cardPriceBox}>
              <Text style={styles.cardPrice}>₹{item.price}</Text>
              <Text style={styles.cardOrigPrice}>₹{item.originalPrice}</Text>
            </View>
            {item.hasOptions ? (
              <TouchableOpacity style={styles.greenSolidBtn} onPress={() => { setSelectedModalItem(item); setModalVisible(true); }}>
                <Text style={styles.greenSolidText}>{STRINGS.options2}</Text>
                <ChevronDown color={COLORS.white} size={14} style={styles.chevronMini} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.greenSolidBtnAdd}
                onPress={() => handleAddDirect(item.id, item.title, item.weight, item.price, item.image, item.isOutOfStock)}
              >
                <Text style={styles.greenSolidText}>{STRINGS.add}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
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

          <View style={styles.heroContent}>
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
                onPress={() => handleAddDirect(MAIN_PRODUCT.id, MAIN_PRODUCT.title, MAIN_PRODUCT.weight, MAIN_PRODUCT.price, MAIN_PRODUCT.image)}
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
            renderItem={({ item }) => renderProductCard(item)}
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
            renderItem={({ item }) => renderProductCard(item)}
            contentContainerStyle={styles.horizontalListPadding}
            style={styles.negativeMarginM}
          />
        </View>

        <View style={styles.spacer40} />

      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{selectedModalItem?.title}</Text>

                {selectedModalItem?.variants?.map((variant: any, index: number) => (
                  <View style={styles.variantRow} key={index}>
                    <View style={styles.variantImageContainer}>
                      <Image source={{ uri: selectedModalItem.image }} style={styles.variantImage} />
                      <View style={styles.variantBadge}><Text style={styles.variantBadgeText}>{variant.weight.charAt(0)}</Text></View>
                    </View>
                    <View style={styles.variantInfo}>
                      <Text style={styles.variantWeight}>{variant.weight}</Text>
                      <View style={styles.variantPriceBox}>
                        <Text style={styles.variantPrice}>₹{variant.price}</Text>
                        <Text style={styles.variantOrigPrice}>₹{variant.originalPrice}</Text>
                      </View>
                    </View>

                    {index === 0 && variantQuantity > 0 ? (
                      <View style={styles.modalQtySelector}>
                        <TouchableOpacity onPress={() => setVariantQuantity(q => Math.max(0, q - 1))} style={styles.modalQtyBtn}>
                          <Minus size={14} color={COLORS.primary} />
                        </TouchableOpacity>
                        <Text style={styles.modalQtyText}>{variantQuantity}</Text>
                        <TouchableOpacity onPress={() => setVariantQuantity(q => q + 1)} style={styles.modalQtyBtn}>
                          <Plus size={14} color={COLORS.primary} />
                        </TouchableOpacity>
                      </View>
                    ) : index === 0 ? (
                      <TouchableOpacity style={styles.modalAddBtn} onPress={() => setVariantQuantity(1)}>
                        <Text style={styles.modalAddText}>{STRINGS.add}</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={styles.modalAddBtn}
                        onPress={() => {
                          addItem({
                            id: `${selectedModalItem.id}-v${index}`,
                            title: selectedModalItem.title,
                            weight: variant.weight,
                            price: variant.price,
                            image: selectedModalItem.image,
                            isOutOfStock: selectedModalItem.isOutOfStock,
                          });
                          setModalVisible(false);
                        }}
                      >
                        <Text style={styles.modalAddText}>{STRINGS.add}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ))}

                <TouchableOpacity
                  style={styles.confirmBtn}
                  onPress={() => {
                    if (variantQuantity > 0 && selectedModalItem) {
                      addItem({
                        id: `${selectedModalItem.id}-v0`,
                        title: selectedModalItem.title,
                        weight: selectedModalItem.variants[0].weight,
                        price: selectedModalItem.variants[0].price,
                        image: selectedModalItem.image,
                        isOutOfStock: selectedModalItem.isOutOfStock,
                      });
                    }
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.confirmBtnText}>{STRINGS.confirm}</Text>
                </TouchableOpacity>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={addressModalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.addressModalContent}>
            <View style={styles.addressModalHeader}>
              <View style={styles.addressHeaderRow}>
                <View style={styles.mapPinCirc}>
                  <MapPin size={16} color={COLORS.white} fill={COLORS.white} />
                </View>
                <Text style={styles.addressModalTitle}>{STRINGS.whereToDeliver}</Text>
              </View>
              <TouchableOpacity onPress={() => setAddressModalVisible(false)} style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>✕</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.addressModalBtn}
              onPress={() => {
                setAddressModalVisible(false);
                navigation.navigate('Address' as never);
              }}
            >
              <Text style={styles.addressModalBtnText}>{STRINGS.addAddress}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView >
  );
};
