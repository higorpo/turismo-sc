import React, { useState, useCallback } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { MenuContext } from './context';

interface MenuProps {
    selectedItem: string
    onSelectedItemChange: (selectedItem: string) => void
    style?: ViewStyle
}

const Menu: React.FC<MenuProps> = ({ selectedItem: _selectedItem, onSelectedItemChange, style, children }) => {
    const [selectedItem, setSelectedItem] = useState<string>(_selectedItem);

    const handleChangeSelectedItem = useCallback((selectedItem: string) => {
        onSelectedItemChange(selectedItem);
        setSelectedItem(selectedItem);
    }, []);

    return (
        <View>
            <ScrollView horizontal contentContainerStyle={[styles.menuWrapper, style]}>
                <MenuContext.Provider value={{ selectedItem, handleChangeSelectedItem }}>
                    {children}
                </MenuContext.Provider>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    menuWrapper: {
        flex: 1,
        height: 35
    }
});

export default Menu;