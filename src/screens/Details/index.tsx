import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import * as Linking from 'expo-linking';
import React, { useEffect } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { IAtracao } from '../../types/Atracoes';
import useIsAddedWishlist from './hooks/useIsAddedWishlist';
import styles from './styles';


type ParamList = {
    Details: IAtracao;
};

const DetailsScreen: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<ParamList, 'Details'>>();
    const data = route.params;

    const [isAdded, add, remove] = useIsAddedWishlist(data.id);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => isAdded ? remove() : add()}>
                    {isAdded ? <AntDesign name="star" size={24} color="black" /> : <AntDesign name="staro" size={24} color="black" />}
                </TouchableOpacity>
            )
        })

    }, []);

    function handleOpenAction(type: string) {
        switch (type) {
            case 'phone-number':
                Linking.openURL(`tel:${data.telContato}`);
                return;
            case 'website':
                Linking.openURL(data.websiteUrl as string);
                return;
            case 'email':
                Linking.openURL(`mailto:${data.email}`);
                return;
            case 'location':
                Linking.openURL(`https://www.google.com/maps/search/${data.endereco}`);
                return;
            default:
        }
    }

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
                <View>
                    <Text>{data.tiposAtracoes?.nome}</Text>
                </View>
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
                        <TouchableOpacity onPress={() => handleOpenAction('location')}>
                            <View style={styles.descriptionItem}>
                                <MaterialCommunityIcons name="map-marker-radius" size={24} color="#7b7b7b" />
                                <Text style={styles.descriptionItemText}>{data.endereco}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {data.horarioFuncionamento && (
                        <View style={styles.descriptionItem}>
                            <MaterialCommunityIcons name="progress-clock" size={24} color="#7b7b7b" />
                            <Text style={styles.descriptionItemText}>{data.horarioFuncionamento}</Text>
                        </View>
                    )}
                    {data.telContato && (
                        <TouchableOpacity onPress={() => handleOpenAction('phone-number')}>
                            <View style={styles.descriptionItem}>
                                <MaterialCommunityIcons name="phone-classic" size={24} color="#7b7b7b" />
                                <Text style={styles.descriptionItemText}>{data.telContato}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {data.websiteUrl && (
                        <TouchableOpacity onPress={() => handleOpenAction('website')}>
                            <View style={styles.descriptionItem}>
                                <MaterialCommunityIcons name="link" size={24} color="#7b7b7b" />
                                <Text style={styles.descriptionItemText}>{data.websiteUrl}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    {data.email && (
                        <TouchableOpacity onPress={() => handleOpenAction('email')}>
                            <View style={styles.descriptionItem}>
                                <MaterialCommunityIcons name="email" size={24} color="#7b7b7b" />
                                <Text style={styles.descriptionItemText}>{data.email}</Text>
                            </View>
                        </TouchableOpacity>
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