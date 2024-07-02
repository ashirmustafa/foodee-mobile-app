// todo: yellow dropshadow not working
import {
    faAdd,
    faClose,
    faFilter,
    faHome,
    faMinus,
    faMugSaucer,
    faSearch,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
  import { StatusBar } from "expo-status-bar";
  import {
    Text,
    View,
    Image,
    TextInput,
    SafeAreaView,
    Button,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Modal,
  } from "react-native";
  import { Badge } from "@rneui/themed";
  import { useState } from "react";
import { useRouter } from "expo-router";
  
  const data = [
    {
      text: "Free Donut!",
      description: "For orders over $20",
      imgSrc: "../assets/donut.png",
      backgroundColor: "#84A59D",
    },
    {
      text: "Free Coke!",
      description: "For orders over $110",
      imgSrc: "../assets/donut.png",
      backgroundColor: "#FFEF92",
    },
    {
      text: "Free Lays!",
      description: "For orders over $90",
      imgSrc: "../assets/donut.png",
      backgroundColor: "#F5CAC3",
    },
  ];
  const categoriesData = [
    {
      text: "Burgers",
      imgSrc: require("../assets/burger.png"),
      backgroundColor: "#FFEF92",
    },
    {
      text: "Fries",
      imgSrc: require("../assets/fries.png"),
      backgroundColor: "#F5CAC3",
    },
    {
      text: "Drinks",
      imgSrc: require("../assets/burger.png"),
      backgroundColor: "#B6D7CF",
    },
    {
      text: "Drinks",
      imgSrc: require("../assets/fries.png"),
      backgroundColor: "#F5CAC3",
    },
    {
      text: "Drinks",
      imgSrc: require("../assets/burger.png"),
      backgroundColor: "#F5CAC3",
    },
  ];
  export default function App() {
    const navigation = useRouter();
    return (
      <SafeAreaView className="flex-1 bg-white items-center py-10">
        <View className="px-3 py-2 w-full max-w-[400px] relative">
          <View
            className="bg-lightYellow rounded-[28px] flex flex-row items-center px-5 py-5  mb-4"
            style={styles.blackShadowBox}
          >
            <Image
              source={require("../assets/profile-picture.png")}
              className="w-[64px] h-[64px ] rounded-full mr-3"
            />
            <View>
              <Text className="text-base font-light">Welcome back, Pin!</Text>
              <Text className="text-base font-light">How Hungry are you?</Text>
            </View>
          </View>
  
          <View className="flex flex-row justify-between">
            <View className="bg-darkGray rounded-2xl px-6 py-2 flex flex-row items-center max-w-[320px] w-[100%]">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-placeholderColor text-lg mr-3"
              />
              <TextInput
                placeholder="Search..."
                className="flex-1 text-lg ml-3"
              />
            </View>
            <TouchableOpacity className="bg-lightRed w-[44px] h-[44px] rounded-2xl flex justify-center items-center">
              <Image source={require("../assets/Filter.png")} />
            </TouchableOpacity>
          </View>
  
          <View className="mt-[26px]">
            <Text className="text-3xl">Today's Menu</Text>
          </View>
  
          <View className="overflow-visible">
            <FlatList
              horizontal={true}
              className="py-5"
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
              data={data}
              keyExtractor={(item, idx) => item + idx}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="flex justify-center w-[335px] h-[128px] rounded-2xl bg-red-500 relative overflow-visible"
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  <Image
                    source={require("../assets/donut.png")}
                    className="absolute right-0 top-[-10px]"
                  />
                  <View className="ml-5">
                    <Text className="text-3xl text-white font-bold">
                      {item.text}
                    </Text>
                    <Text className="text-lg text-white font-light">
                      {item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
  
          <FlatList
            horizontal={true}
            className="py-5"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
            data={categoriesData}
            keyExtractor={(item, idx) => item + idx}
            renderItem={({ item }) => (
              <TouchableOpacity
                className=" w-[104px] h-[128px] rounded-2xl overflow-hidden bg-red-500 relative"
                style={[
                  styles.yellowShadowBox,
                  { backgroundColor: item.backgroundColor },
                ]}
              >
                <Image
                  source={item.imgSrc}
                  className="absolute bottom-[0px] left-[12px] w-[96px]"
                />
                <View className="flex flex-row justify-center pt-3">
                  <Text>{item.text}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
  
          <View className="mt-3 mb-5 ml-2">
            <Text className="text-2xl">Best Offers 💕</Text>
            
            <TouchableOpacity
              className="flex justify-center w-[335px] h-[128px] mt-4 rounded-2xl bg-white relative"
              style={styles.yellowShadowBox}
              onPress={() => navigation.navigate('/product')}
            >
              <Image
                source={require("../assets/frenchDog.png")}
                className="absolute left-10 top-[25px]"
              />
              <View className="ml-32">
                <Text className="text-3xl text-black font-bold">Frenchdog</Text>
                <Text className="text-lg text-black font-light">
                  Tasty&Spicy 🌶🌶🌶
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* bottom navigation */}
        <View
          className="flex flex-row justify-between absolute bottom-0 min-w-[373px] rounded-3xl px-8 py-3 mb-5 bg-white"
          style={styles.blackShadowBox}
        >
          <View className="flex items-center justify-center">
            <Image source={require("../assets/location.png")} className="mb-1" />
            <Text>Location</Text>
          </View>
          <View className="flex items-center justify-center">
            <Image source={require("../assets/Bag.png")} className="mb-1" />
            <Text>Home</Text>
          </View>
          <View className="flex items-center justify-center">
            <Image source={require("../assets/Bag.png")} className="mb-1" />
            <Badge
              status="error"
              value={5}
              containerStyle={{ position: "absolute", top: 0, left: 25 }}
            />
            <Text>My Cart</Text>
          </View>
          <View className="flex items-center justify-center">
            <Image source={require("../assets/User.png")} className="mb-1" />
            <Text>Me</Text>
          </View>
        </View>
      </SafeAreaView>
  
      
    );
  }
  
  const styles = StyleSheet.create({
    yellowShadowBox: {
      shadowColor: "#F2CC8F",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.4,
      shadowRadius: 20,
      elevation: 30,
    },
    blackShadowBox: {
      shadowColor: "#C2BFAC",
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.6,
      shadowRadius: 32,
      elevation: 10,
    },
    flavorShadowBox: {
      shadowColor: "#D6D3C0",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.4,
      shadowRadius: 20,
    },
  });
  