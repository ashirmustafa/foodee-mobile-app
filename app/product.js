import {
    faAdd,
    faClose,
    faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,

} from "react-native";

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
const Product = () => {
    const navigation = useRouter();
    return (
        <>
            <View className="overflow-visible">
                <View className="px-5 pt-10 bg-lightRed h-[364px] relative">
                    <View className="flex flex-row justify-between mt-5">
                        <Text className="text-3xl font-bold text-white z-10">
                            Mr.Cheezy
                        </Text>
                        <TouchableOpacity                          
                            className="rounded-2xl p-5 bg-lightRedBackground w-[44px] h-[44px] flex items-center justify-center"
                            onPress={()=>navigation.navigate('/')}
                        >
                            <FontAwesomeIcon icon={faClose} color="#F28482" size={22}/>
                        </TouchableOpacity>
                    </View>
                    <View className="gap-1 mt-3 z-50">
                        <Text className="text-lightRed font-bold text-base bg-lightRedBackground rounded-3xl px-3 py-2 w-[122px] text-center">
                            Classic Taste
                        </Text>
                        <Text className="text-white font-bold text-base bg-greenBackground rounded-3xl px-3 py-2 w-[100px] text-center">
                            Bestseller
                        </Text>
                    </View>
                    <Image
                        source={require("../assets/bigBurger.png")}
                        className="absolute right-0 -bottom-8"
                    />
                </View>
                <View className="px-5">
                    <Text className="text-2xl mt-10">Add More Flavor 🤩</Text>
                    <FlatList
                        horizontal={true}
                        className="py-5"
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 10, paddingHorizontal: 12 }}
                        data={categoriesData}
                        keyExtractor={(item, idx) => item + idx}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                className=" w-[108px] h-[176px] rounded-2xl overflow-hidden bg-white relative px-2"
                                style={[styles.yellowShadowBox]}
                            >
                                <Image source={require("../assets/cheese.png")} className="" />
                                <View className="justify-center items-center pt-3">
                                    <Text>Chedder</Text>
                                    <Text>+ $0.79</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />

                    <View>
                        <View className="flex-row justify-between">
                            <Text className="text-2xl">Nutrition facts</Text>
                            <Text className="text-2xl"> 650 Cal</Text>
                        </View>
                        <View className="flex-row justify-between">
                            <View className="items-center">
                                <Text className="text-xl">650 Cal</Text>
                                <Text className="text-sm">Total Fat (45% DV)</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-xl">43 g</Text>
                                <Text className="text-sm">Total Carbs (16% DV)</Text>
                            </View>
                            <View className="items-center">
                                <Text className="text-xl">36 g</Text>
                                <Text className="text-sm">Protein</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="absolute bottom-0 p-5">
                <View className="flex-row w-[100%] justify-between">
                    <View className="flex-row items-center justify-center border-lightRed  py-5 border-2 rounded-3xl w-[174px]">
                        <TouchableOpacity className="rounded-full bg-lightRedBackground p-2 ">
                            <FontAwesomeIcon icon={faMinus} color="#F28482" size={16} />
                        </TouchableOpacity>
                        <Text className="text-xl mx-3">5</Text>
                        <TouchableOpacity className="rounded-full bg-lightRed p-2">
                            <FontAwesomeIcon icon={faAdd} color="#FFFFFF" size={16} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity className="items-center justify-center bg-lightRed py-5 rounded-3xl w-[174px]">
                        <Text className="text-xl text-white">Add to cart</Text>
                        <Text className="text-xl text-white font-bold">$27.45</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
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

export default Product
