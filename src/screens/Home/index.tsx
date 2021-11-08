import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Menu from '../../components/Menu/Menu';
import MenuItem from '../../components/Menu/MenuItem';

type MenuOptionsType = 'all' | 'reservas-parques' | 'parques-diversao' | 'museus';

const HomeScreen: React.FC = () => {
    const [selectedMenuOption, setSelectedMenuOption] = useState<MenuOptionsType>('all');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Menu
                style={{ paddingHorizontal: 10, marginTop: 10 }}
                selectedItem={selectedMenuOption}
                onSelectedItemChange={setSelectedMenuOption as any}>

                <MenuItem label="Todos" value="all" />
                <MenuItem label="Reservas e parques ecológicos" value="reservas-parques" />
                <MenuItem label="Parques de diversão" value="parques-diversao" />
                <MenuItem label="Museus" value="museus" />
            </Menu>
        </View>
    );
}

export default HomeScreen;