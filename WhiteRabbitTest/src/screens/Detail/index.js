import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Linking from "expo-linking";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import images from "assets/images";
import { Image as BlurImage } from "react-native-expo-image-cache";
import { string } from "assets/strings";
import {
  white,
  blackColor
} from "constants/Colors";
function Detail({
  route,
  dispatch,
  navigation
}) {
  const insets = useSafeAreaInsets();
  const { data, image } = route.params;
  const preview = { uri: data?.profile_image };
  const uri = data?.profile_image;
  
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>

      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.back} onPress={() => {
          navigation.goBack();
        }}>

          <Image source={images.back} />
        </TouchableOpacity>
        <Text style={styles.title}>
          {string("dashboard.title")}
        </Text>
      </View>
      <ScrollView>
        <>
          <View style={styles.topContainer}>
            <View style={styles.imageContainer}>
              <BlurImage
                {...{ preview, uri }}

                style={styles.image}
                resizeMode={'stretch'}
              />
            </View>
            <View style={styles.nameContainer}>
              {data.name  && <Text style={[styles.textPadding, styles.bigText]}>
                {data.name}
              </Text>}
              {data.company && data.company.name &&  <Text style={[styles.textPadding, styles.normalText, { color: 'grey' }]}>
                {data.company.name}
              </Text>}
              {data.company && data.company.bs && <Text style={[styles.textPadding, styles.normalText]}>
                {`${string("detail.role")} ${data.company.bs}`}
              </Text>}
              {data.company && data.company.catchPhrase && <Text style={[styles.textPadding, styles.normalText, { color: 'grey' }]}>
                {`${string("detail.catchPhrase")} ${data.company.catchPhrase}`}
              </Text>}
            </View>

          </View>
          <View style={styles.bottomContainer}>
          {data.email   &&  <TouchableOpacity onPress={()=>Linking.openURL(`mailto:${data.email}`)}><Text style={[styles.textPadding, styles.normalText, {color:'#3285a8', marginTop: 16}]}>
              {`${string("detail.email")} ${data.email}`}
            </Text></TouchableOpacity>}
            {data.address  && data.address.city  && <Text style={[styles.textPadding, styles.normalText]}>
              {`${string("detail.city")} ${data.address.city}`}
            </Text>}
            {data.address  && data.address.street && <Text style={[styles.textPadding, styles.normalText]}>
              {`${string("detail.street")} ${data.address.street}`}
            </Text>}
            {data.address  && data.address.zipcode &&  <Text style={[styles.textPadding, styles.normalText]}>
              {`${string("detail.zipcode")} ${data.address.zipcode}`}
            </Text>}
            {data.phone   &&  <TouchableOpacity onPress={()=>Linking.openURL(`tel:${data.phone}`)}><Text style={[styles.textPadding, styles.normalText, {color:'#3285a8', marginTop: 16}]}>
              {`${string("detail.phone")} ${data.phone}`}
            </Text></TouchableOpacity>}
            

            <Text style={[styles.textPadding, styles.normalText, { marginTop: 16 }]}>
              {`${string("detail.desc")} ${string("detail.descText")}`}
            </Text>

          </View>
        </>
      </ScrollView>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: white,
  },
  headerContainer: {
    height: 57,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: blackColor,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 16
  },
  back: {
    position: 'absolute',
    height: 35,
    width: 35,
    left: 20,
    top: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginBottom: 16,
    height: 170,
    width: 150
  },
  topContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16
  },
  imageContainer: {
    width: 150
  },
  normalText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: blackColor
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: blackColor
  },
  nameContainer: {
    flex: 1
  },
  textPadding: {
    marginRight: 8,
    marginLeft: 16
  },
  bottomContainer: {
    marginTop: 16
  }
});

export default Detail;
