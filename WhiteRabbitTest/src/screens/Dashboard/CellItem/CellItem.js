import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from "react-native";
import PropTypes from 'prop-types';
import { Image } from "react-native-expo-image-cache";
import {
    white,
    blackColor,
    cellBackground
} from "constants/Colors";

function CellItem({ data, onPress, image }) {
    const preview = { uri: data?.profile_image };
    const uri = data?.profile_image;

    return (
        <View style={styles.cellContainer}>
            <View style={styles.imageContainer}
            >
                <Image
                    {...{preview, uri}}

                    style={styles.image}
                    resizeMode={'stretch'}
                />
            </View>

            <TouchableOpacity
                style={styles.itemContainer}
                activeOpacity={1}
                onPress={onPress}
            >

                <Text style={styles.name}>
                    {data?.name}
                </Text>
                <Text style={styles.company}>
                {data?.company?.name}
              </Text>

            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({

    cellContainer: {
        width: '48%',
        height: 200,
        flexDirection: "row",
        backgroundColor: cellBackground,
        marginBottom: 8,
        borderRadius: 10,
        shadowColor: blackColor,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 4,
        overflow: 'hidden'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 16,
        justifyContent: 'flex-end'
    },
    imageContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    image: {
        flex: 1,
        borderRadius: 10,
    },
    name: {
        fontSize: 20,
        color: white,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        textAlign: 'right',
        backgroundColor: 'rgba(50, 133, 168, 0.4)'
    },
    company: {
        fontSize: 14,
        color: white,
        alignSelf: 'flex-end',
        textAlign: 'right',
        backgroundColor: 'rgba(50, 133, 168, 0.4)'
    }
});

CellItem.propTypes = {
    data: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
};


export default CellItem;