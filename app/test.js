import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const DonutCard = () => {
  return (
    <View style={[styles.cardContainer, { backgroundColor: '#000000' }]}>
      <View style={{}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "900",
            color: "#FFFFFF",
          }}
        >
          Free Donut!
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "400", color: "#F4F1DE" }}>
          For orders over $20
        </Text>
      </View>
      <Image
        source={require("../assets/donut.png")}
        style={styles.cardImage}
      />
    </View>
    
  );
};

export default DonutCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 340,
    height: 150,
    marginEnd: 10,
    marginStart: 10,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#84A59D",
    padding: 20,
    borderRadius: 20,
  },
  cardImage: {
    // width: 140,
    // height: 130,
    marginTop: -60,
    // objectFit: "cover",
    zIndex: 1,
  },
});