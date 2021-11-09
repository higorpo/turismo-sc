import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import LocationListItem from '../../components/LocationListItem';
import { useWishlist } from './hooks/useWishlist';

const WishlistScreen: React.FC = () => {
    const [data, loading] = useWishlist();

    return (
        <View style={{ flex: 1 }}>
            {
                loading ? (
                    <View style={{ height: '100%', justifyContent: 'center' }}>
                        <ActivityIndicator size={40} color="black" />
                    </View>
                ) : (
                    <FlatList
                        contentContainerStyle={{ padding: 10 }}
                        data={data}
                        keyExtractor={data => data.id.toString()}
                        renderItem={({ item }) => <LocationListItem data={item} />}
                    />
                )
            }
        </View>
    );
}

export default WishlistScreen;