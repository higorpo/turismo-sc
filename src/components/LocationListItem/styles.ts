import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listItemWrapper: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },

    imagePreview: {
        width: '100%',
        height: undefined,
        maxHeight: 300,
        aspectRatio: 2 / 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10
    },

    description: {
        color: '#9c9c9c',
        marginTop: 8
    },

    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 'auto'
    },

    ratingText: {
        color: '#e8cd27',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5
    },

    categoryWrapper: {
        position: 'absolute',
        zIndex: 9,
        backgroundColor: 'white',
        padding: 5,
        borderBottomRightRadius: 10,
        left: 8,
        top: 0
    }
});

export default styles;