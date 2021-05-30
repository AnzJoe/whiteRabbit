import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Image,
    FlatList
} from "react-native";
import PropTypes from 'prop-types';

import images from "assets/images";
import { string } from "assets/strings";
import {
    white,
    blackColor,
    windowBackgroundGrey
} from "constants/Colors";
import SearchItem from '../SearchItem'
function SearchBar({ searchText, setSearchText, isFetching, searchArray, onPress, topValue }) {
    function renderItem({ item, index }) {
        return (
            <SearchItem
                data={item}
                onPress={() => onPress(item, index)}
            />
        )
    }
    return (
        <>
            {!!searchText && <View style={styles.background} />}

            <View style={styles.searchContainer}>
                <Image source={images.search} style={{ width: 25, height: 25 }} />
                <TextInput
                    style={styles.textInput}
                    placeholder={string("search.searchPlaceholder")}
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                    clearButtonMode={'always'}
                    selectionColor={'#AFA6CB'}
                    editable={!isFetching}
                />
                
            </View>
            {!!searchText && <View style={[styles.viewContainer, {top:topValue}]}>
                    

                    {searchArray && searchArray.length > 0 ? (
                            <FlatList
                                scrollEnabled
                                keyboardShouldPersistTaps='always'
                                nestedScrollEnabled={true}
                                showsVerticalScrollIndicator={false}
                                style={styles.listContainer}
                                contentContainerStyle={styles.contentContainerStyle}
                                data={searchArray}
                                renderItem={(item) => renderItem(item)}
                                keyExtractor={(item, index) => index.toString()}
                            />
                    ) : (<Text style={styles.emptyMessage}>
                        {string("dashboard.noData")}
                    </Text>)}
                </View>}
        </>

    );
}
const styles = StyleSheet.create({

    searchContainer: {
        zIndex: 1000,
        height: 40,
        justifyContent: "center",
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: windowBackgroundGrey,
        marginBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: white
    },
    textInput: {
        flex: 1,
        marginHorizontal: 8
    },
    background: {
        zIndex: 850,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: blackColor,
        opacity: 0.4
    },
    viewContainer: {
        zIndex: 1000,
        position: 'absolute',
        left: 30,
        right: 30,
        backgroundColor: white,
        height: 300
    },
    listContainer: {
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
        flexGrow: 1
    }
});

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};


export default SearchBar;