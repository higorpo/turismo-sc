import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { FlatList, View, Image, Text, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { IAtracao } from '../../types/Atracoes';

import styles from './styles';

type ParamList = {
    Details: IAtracao;
};

const DetailsScreen: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'Details'>>();
    const data = route.params;

    return (
        <ScrollView style={styles.screenWrapper}>
            <FlatList
                horizontal
                pagingEnabled
                data={data.imagens}
                keyExtractor={data => data}
                renderItem={({ item }) => <Image style={styles.imageItem} source={{ uri: item }} />}
            />

            <View style={{ padding: 16 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.title}>{data.nome}</Text>
                    <View style={styles.ratingWrapper}>
                        <AntDesign name="star" size={16} color="black" />
                        <Text style={styles.ratingText}>{data.avaliacao}</Text>
                    </View>
                </View>
                {data.descricao && <Text style={styles.description}>{data?.descricao}</Text>}

                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Informações sobre o local</Text>
                    {data.endereco && (
                        <View style={styles.descriptionItem}>
                            <MaterialCommunityIcons name="map-marker-radius" size={24} color="#7b7b7b" />
                            <Text style={styles.descriptionItemText}>{data.endereco}</Text>
                        </View>
                    )}
                    {data.horarioFuncionamento && (
                        <View style={styles.descriptionItem}>
                            <MaterialCommunityIcons name="progress-clock" size={24} color="#7b7b7b" />
                            <Text style={styles.descriptionItemText}>{data.horarioFuncionamento}</Text>
                        </View>
                    )}
                    {data.telContato && (
                        <View style={styles.descriptionItem}>
                            <MaterialCommunityIcons name="phone-classic" size={24} color="#7b7b7b" />
                            <Text style={styles.descriptionItemText}>{data.telContato}</Text>
                        </View>
                    )}
                    {data.websiteUrl && (
                        <View style={styles.descriptionItem}>
                            <MaterialCommunityIcons name="link" size={24} color="#7b7b7b" />
                            <Text style={styles.descriptionItemText}>{data.websiteUrl}</Text>
                        </View>
                    )}
                    {data.email && (
                        <View style={styles.descriptionItem}>
                            <MaterialCommunityIcons name="email" size={24} color="#7b7b7b" />
                            <Text style={styles.descriptionItemText}>{data.email}</Text>
                        </View>
                    )}
                    {data.precoIngresso && (
                        <View style={styles.descriptionItem}>
                            <MaterialIcons name="attach-money" size={24} color="#7b7b7b" />
                            <Text style={styles.descriptionItemText}>{data.precoIngresso}</Text>
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

export default DetailsScreen;