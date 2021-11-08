import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import LocationListItem from '../../components/LocationListItem';
import { Menu, MenuItem } from '../../components/Menu';


type MenuOptionsType = 'all' | 'reservas-parques' | 'parques-diversao' | 'museus';

const HomeScreen: React.FC = () => {
    const [selectedMenuOption, setSelectedMenuOption] = useState<MenuOptionsType>('all');

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

            <FlatList
                contentContainerStyle={{ padding: 10 }}
                data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={({ item }) => (
                    <LocationListItem />
                )}
            />
        </View>
    );
}

export default HomeScreen;