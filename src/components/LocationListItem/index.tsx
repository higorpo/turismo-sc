import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import { IAtracao } from '../../types/Atracoes';

import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface LocationListItemProps {
    data: IAtracao
}

const LocationListItem: React.FC<LocationListItemProps> = ({ data }) => {
    const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

    function handleOpenDetails() {
        navigation.navigate('Details', { ...data });
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={handleOpenDetails}>
            <View style={styles.listItemWrapper}>
                <View style={styles.categoryWrapper}>
                    <Text>{data.tiposAtracoes?.nome}</Text>
                </View>
                <Image style={styles.imagePreview} source={{ uri: data.imagens[0] }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>{data.nome}</Text>
                    <View style={styles.ratingWrapper}>
                        <AntDesign name="star" size={16} color="#e8cd27" />
                        <Text style={styles.ratingText}>{data.avaliacao}</Text>
                    </View>
                </View>
                {data.descricao && <Text style={styles.description}>{data?.descricao}</Text>}
            </View>
        </TouchableOpacity>
    );
}

export default LocationListItem;