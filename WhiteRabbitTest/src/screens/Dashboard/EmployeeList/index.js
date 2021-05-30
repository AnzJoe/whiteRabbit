import React from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from "react-native";
import { string } from "assets/strings";
import { Shimmer as ShimmerPlaceHolder } from "component";
import {
    blackColor
} from "constants/Colors";
import CellItem from '../CellItem'
export function EmployeeList({ array, navigation, isFetching }) {

    function renderItem({ item }) {
        return (
            <CellItem
                data={item}
                onPress={() => {
                    navigation.navigate("Detail", { data: item });
                }}
            />
        )
    }
    const myShimmers = Array.apply(null, Array(5)).map((item, index) => {
        return (
            <View key={`myShimmers${index}`} style={styles.shimmer}>
                <ShimmerPlaceHolder height={200} containerStyle={styles.cellShimmerContainer} />
                <ShimmerPlaceHolder height={200} containerStyle={styles.cellShimmerContainer} />
            </View>
        )
    })
    return (
        <View style={styles.section}>

            {isFetching ? (
                <View style={styles.listContainer}>
                    {myShimmers}

                </View>
            ) : (array && array.length > 0 ? (<FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.listContainer}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={styles.contentContainerStyle}
                data={array}
                numColumns={2}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item, index) => index.toString()}
            />) : (<Text style={styles.emptyMessage}>
                {string("dashboard.noData")}
            </Text>))}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1
    },
    shimmer: {
        flexDirection: 'row'
    },
    cellShimmerContainer: {
        flex: 1,
        margin: 8,
        borderRadius: 10,
        shadowColor: blackColor,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 4,
    },
    section: {
        flex: 1
    },
    emptyMessage: {
        color: '#A1A1A1',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: 100
    },
    contentContainerStyle: {
        paddingBottom: 16,
        paddingHorizontal: 16
    }
});