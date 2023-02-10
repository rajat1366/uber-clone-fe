import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import MapScreen from '../screens/MapScreen'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const data = [

    {
        id:"123",
        title:"Get a ride",
        src: require("../assets/UberX.webp"),
        screen: "MapScreen",
    },
    {
        id:"456",
        title:"Order food",
        src: require("../assets/eatsLogo.png"),
        screen: "EatsScreen",
    },
]

const NavOptions = () => {
    const origin = useSelector(selectOrigin);
    const navigation = useNavigation();
  return (
    <FlatList data={data} horizontal  //it traverse the list passed to it.
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <TouchableOpacity 
                className="p-2 px-6 py-4  bg-gray-200 m-2 w-35"
                onPress={()=>navigation.navigate(item.screen)}
                disabled={!origin}
            >
                <View className= {!origin ?"opacity-20":""}>
                    <Image 
                        source={item.src}
                        style={ {width:90 , height:90,resizeMode:"contain",}}
                        ></Image>
                    <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
                    <Icon name="arrowright" color="white" type="antdesign" className="p-2 bg-black rounded-full w-10 mt-4"></Icon>
                </View>
                
            </TouchableOpacity>
        )}
    ></FlatList>
  )
}

export default NavOptions