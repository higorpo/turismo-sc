
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import DetailsScreen from './screens/Details';
import HomeScreen from './screens/Home';
import WishlistScreen from './screens/Wishlist';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Turismo SC' }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
                <Stack.Screen name="Wishlist" component={WishlistScreen} options={{ title: 'Lista de desejos' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;