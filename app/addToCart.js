import { faAdd, faClose, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Button } from 'react-native';

const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    // { id: 4 },
    // { id: 5 },
    // { id: 11 },
]
let stepOne_content = (
    <Text>step1 content</Text>
)
let stepTwo_content = (
    <>
        <Text>step2 content</Text>
    </>
)
let stepThree_content = (
    <>
        <Text>step2 content</Text>
    </>
)
const AddToCart = () => {
    const navigation = useRouter();
    const steps = [
        {
            id: 1,
            label: 'My Orders',
            content: stepOne_content
        },
        {
            id: 2,
            label: 'Details',
            content: stepTwo_content
        },
        {
            id: 3,
            label: 'Payment',
            content: stepThree_content
        },
    ];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    return (
        <View className="px-5 h-full">
            <View className="flex flex-row justify-between mt-10">
                <Text className="text-3xl font-bold z-10">
                    Mr.Cheezy
                </Text>
                <TouchableOpacity
                    className="rounded-2xl p-5 bg-lightRedBackground w-[44px] h-[44px] flex items-center justify-center"
                    onPress={() => navigation.navigate('/')}
                >
                    <FontAwesomeIcon icon={faClose} color="#FFFFFF" size={22} />
                </TouchableOpacity>
            </View>

            <View className="justify-between items-center flex-row mt-10 relative">
                {steps.map((step) => (
                    <View className={`items-center opacity-50 ${currentStep === step.id && "opacity-100"} ${step.id < currentStep && "opacity-100"}`} key={step.id}>
                        <Text>{step.label}</Text>
                        <View
                            className={`rounded-full w-[54px] h-[54px] justify-center items-center bg-lightRedBackground ${currentStep === step.id && "bg-lightRed text-black"} ${step.id < currentStep && "bg-lightRed"}`}
                        >
                            <Text className="text-white">{step.id}</Text>
                        </View>
                    </View>
                ))}
                {/* <View className={`bg-lightRed h-[1px] w-[50%] absolute z-0 top-[62%]`} >
                </View> */}

            </View>


            {/* {steps.map((step) => (
                <View key={step.id}>
                    {step.content}
                </View>
            ))} */}

            <View>
                <View className="flex flex-row justify-between items-center mt-10">
                    <Text className="text-3xl font-bold z-10">
                        Order
                    </Text>
                    <TouchableOpacity
                        className=""

                    >
                        <Text className="text-lightRed text-xl">Clear all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {data.map((item) => (

                        <View className="px-5 py-4 flex-row items-center rounded-3xl mt-5 bg-white" key={item.id} style={styles.yellowShadowBox}>
                            <Image source={require('../assets/smallBurger.png')} />
                            <View className="ml-5">
                                <Text className="text-base">Mr.Cheezy</Text>
                                <Text className="text-base text-lightRed">$5.49</Text>
                            </View>
                            <View className="flex-row items-center justify-end py-5  rounded-3xl w-[174px] ml-auto">
                                <TouchableOpacity className="rounded-full bg-lightRedBackground p-2 ">
                                    <FontAwesomeIcon icon={faMinus} color="#FFFFFF" size={16} />
                                </TouchableOpacity>
                                <Text className="text-xl mx-5">5</Text>
                                <TouchableOpacity className="rounded-full bg-lightRed p-2">
                                    <FontAwesomeIcon icon={faAdd} color="#FFFFFF" size={16} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    ))}
                </ScrollView>

            </View>

            <View className="absolute bottom-5 left-[5%] w-[100%]">
                <TouchableOpacity className="px-10 py-7 bg-lightRed rounded-3xl border-4 border-white w-[100%] flex-row items-center justify-center"
                    onPress={() => {
                        currentStep === steps.length ? setComplete(true) : setCurrentStep((prev) => prev + 1);
                    }}
                >
                    <Text className="text-base text-white mr-5">Next Step</Text>
                    <Text className="text-xl font-bold text-white">$85.18</Text>
                </TouchableOpacity>
            </View>
        </View>
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

export default AddToCart;
