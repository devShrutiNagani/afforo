import React, { useEffect, useState } from 'react';
import {
    Modal,
    TouchableWithoutFeedback,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Minus, Plus } from 'lucide-react-native';
import { styles } from './styles'; // or pass styles as props if needed
import { COLORS } from '../../constants/colors';

interface Props {
    visible: boolean;
    item: any;
    onClose: () => void;
    onAdd: (data: any) => void;
}

export const VariantBottomSheet = ({ visible, item, onClose, onAdd }: Props) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (!visible) {
            setQuantity(1);
        }
    }, [visible]);

    if (!item) return null;

    return (
        <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalOverlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>{item.title}</Text>

                            {item.variants?.map((variant: any, index: number) => (
                                <View style={styles.variantRow} key={index}>
                                    <View style={styles.variantImageContainer}>
                                        <Image source={{ uri: item.image }} style={styles.variantImage} />
                                        <View style={styles.variantBadge}>
                                            <Text style={styles.variantBadgeText}>
                                                {variant.weight.charAt(0)}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.variantInfo}>
                                        <Text style={styles.variantWeight}>{variant.weight}</Text>
                                        <View style={styles.variantPriceBox}>
                                            <Text style={styles.variantPrice}>₹{variant.price}</Text>
                                            <Text style={styles.variantOrigPrice}>₹{variant.originalPrice}</Text>
                                        </View>
                                    </View>

                                    {/* FIRST VARIANT WITH QUANTITY */}
                                    {index === 0 ? (
                                        quantity > 0 ? (
                                            <View style={styles.modalQtySelector}>
                                                <TouchableOpacity
                                                    onPress={() => setQuantity(q => Math.max(0, q - 1))}
                                                    style={styles.modalQtyBtn}
                                                >
                                                    <Minus size={14} color={COLORS.primary} />
                                                </TouchableOpacity>

                                                <Text style={styles.modalQtyText}>{quantity}</Text>

                                                <TouchableOpacity
                                                    onPress={() => setQuantity(q => q + 1)}
                                                    style={styles.modalQtyBtn}
                                                >
                                                    <Plus size={14} color={COLORS.primary} />
                                                </TouchableOpacity>
                                            </View>
                                        ) : (
                                            <TouchableOpacity
                                                style={styles.modalAddBtn}
                                                onPress={() => setQuantity(1)}
                                            >
                                                <Text style={styles.modalAddText}>Add</Text>
                                            </TouchableOpacity>
                                        )
                                    ) : (
                                        <TouchableOpacity
                                            style={styles.modalAddBtn}
                                            onPress={() => {
                                                onAdd({
                                                    id: `${item.id}-v${index}`,
                                                    title: item.title,
                                                    weight: variant.weight,
                                                    price: variant.price,
                                                    image: item.image,
                                                });
                                                onClose();
                                            }}
                                        >
                                            <Text style={styles.modalAddText}>Add</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            ))}

                            {/* CONFIRM BUTTON */}
                            <TouchableOpacity
                                style={styles.confirmBtn}
                                onPress={() => {
                                    if (quantity > 0) {
                                        onAdd({
                                            id: `${item.id}-v0`,
                                            title: item.title,
                                            weight: item.variants[0].weight,
                                            price: item.variants[0].price,
                                            image: item.image,
                                            quantity,
                                        });
                                    }
                                    onClose();
                                }}
                            >
                                <Text style={styles.confirmBtnText}>Confirm</Text>
                            </TouchableOpacity>

                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};