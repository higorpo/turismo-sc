import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    screenWrapper: {},

    imageItem: {
        width: width,
        height: 300
    },

    title: {
        fontWeight: 'bold',
        fontSize: 26,
        marginRight: 48
    },

    description: {
        color: '#7b7b7b',
        marginTop: 8
    },

    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginLeft: 'auto'
    },

    ratingText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5
    }
});

export default styles;