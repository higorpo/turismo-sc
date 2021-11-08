import React, { useContext } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { MenuContext } from './context';

interface MenuItemProps {
    label: string
    value: string
}

const MenuItem: React.FC<MenuItemProps> = ({ label, value }) => {
    const context = useContext(MenuContext);

    function handleChangeSelectedItem() {
        context?.handleChangeSelectedItem(value);
    }

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={handleChangeSelectedItem}>
            <View style={[styles.menuItem, context?.selectedItem === value ? styles.selectedItem : null]}>
                <Text style={[styles.menuItemText, context?.selectedItem === value ? styles.selectedItemText : null]}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuItem: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 14,
        marginRight: 10
    },
    selectedItem: {
        backgroundColor: '#000000',
    },
    menuItemText: {
        color: 'black',
    },
    selectedItemText: {
        color: 'white',
    }
});

export default MenuItem;