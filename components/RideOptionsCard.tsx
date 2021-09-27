import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { ParamListBase, useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

import "intl";
import { Platform } from "react-native";
import "intl/locale-data/jsonp/en";

if (Platform.OS === "android") {
    // See https://github.com/expo/expo/issues/6536 for this issue.
    if (typeof (Intl as any).__disableRegExpRestore === "function") {
        (Intl as any).__disableRegExpRestore();
    }
}

interface DataInterface {
    id: string;
    title: string;
    multiplier: number;
    image: string;
}

const data: DataInterface[] = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn',
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8',
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf',
    },
]

const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const [selected, setSelected] = useState<DataInterface | null>(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View >
                <TouchableOpacity
                    onPress={() => navigation.navigate('NavigateCard')}
                    style={[tw`absolute top-3 left-5 p-3 rounded-full`, {zIndex: 1}]}
                >
                    <Icon name='chevron-left' type='fontawesome'/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride - { travelTimeInformation?.distance?.text }</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity 
                        onPress={() => setSelected(item)}
                        style={(id === selected?.id) ? tw`flex-row justify-between items-center px-10 bg-gray-200` : tw`flex-row justify-between items-center px-10`}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{ title }</Text>
                            <Text>{ travelTimeInformation?.duration?.text } Travel Time</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-nz', {
                                style: 'currency',
                                currency: 'NZD'
                            }).format(
                                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled={!selected} style={!selected ? tw`bg-black py-3 bg-gray-300` : tw`bg-black py-3`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose { selected?.title }</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
