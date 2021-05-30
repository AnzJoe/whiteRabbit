import React from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import PropTypes from 'prop-types';
import { Image } from "react-native-expo-image-cache";
import {
    blackColor,
    cellBackground
} from "constants/Colors";

function SearchItem({ data, onPress }) {
    const preview = { uri: data?.profile_image };
    const uri = data?.profile_image;

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={styles.cellContainer}>

            <View style={styles.itemContainer}>
                <Image
                    {...{ preview, uri }}

                    style={styles.image}
                    resizeMode={'stretch'}
                />
                <View style={styles.textContainer}
                >
                    {data.name && <Text style={styles.name} numberOfLines={1}>
                        {data.name}
                    </Text>}
                    {data.email && <Text style={styles.rating}>
                        {data.email}
                    </Text>}
                </View>
            </View>


        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({

    cellContainer: {
        height: 60,
        flexDirection: "row",
        borderTopColor: cellBackground,
        borderTopWidth: 2,
        alignItems: 'center'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 16
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 16
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 5,
    },
    name: {
        fontSize: 14,
        color: blackColor,
        fontWeight: 'bold'
    },
    rating: {
        fontSize: 10,
        color: blackColor,
        fontWeight: 'bold'
    },
    button: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: 'red'
    }
});

SearchItem.propTypes = {
    data: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
};


export default SearchItem;