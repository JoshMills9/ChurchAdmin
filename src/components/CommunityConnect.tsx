import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { COLORS } from "../constants/colors";

const CommunityConnect = ({onPress}: {onPress: any}) => {
  const img = require("../assets/images/d6.jpeg");
  const img1 = require("../assets/images/d3.jpeg");
  const img2 = require("../assets/images/d2.jpeg");
  const [isConnect, setIsConnect] = useState(false)

  const handleConnect = async () => {
    try {
      await AsyncStorage.setItem('connected', 'connect');
    } catch (e) {
      console.error('Failed to save the data to the storage', e);
    }
  };

  const dimensions = useWindowDimensions()
  const styles = connectStyles(dimensions)

  return (
    <View style={styles.emptyView}>
      <View style={styles.imageView}>
        <View>
          <View
            style={{
              width: 80,
              alignItems: "center",
              justifyContent: "center",
              height: 80,
              borderRadius: 50,
              backgroundColor: "rgb(24, 29, 28)",
            }}
          >
            <Image
              source={img}
              style={{ width: 70, height: 70, borderRadius: 50 }}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              backgroundColor: "rgb(24, 29, 28)",
            }}
          >
            <Image
              source={img1}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              backgroundColor: "rgb(24, 29, 28)",
            }}
          >
            <Image
              source={img2}
              style={{ width: 40, height: 40, borderRadius: 50 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.mainEmptyView}>
        <View style={{ width: "80%" }}>
          <Text style={styles.communityText}>Connect to Community</Text>
        </View>
        <View>
          <Text style={styles.descripText}>
            Let others knnow that God is still working through your ministry.
          </Text>
        </View>
        <TouchableOpacity onPress={() => {onPress(true); handleConnect(); setIsConnect(true)}} style={styles.connectView}>
          <Text style={styles.connect}>{isConnect ? 'Connecting...' : 'Connect'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const connectStyles = (dimensions : any) =>  StyleSheet.create({
  emptyView: {
    height: dimensions.height >= 700 ?  400 : 350,
    justifyContent: dimensions.height >= 700 ? 'space-around' :"center",
  },
  mainEmptyView: {
    height: dimensions.height >= 700 ?  "80%" : '60%',
    borderRadius: 20,
    backgroundColor: "rgb(24, 29, 28)",
    justifyContent: "space-between",
    padding: 20,
    elevation: 5,
  },
  connectView: {
    backgroundColor: "rgb(38, 43, 42)",
    width: "60%",
    height: dimensions.height >= 700 ?  50 : 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  connect: {
    fontSize: dimensions.height >= 700 ?  18 : 15,
    fontWeight: "600",
    color: COLORS.CREATEBUTTON,
  },
  communityText: {
    fontSize: dimensions.height >= 700 ? 35 : 25,
    fontWeight: "bold",
    color: COLORS.PRIMARYTEXT,
  },
  descripText: {
    fontSize: dimensions.height >= 700 ? 14 : 12,
    fontWeight: "400",
    lineHeight: 16,
    color: COLORS.PRIMARYTEXT,
  },
  imageView: {
    width: dimensions.height >= 700 ?  120 : 100,
    height: dimensions.height >= 700 ?  120 : 100,
    position: "absolute",
    right: dimensions.height >= 700 ? 40 : 60,
    padding: 20,
    top: dimensions.height >= 700 ? 5 : 50,
    zIndex: 9,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CommunityConnect;
