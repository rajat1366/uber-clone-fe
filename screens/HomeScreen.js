import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setDestination, setOrigin ,selectOrigin} from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const origin = useSelector((state)=>selectOrigin(state));
  function test(){
    dispatch(setOrigin({
        location: {"lat":30.7191,"lng":76.7487}
    }));
    dispatch(setDestination(null));
    console.log(origin);
  }
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          style={ {width:80 , height:80,resizeMode:"contain",}}
          source={require('../assets/logo.svg')}
          className="mt-2"
        ></Image>
        <TouchableOpacity onPress={()=>{test();}} className=""><Text>Search</Text></TouchableOpacity>
        <View className="h-12">
          <GooglePlacesAutocomplete 
            // styles={{container:{flex:0,},
            //         textInput:{fontSize:18,}, }}
            placeholder='Where From?'
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
        
        <NavOptions></NavOptions>
      </View>
     
    </SafeAreaView>
  )
}

export default HomeScreen