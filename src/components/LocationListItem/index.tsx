import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { IAtracao } from '../../types/Atracoes';

import styles from './styles';

interface LocationListItemProps {
    data: IAtracao
}

const LocationListItem: React.FC<LocationListItemProps> = ({ data }) => {
    return (
        <TouchableOpacity activeOpacity={1}>
            <View style={styles.listItemWrapper}>
                <View style={styles.categoryWrapper}>
                    <Text>Reservas e parques ecológicos</Text>
                </View>
                <Image style={styles.imagePreview} source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipMX_sLZdUM6A7RDEYHAY6iFkeMV-p_41RVts_uw=w803-h535-k-no' }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>Beto Carrero World</Text>
                    <View style={styles.ratingWrapper}>
                        <AntDesign name="star" size={16} color="#e8cd27" />
                        <Text style={styles.ratingText}>{'4.3'}</Text>
                    </View>
                </View>
                <Text style={styles.description}>Beto Carrero World é um parque temático localizado no litoral norte do estado de Santa Catarina, Brasil. Inaugurado no dia 28 de dezembro de 1991, pelo seu idealizador João Batista Sérgio Murad, artisticamente conhecido como Beto Carrero, o parque foi desenvolvido em uma área de 14 quilômetros quadrados.</Text>
            </View>
        </TouchableOpacity>
    );
}

export default LocationListItem;