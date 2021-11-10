import React, { ReactNode } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

interface DetailItemProps {
    /**
     * Ícone do MaterialCommunityIcons ou um componente de ícone personalizado.
     */
    icon: string | ReactNode
    text: string | null
    onPress?: () => void
}

const DetailItem: React.FC<DetailItemProps> = ({ icon, text, onPress }) => {
    const iconComponent = !React.isValidElement(icon) ? <MaterialCommunityIcons name={icon as any} size={24} color="#7b7b7b" /> : icon;

    if (!text) return null;

    return (
        <TouchableOpacity activeOpacity={onPress ? 0.5 : 1} onPress={onPress}>
            <View style={styles.descriptionItem}>
                {iconComponent}
                <Text style={styles.descriptionItemText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default DetailItem;