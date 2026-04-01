import React from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
} from 'react-native';
import { MapPin } from 'lucide-react-native';
import { COLORS } from '../../constants/colors';
import { STRINGS } from '../../constants/strings';
import { styles } from './styles';

interface Props {
    visible: boolean;
    onClose: () => void;
    onAddAddress: () => void;
}

export const AddressRequiredModal: React.FC<Props> = ({
    visible,
    onClose,
    onAddAddress,
}) => {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={styles.addressModalContent}>

                    {/* Header */}
                    <View style={styles.addressModalHeader}>
                        <View style={styles.addressHeaderRow}>
                            <View style={styles.mapPinCirc}>
                                <MapPin size={16} color={COLORS.white} fill={COLORS.white} />
                            </View>
                            <Text style={styles.addressModalTitle}>
                                {STRINGS.whereToDeliver}
                            </Text>
                        </View>

                        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                            <Text style={styles.closeBtnText}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Button */}
                    <TouchableOpacity
                        style={styles.addressModalBtn}
                        onPress={onAddAddress}
                    >
                        <Text style={styles.addressModalBtnText}>
                            {STRINGS.addAddress}
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    );
};