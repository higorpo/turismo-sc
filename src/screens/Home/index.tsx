import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, View } from 'react-native';
import LocationListItem from '../../components/LocationListItem';
import { Menu, MenuItem } from '../../components/Menu';
import { useAtracoes } from './hooks/useAtracoes';

type MenuOptionsType = 'all' | 'reservas-parques' | 'parques-diversao' | 'museus';

const menuOptionsMap = {
    'all': -1,
    'reservas-parques': 1,
    'parques-diversao': 2,
    'museus': 3,
}

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

    const [selectedMenuOption, setSelectedMenuOption] = useState<MenuOptionsType>('all');
    const [data, loading] = useAtracoes();

    const filteredData = data.filter(item => item.tiposAtracoes?.id === menuOptionsMap[selectedMenuOption]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
                    <AntDesign name="staro" size={24} color="black" />
                </TouchableOpacity>
            )
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Menu
                style={{ paddingHorizontal: 10, marginTop: 10 }}
                selectedItem={selectedMenuOption}
                onSelectedItemChange={setSelectedMenuOption as any}>

                <MenuItem label="Todos" value="all" />
                <MenuItem label="Reservas e parques ecológicos" value="reservas-parques" />
                <MenuItem label="Parques de diversão" value="parques-diversao" />
                <MenuItem label="Museus" value="museus" />
            </Menu>

            {
                loading ? (
                    <View style={{ height: '100%', justifyContent: 'center' }}>
                        <ActivityIndicator size={40} color="black" />
                    </View>
                ) : (
                    <FlatList
                        contentContainerStyle={{ padding: 10 }}
                        data={selectedMenuOption === 'all' ? data : filteredData}
                        keyExtractor={data => data.id.toString()}
                        renderItem={({ item }) => <LocationListItem data={item} />}
                    />
                )
            }
        </View>
    );
}

export default HomeScreen;