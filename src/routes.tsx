
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Turismo SC' }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;