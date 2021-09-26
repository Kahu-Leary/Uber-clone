import { ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

interface DataInterface {
    id: string;
    title: string;
    image: string;
    screen: string;
}

const data: DataInterface[] = [
    {
        id: '1',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '2',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen',
    },
]

const NavOptions = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={data}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(item.screen)
                    }}
                    disabled={!origin}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                >
                    <View style={!origin && tw`opacity-20`}>
                        <Image
                            style={{
                                width: 120,
                                height: 120,
                                resizeMode: 'contain'
                            }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name='arrowright'
                            color='white'
                            type='antdesign'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions
