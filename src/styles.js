import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container_row: {
        flexDirection: 'row',
        padding: 4,
    },

    container: {
        flex: 1,
        padding: 4,
    },

    image_view: {
        flex: 1,
        margin: 2,
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 6,
        backgroundColor: 'grey',
    },

    item_view: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },

    item_view_overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },

    text: {
        color: 'white',
        fontSize: 18,
    },
});
