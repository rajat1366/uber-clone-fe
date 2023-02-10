import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setDestination } from '../slices/navSlice';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RideOptionsCard from './RideOptionsCard';
const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    function onClick(){
        dispatch(setDestination({
            location: {"lat":30.7016,"lng":76.7653}
        }));
        navigation.navigate(RideOptionsCard);
    }
    
  return (
    <SafeAreaView className =" flex-1 bg-white">
      <Text className="text-center py-4 text-xl">NavigateCard</Text>
      <View className ="flex-row">
            <View className="p-2 h-16 flex-1">
                    <GooglePlacesAutocomplete 
                    styles={{textInput:{fontSize:18,borderRadius:0,backgroundColor:"#DDDDDF"}, }}
                    
                    placeholder='Where To?'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    query={{
                    key:GOOGLE_MAPS_APIKEY,
                    language:'en'
                    }}
                    onPress={()=>{test();}}
                    minLength={2}
                    enablePoweredByContainer={false}
                />
            
                
            </View>
            <TouchableOpacity onPress={()=>onClick()} className="px-2">
                <Icon name="arrowright" color="white" type="antdesign" className="p-2 bg-black rounded-full w-10 mt-2"></Icon>
                
            </TouchableOpacity>
            

      </View>
      <View className="flex-row bg-white justify-evenly py-2 mt-auto border-gray-100 border-t">
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate(RideOptionsCard)}
                    className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full">
                        <Icon name="car" type="font-awesome" color="white" size={16}/>
                            <Text className="text-white text-center"> Rides</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex flex-row justify-between bg-white w-24 px-4 py-3 rounded-full">
                        <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
                            <Text className="text-black text-center"> Rides</Text>
                    </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard