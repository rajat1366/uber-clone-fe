import { View, Text,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const RideOptionsCard = () => {
    const navigation = useNavigation();
    
  return (
    <SafeAreaView className="bg-white flex-grow">
        <View>
            
             <TouchableOpacity onPress={()=>{navigation.navigate("NavigateCard")}} className="absolute top-3 left-5 p-3 z-50" >
                <Icon name="chevron-left" type="fontawesome"/>
             </TouchableOpacity>
            <Text className="text-center py-5 text-xl">Select a Ride</Text>
        </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard