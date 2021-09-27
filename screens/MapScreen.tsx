import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import MapView from 'react-native-maps';
import Map from '../components/Map'
import { RootStackParamList } from './RootStackParamList';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements'
import { ParamListBase, useNavigation } from '@react-navigation/core';

const MapScreen = () => {
    const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    return (
        <View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('HomeScreen')}
                style={tw`absolute top-12 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}
            >
                <Icon name='menu' />
            </TouchableOpacity>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Navigator>
                    <Screen
                        name='NavigateCard'
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Screen
                        name='RideOptionsCard'
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Navigator>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
