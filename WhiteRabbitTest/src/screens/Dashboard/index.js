import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text
} from "react-native";
import { connect } from "react-redux";

import {
  fetchDashboardSectionOneDataIfNeeded,
} from "action/dashboardAction";
import { string } from "assets/strings";
import {
  white,
  blackColor
} from "constants/Colors";
import { Section } from "./Section";
import SearchBar from "./SearchBar"

function Dashboard({
  dispatch,
  navigation,
  isSectionOneFetching,
  sectionOneArray
}) {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  const topValue = insets.top + 100
  useEffect(() => {
    dispatch(fetchDashboardSectionOneDataIfNeeded());
  }, []);

  function setSearchingData(text) {
    setSearchText(text)
    if (!!text) {
      const filteredArray = sectionOneArray.filter((item) => (item?.name.toLowerCase()).includes(text.toLowerCase()) || (item?.email.toLowerCase()).includes(text.toLowerCase()))
      setSearchArray(filteredArray)
    } else {
      setSearchArray([])
    }

  }
  function searchDataOnPress(item, index) {
    setSearchText('')
    setSearchArray([])
    navigation.navigate("Detail", { data: item });
  }
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>
        {string("dashboard.title")}
      </Text>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchingData}
        isFetching={isSectionOneFetching}
        searchArray={searchArray}
        onPress={searchDataOnPress}
        topValue={topValue}
      />
      <Section
        array={sectionOneArray}
        navigation={navigation}
        isFetching={isSectionOneFetching} />
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: white,
  },
  title: {
    fontSize: 20,
    color: blackColor,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 16
  }

});
function mapStateToProps(state) {
  const { dashboardReducer } = state;
  const {
    isSectionOneFetching,
    sectionOneArray
  } = dashboardReducer;
  return {
    isSectionOneFetching,
    sectionOneArray
  };
}
export default connect(mapStateToProps)(Dashboard);
