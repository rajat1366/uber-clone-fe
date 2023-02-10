import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from "@env";

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(()=>{
        if(!origin || !destination) return ;

        mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
            edgePadding:{top:50,right:50,bottom:50,left:50}
        });
    },[origin,destination])
  return (
    <MapView className = "flex-1"
    ref = {mapRef}
    mapType='mutedStandard'
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
    >   
        {origin && destination && (
            <MapViewDirections apikey={GOOGLE_MAPS_APIKEY}/>
        )}
        {origin?.location && (
            <Marker coordinate={{ latitude : origin.location.lat , longitude : origin.location.lng, }} 
                    title="Origin" 
                    identifier='origin'
            />
        )}
        {destination?.location && (
            <Marker coordinate={{ latitude : destination.location.lat , longitude : destination.location.lng, }} 
                    title="Destination" 
                    identifier='destination'
            />
        )}

    </MapView>
  )
}

export default Map