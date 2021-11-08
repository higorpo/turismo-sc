import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import LocationListItem from '../../components/LocationListItem';
import { Menu, MenuItem } from '../../components/Menu';
import { IAtracao } from '../../types/Atracoes';
import { useAtracoes } from './hooks/useAtracoes';


type MenuOptionsType = 'all' | 'reservas-parques' | 'parques-diversao' | 'museus';

const menuOptionsMap = {
    'all': -1,
    'reservas-parques': 1,
    'parques-diversao': 2,
    'museus': 3,
}

const HomeScreen: React.FC = () => {
    const [selectedMenuOption, setSelectedMenuOption] = useState<MenuOptionsType>('all');
    const [data, loading] = useAtracoes();

    const filteredData = data.filter(item => item.tiposAtracoes?.id === menuOptionsMap[selectedMenuOption]);

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