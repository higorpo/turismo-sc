import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import * as Linking from 'expo-linking';
import React, { useEffect } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { IAtracao } from '../../types/Atracoes';
import DetailItem from './components/DetailItem';
import useIsAddedWishlist from './hooks/useIsAddedWishlist';
import styles from './styles';


type ParamList = {
    Details: IAtracao;
};

const DetailsScreen: React.FC = () => {
    const navigation = useNavigation();
    const { params: data } = useRoute<RouteProp<ParamList, 'Details'>>();

    const [isAdded, add, remove] = useIsAddedWishlist(data.id);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => isAdded ? remove() : add()}>
                    {isAdded ? <AntDesign name="star" size={24} color="black" /> : <AntDesign name="staro" size={24} color="black" />}
                </TouchableOpacity>
            )
        })

    }, [isAdded, add, remove]);

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

                    <DetailItem icon="map-marker-radius" text={data.endereco} onPress={() => handleOpenAction('location')} />
                    <DetailItem icon="progress-clock" text={data.horarioFuncionamento} />
                    <DetailItem icon="phone-classic" text={data.telContato} onPress={() => handleOpenAction('phone-number')} />
                    <DetailItem icon="link" text={data.websiteUrl} onPress={() => handleOpenAction('website')} />
                    <DetailItem icon="email" text={data.email} onPress={() => handleOpenAction('email')} />
                    <DetailItem icon={<MaterialIcons name="attach-money" size={24} color="#7b7b7b" />} text={data.precoIngresso} />
                </View>
            </View>
        </ScrollView>
    );
}

export default DetailsScreen;