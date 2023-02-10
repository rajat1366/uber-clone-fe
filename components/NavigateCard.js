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
      <View className ="inline-flex">
            <View className="p-2 h-16">
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
            <TouchableOpacity onPress={()=>onClick()} className="pl-2">
                <Icon name="arrowright" color="white" type="antdesign" className="p-2 bg-black rounded-full w-10 mt-2"></Icon>
            </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default NavigateCard